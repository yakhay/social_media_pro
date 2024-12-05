import '../css/About.css';
export default function About() {
    const About = document.createElement("div");
    About.className = "About";

    About.innerHTML = `
        <img src="/images/About.jpeg" alt="About image">
        <div class="About__content">
            <h1>Never Worry About Doing This Or That Ever Again!</h1>
            <p>Autem dolore, alias, numquam enim ab volu ptate. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Relias, numquam enim ab volu ptate. Autem dolore, alias, numquam enim ab volu ptate. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Relias, numquam enim ab volu ptate.
            </p>
            <p>Autem dolore, alias, numquam enim ab volu ptate. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit relias, numquam.</p>
        </div>
       `;
       $(document).ready(function() {
        $(window).on('scroll', function() {
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            const aboutOffset = $(About).offset().top;

            if (scrollTop + windowHeight > aboutOffset) {
                $(About).find('.about-img').css({
                    'transform': 'translateX(0)',
                    'opacity': '1',
                    'transition': 'transform 1s ease, opacity 1s ease',
                });

                $(About).find('.About__content').css({
                    'transform': 'translateY(0)',
                    'opacity': '1',
                    'transition': 'transform 1s ease, opacity 1s ease',
                });
            }
            });
            $(About).find('.about-img').css({
                'transform': 'translateX(-100%)',
                'opacity': '0',
            });

            $(About).find('.About__content').css({
                'transform': 'translateY(50px)',
                'opacity': '0',
            });
        });
        $(window).on('load', function () {
            const aboutOffset = $(About).offset().top;
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
    
            if (scrollTop + windowHeight > aboutOffset) {
                $(About).find('.about-img').css({
                    transform: 'translateX(0)',
                    opacity: '1',
                    transition: 'transform 1s ease, opacity 1s ease',
                });
    
                $(About).find('.About__content').css({
                    transform: 'translateY(0)',
                    opacity: '1',
                    transition: 'transform 1s ease, opacity 1s ease',
                });
            }
        });

    return About;
}