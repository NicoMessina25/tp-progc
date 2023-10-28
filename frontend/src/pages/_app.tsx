import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  connectToDevTools: true,
  uri: "https://tp-progc-backend.vercel.app/graphql",
  cache: new InMemoryCache(),
  name: "TransportIt",
  version: "1.0"
});


const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className + " body dark min-h-screen"}>
    <ApolloProvider client={client} >
      <Component {...pageProps} />
    </ApolloProvider>
  </div>
   
}
