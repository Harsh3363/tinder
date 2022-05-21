import '../styles/globals.css'
import React from 'react'
import { TinderProvider } from '../context/TinderContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl='https://82gsbrsvzkts.usemoralis.com:2053/server'
    appId='7PGeonet6xJsmU6SChLhA4BSQhM6PGCNq0sXPGgQ'
    >
    <TinderProvider>
      <Component {...pageProps} />
    </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp
