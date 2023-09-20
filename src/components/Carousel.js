import React, { useEffect, useState } from 'react';
import '../styles/Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };
    if (images.length >= 2) {
        return (
            <div className="carousel">
                <button className="prev-button" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faLeftLong} />
                </button>
                <img
                    className="carousel-image"
                    src={images[currentSlide].url}
                    alt={`Slide ${currentSlide}`} />
                <button className="next-button" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faRightLong} />
                </button>
            </div>
        );
    } else {
        return (
            <div className="carousel">
                <img
                    className="carousel-image"
                    src={images[currentSlide].url}
                    alt={`Slide ${currentSlide}`}
                />
            </div>
        );
    }
}