'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your custom CSS
import '../style/BrowseEvents.css';

const BrowseEvents = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
   

    const events = [
        { image: 'images/guitargirl.png', title: 'Concerts' },
        { image: '/images/fotbal.webp', title: 'NFL Footbal' },
        { image: '/images/basebal.webp', title: 'MLB Baseball' },
        { image: '/images/baseket.webp', title: 'NBA Basketball' },
        { image: '/images/hockey.webp', title: 'MLS Soccer' },
        { image: '/images/scoccer.webp', title: 'Football'}
    ];

    return (
        <div className="BrowseEvents-container">
            <div className="BrowseEvents-wrapper">

                <div class="header-container">
                    <div class="header-content">
                        <p class="browse-title">Browse Events</p>
                        <h1 class="location-title">Islamabad, PK</h1>
                        <div class="button-group">
                            <button class="btn">Change Location</button>
                            <button class="btn">Filter by Date</button>
                        </div>
                    </div>
                </div>

                
                <h2 className="title">Categories</h2>
                <div className="nav-container">
                    <button className="nav-button custom-prevs">
                        <IoIosArrowBack />
                    </button>
                    <span className="nav-text">
                        {currentSlide} of {events.length}
                    </span>
                    <button className="nav-button custom-nexts">
                        <IoIosArrowForward />
                   
                    </button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.custom-nexts',
                        prevEl: '.custom-prevs',
                    }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
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

export default BrowseEvents;
