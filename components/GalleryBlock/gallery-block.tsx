import React from 'react';
import { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import { GalleryBlockP } from '../../types';

import styles from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

const GalleryBlock: React.FC<GalleryBlockP> = props => {
  const { title, images } = props.data;

  return (
    <div className={styles.block}>
      <p className={styles.title}>{title}</p>
      <Swiper
        slidesPerView={'auto'}
        modules={[Mousewheel, Pagination]}
        spaceBetween={24}
        pagination={{
          clickable: true,
          bulletActiveClass: styles.bullet_active,
          bulletClass: styles.bullet,
          clickableClass: styles.bulletsBlock
        }}
        className={styles.swiper}
        mousewheel
      >
        {images.map(({ asset, _key: key }) => (
          <SwiperSlide className={styles.slide} key={key}>
            <Image
              src={urlForImage(asset._ref).width(750).height(468).url()}
              width={750}
              height={468}
              alt={''}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryBlock;
