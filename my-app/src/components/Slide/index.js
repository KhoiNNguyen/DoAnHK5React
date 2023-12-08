import { useState } from 'react';
import React from "react";

import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames/bind';

import styles from './Slide.modual.scss'


const cx=classNames.bind(styles)

function SlideShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={cx('carousel-index')} >
      <Carousel.Item>
        <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/15/web-dong-ho-kieslect-01.jpg"  alt="Banner Big Redmi 12" />  
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/18/web-htc-wildfire-e3-lite-02.jpg" alt="Banner Big Redmi 12" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/11/15/web-dong-ho-kieslect-01.jpg" alt="Banner Big Redmi 12" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;