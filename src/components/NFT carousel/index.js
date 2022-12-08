import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import GoldFront from './Card_HC_GoldFront.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

const NFTCarousel = () => {
  return (
    <Swiper
      className='swiper'
      modules={[Navigation, Pagination]}
      slidesPerView={'auto'}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
    >
      <div className='swiper-wrapper'>
        <SwiperSlide className='card swiper-slide'>
          <div className='card__image'>
            <img src={GoldFront} alt='card image' />
            <div className='card__content'>
              <span className='card__title'>HEADLINE CREATOR</span>
              <span className='card__name'>$49</span>
              <p className='card__text'>
                begin your journey without any limits and become a pianoeer of
                the deserve to earn concept
              </p>
              <button className='card__btn'>buy NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='card swiper-slide'>
          <div className='card__image'>
            <img src={GoldFront} alt='card image' />
            <div className='card__content'>
              <span className='card__title'>HEADLINE CREATOR</span>
              <span className='card__name'>$49</span>
              <p className='card__text'>
                begin your journey without any limits and become a pianoeer of
                the deserve to earn concept
              </p>
              <button className='card__btn'>buy NOW</button>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
      <div className='swiper-pagination'></div>
    </Swiper>
  )
}

export default NFTCarousel
