'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";
import '../style/ConcertSlider.css';

const TrendingEventsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const events = [
        { image: 'images/3p.png',},
        { image: '/images/4p.webp',  },
        { image: '/images/2p.webp',  },
        { image: '/images/1p.webp',  },
        { image: '/images/3s.webp',  },
        { image: '/images/1l.webp',   },
    ];

    const totalSlides = events.length;

    return (
        <div className="slider-container">
            <h2 className="slider-title">Top Selling Concerts</h2>
            <div className="slider-wrapper">
                <div className="slider-nav">
                    <button className="slider-nav-button prev-button">
                        <IoIosArrowBack />
                    </button>
                    <span className="slider-nav-text">
                        {currentSlide} of {totalSlides}
                    </span>
                    <button className="slider-nav-button next-button">
                        <IoIosArrowForward />
                    </button>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    className='swiper'
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.next-button',
                        prevEl: '.prev-button',
                    }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-card">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="slider-image"
                                />
                                <div className="slider-content">
                                    <h3 className="slider-event-title">{event.title}</h3>

                                </div>
                            </div>
                    
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TrendingEventsSlider;
