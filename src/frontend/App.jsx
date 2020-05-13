import React from 'react'
import Hero from './components/Hero'
import CodeAnalysis from './components/CodeAnalysis'
import Navbar from './components/Navbar'
import Layout from './conteiners/Layout'
import { GlobalStyles } from './styles/globalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Layout>
        <Hero />
        <CodeAnalysis />
      </Layout>

    </>
  )
}

export default App
