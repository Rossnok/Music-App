import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/index';
import { SessionProvider } from 'next-auth/react'

type AppProps = {
  Component: any
  pageProps: any
  session: any
}

// Exporta por defecto una función llamada 'App'.
export default function App({ Component, pageProps, session }: AppProps) {
  // Retorna un elemento 'Component', que es un componente de React.
  // También pasa las propiedades 'pageProps' a este componente mediante el uso del operador "spread" {...pageProps}.
  return (
    <SessionProvider session={ session }>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  )

}
