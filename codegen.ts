import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_PORTS,
  documents: ['src/**/*.{tsx, ts, js, jsx}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins:[],
    }
  },
  ignoreNoDocuments: true,
}
 
export default config