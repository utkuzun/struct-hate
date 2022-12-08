import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

const MySwiper = ({ context, ...rest }) => {
  return (
    <Swiper
      className='swiper'
      effect='coverflow'
      keyboard
      grabCursor
      centeredSlides
      loop
      modules={[Navigation, Pagination]}
      slidesPerView={'auto'}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 5,
        depth: 180,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
      {...rest}
    >
      <div className='swiper-wrapper'>
        {context.map((item, index) => {
          return (
            <SwiperSlide key={index} className='card swiper-slide'>
              <div className='card__image'>
                <img src={item.image} alt='card image' />
              </div>
              <div className='card__content'>
                <span className='card__title'>{item.title}</span>
                <span className='card__name'>{item.name}</span>
                <p className='card__text'>{item.info}</p>
                <button className='card__btn'>{item.button}</button>
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

export default MySwiper
