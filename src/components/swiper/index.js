import React from 'react'

import MyButton from '../buttons'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import styles from './Swiper.module.css'

const MySwiper = ({
  context,
  coverflow = false,
  customBtn = false,
  ...rest
}) => {
  return (
    <Swiper
      className={styles.swiper}
      effect='coverflow'
      keyboard
      grabCursor
      loop
      centeredSlides
      modules={[Navigation, Pagination, EffectCoverflow]}
      slidesPerView={'auto'}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      coverflowEffect={
        coverflow && {
          rotate: 20,
          stretch: 5,
          depth: 180,
          modifier: 1,
          slideShadows: false,
        }
      }
      pagination={{ clickable: true, el: '.swiper-pagination' }}
      {...rest}
    >
      <div className={styles.swiperWrapper}>
        <MyButton text={'Start App'} />
        {context.map((item, index) => {
          return (
            <SwiperSlide key={index} className={`${styles.card}`}>
              {({ isActive }) => (
                <div
                  className={`${!isActive && styles.notActiveSlide} ${
                    styles.flex
                  }`}
                >
                  <div className={styles.cardImage}>
                    <img
                      src={item.image}
                      alt='card image'
                      className={styles.cardImageImg}
                    />
                  </div>
                  <div
                    className={`${styles.cardContent} ${
                      coverflow && styles.coverflowCustom
                    }`}
                  >
                    <span className={styles.cardTitle}>{item.title}</span>
                    <span className={styles.cardName}>{item.name}</span>
                    <p className={styles.cardText}>{item.info}</p>
                    {customBtn ? (
                      <MyButton text={item.button} color={'color4'} />
                    ) : (
                      <button className={styles.cardBtn}>{item.button}</button>
                    )}
                  </div>
                </div>
              )}
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
