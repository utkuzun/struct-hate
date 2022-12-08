import React from 'react'
import './App.css'

import Header from './components/header'
import NFTCarousel from './components/NFT carousel'
import Team from './components/team'
import Footer from './components/footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <NFTCarousel />
      <Team />
      <Footer />
    </div>
  )
}

export default App
