'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';

// Import Swiper styles
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your custom CSS
import '../style/TrendingSlider.css';

const TrendingEventsSlider = () => {
    const [theCurrentSlide, settheCurrentSlide] = useState(1);

    const events = [
        {
            image: '/images/ground.webp',
            title: 'Tennessee at 12 Georgia',
            date: 'Nov 17',
            price: 'From $283',
        },
        {
            image: '/images/runner.webp',
            title: 'Hornets at Cavaliers',
            date: 'Nov 17',
            price: 'From $44',
        },
        {
            image: '/images/newmax.webp',
            title: 'Hornets at Cavaliers',
            date: 'Nov 17',
            price: 'From $44',
        },
        {
            image: '/images/cry.webp',
            title: 'Hornets at Cavaliers',
            date: 'Nov 17',
            price: 'From $44',
        },
        {
            image: '/images/sing.webp',
            title: 'Bille Eilish',
            date: 'Nov 16',
            price: 'From $182',
        },
        {
            image: '/images/wrist.webp',
            title: 'New Mexico State at 15 Texas',
            date: 'Nov 16',
            price: 'From $72',
        },
    ];

    return (
        <div className="container">
            <div className="wrapper">
                <h2 className="title">Trending Events</h2>
                <div className="nav-container-trending">
                    <button className="nav-button-trending custom-prev">
                        {/* &lt; */}
                        <IoIosArrowBack />
                    </button>
                    <span className="nav-text-trending">
                        {theCurrentSlide} of {events.length}
                    </span>
                    <button className="nav-button-trending custom-next">
                        <IoIosArrowForward />
                    </button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    onSlideChange={(swipers) => settheCurrentSlide(swipers.realIndex + 1)}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {events.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-slide">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="swiper-image"
                                />
                                <div className="swiper-content">
                                    <h3 className="swiper-title">{event.title}</h3>
                                    <p className="swiper-date">{event.date}</p>
                                    <p className="swiper-price">{event.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
// 
export default TrendingEventsSlider;
