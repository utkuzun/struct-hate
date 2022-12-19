import React from 'react'

import Container from './components/container'
import Header from './components/header'
import NFTCarousel from './components/NFT carousel'
import Team from './components/team'
import Footer from './components/footer'
import MyButton from './components/buttons'
function App() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
  return (
    <div>
      <Header />
      {/* <div className={styles.container}>
        <MyButton text={'Start App'} color={'color1'} />
        <MyButton text={'Connect'} color={'color2'} />
      </div> */}
      <Container>
        <MyButton text={'Start App'} color={'color1'} />
        <NFTCarousel />
      </Container>
      <Container>
        <MyButton text={'Team'} color={'color3'} />
        <Team />
      </Container>
      <Footer />
    </div>
  )
}

export default App
