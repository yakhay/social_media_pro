import '../css/Slider.css'; // Your custom slider styles
import 'slick-carousel/slick/slick.css'; // Slick slider CSS
import 'slick-carousel/slick/slick-theme.css'; // Optional: Slick theme
import $ from 'jquery';
import 'slick-carousel';

export default function Slider() {
    // Create the slider container
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
            autoplaySpeed: 1000,
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
