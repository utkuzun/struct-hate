import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

const Team = () => {
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
        {[0, 1, 2, 3, 4].map((item, index) => {
          return (
            <SwiperSlide key={index} className='card swiper-slide'>
              <div className='card__image'>
                <img src={require('./images.png')} alt='card image' />
              </div>
              <div className='card__content'>
                <span className='card__title'>Participant`s Role</span>
                <span className='card__name'>Your Name Here</span>
                <p className='card__text'>
                  blablabla very super important carreer milestones and
                  testimonials
                </p>
                <button className='card__btn'>
                  Linkedin or sth bs like that
                </button>
              </div>
            </SwiperSlide>
          )
        })}
      </div>
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
      <div className='swiper-pagination'></div>
    </Swiper>
  )
}

export default Team
