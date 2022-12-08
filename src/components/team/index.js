import React from 'react'

import { useGlobalContext } from '../../context'

import MySwiper from '../swiper'

const Team = () => {
  const { team } = useGlobalContext()
  return <MySwiper context={team} />
}

export default Team
