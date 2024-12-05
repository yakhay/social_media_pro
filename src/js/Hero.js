import '../css/Head.css';
export default function Hero() {
    const header = document.createElement("div");
    header.className = "header";
    
    header.innerHTML = `
        
            <nav>
            <a class="logo" href="/">LOGO</a>
            <a class="email href="mailto:support@yourbrand.com" ><img class="email-icon" src="/images/email.png" alt="Email Icon"> <p class="email-name">  support@yourbrand.com </p></a>
            
            </nav>
            <div class="Hero">
            <h1>How Would You Like To Become A Social Media Professional?</h1>
            <p>Just Enter Your Email Below To Get Instant Access To My 'Social Media Pro Blueprint'!</p>
            </div>
            
            <form>
            <input type="email" placeholder="Your Email Address Here...">
            <button class="bott">Yes! Download This Now!</button>
            </form>
            <img class="header_img" src="/images/image_hero.png" alt="placeholder image">
    `;
    $(document).ready(function() {
        
        $('.bott').hover(
            function() {
                
                $(this).css({
                    'background-color': 'rgba(0, 0, 0, 0.5)', 
                    'transform': 'scale(1.1)', 
                });
            },
            function() {
                
                $(this).css({
                    'background-color': '',
                    'transform': '', 
                });
            }
        );
    });
    return header;
}