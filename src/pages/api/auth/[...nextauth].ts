import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { FIND_USER } from "@/apollo/graphql/user/queries";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import bcrypt from 'bcryptjs'


export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'Rossnok' },
        password: { label: 'password', type: 'password', placeholder: '**********' }
      },
      async authorize(credentials, req) {
        try {
          const apolloClient = new ApolloClient({
            uri: 'http://localhost:4000/graphql',
            cache: new InMemoryCache
          });

          const user = await apolloClient.query({
            query: FIND_USER,
            variables: {
              username: credentials!.username,
            }
          })

          const passwordMatch = await bcrypt.compare(credentials!.password, user.data!.findUser!.password);
          if (!passwordMatch) throw new Error('Invalid credentials');

          return user.data
        } catch (error) {
          throw error
        }
      }
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.user = user
      return token;
    },
    session({ session, token }) {
      session.user = token.user as user
      return session
    }
  }
})

interface user {
  name?: string,
  email?: string,
}

