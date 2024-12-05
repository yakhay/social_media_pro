import '../css/Slider.css'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

export default function Slider() {
    
    const Slider = document.createElement('div');
    Slider.className = 'slider';
    Slider.innerHTML = `
        <div class="slider__slide">
            <img src="/images/Silider/binance.png" alt="placeholder image">
        </div>
        <div class="slider__slide">
            <img src="/images/Silider/bitforex.png" alt="placeholder image">
        </div>
        <div class="slider__slide">
            <img src="/images/Silider/bitpanda.png" alt="placeholder image">
        </div>
        <div class="slider__slide">
            <img src="/images/Silider/coinbase.png" alt="placeholder image">
        </div>
        <div class="slider__slide">
            <img src="/images/Silider/cordura.png" alt="placeholder image">
        </div>
    `;

    setTimeout(() => {
        $(Slider).slick({
            dots: false, 
            infinite: true, 
            speed: 300, 
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }, 0);

    return Slider;
}
