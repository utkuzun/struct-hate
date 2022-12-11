import React from 'react'
import styles from './App.module.css'

// import styles from './components/buttons/Button.module.css'

import Header from './components/header'
import NFTCarousel from './components/NFT carousel'
import Team from './components/team'
import Footer from './components/footer'
import MyButton from './components/buttons'
function App() {
  return (
    <div>
      <Header />
      {/* <div className={styles.container}>
        <MyButton text={'Start App'} color={'color1'} />
        <MyButton text={'Connect'} color={'color2'} />
      </div> */}
      <div className={`${styles.containerApp}`}>
        <MyButton text={'Start App'} color={'color1'} />
        <NFTCarousel />
      </div>
      <div className={`${styles.containerApp}`}>
        <MyButton text={'Team'} color={'color3'} />
        <Team />
      </div>
      <Footer />
    </div>
  )
}

export default App
