import React from 'react'

import { useGlobalContext } from '../../context'

import MySwiper from '../swiper'

const NFTCarousel = () => {
  const { carousel } = useGlobalContext()

  return <MySwiper context={carousel} />
}

export default NFTCarousel
