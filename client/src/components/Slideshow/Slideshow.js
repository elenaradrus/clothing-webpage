import { useState } from 'react';

import './Slideshow.styles.css';


const Slideshow = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPreviousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <div className='mainPage-container'>
            <div>
                <div onClick={goToPreviousSlide} className='leftArrow'>
                    ❰
                </div>
                <div onClick={goToNextSlide} className='rightArrow'>
                    ❱
                </div>
            </div>

            <div className='slideShow' style={slideStylesWidthBackground}>

            </div>
        </div>
    );
}

export default Slideshow;