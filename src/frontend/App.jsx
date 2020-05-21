import React from 'react'
import Hero from './components/Hero'
import DesignAnalysis from './components/DesignAnalysis'
import CodeAnalysis from './components/CodeAnalysis'
import Features from './components/Features'
import Navbar from './components/Navbar'
import PerformaceAnalysis from './components/PerformaceAnalysis'
import EventualConectivity from './components/EventualConectivity'
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
        <Features />
        <DesignAnalysis />
        <PerformaceAnalysis />
        <EventualConectivity />
      </Layout>

    </>
  )
}

export default App
