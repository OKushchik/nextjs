'use client'
import styles from './style.module.scss'
import Announce from "@/components/Announce/Announce";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from "swiper/modules";
import {announcement} from "@/dt";
export default function AnnouncementPage() {
  return (
    <div>
      <h2 className={styles.title}>Announcement</h2>
      <div className={styles.swiperWrapper}>
        <Swiper
          slidesPerView={2.8}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            announcement.map((item)=>{
             return (<SwiperSlide key={item.id}><Announce image={item.image} date={item.date} title={item.title} description={item.description}/></SwiperSlide>)
            })
          }
        </Swiper>
      </div>
    </div>
  );
}
