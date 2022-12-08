import React from 'react'
import './App.css'

import Header from './components/header'
import NFTCarousel from './components/NFT carousel'
import Team from './components/team'

function App() {
  return (
    <div className='App'>
      <Header />
      <NFTCarousel />
      <br></br>
      <Team />
    </div>
  )
}

export default App
