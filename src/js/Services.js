import '../css/Services.css';
export default function Services() {
    const Services = document.createElement("div");
    Services.className = "Services";
    Services.innerHTML = `
        <div class="Service">
            <img src="/icons/check.png" alt="Service image">
            <h2>Benefit #1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab.</p>
        </div>
        <div class="Service">
            <img src="/icons/check.png" alt="Service image">
            <h2>Benefit #2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab.</p>
        </div>
        <div class="Service">
            <img src="/icons/check.png" alt="Service image">
            <h2>Benefit #3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab.</p>
        </div>
        <div class="Service">
            <img src="/icons/check.png" alt="Service image">
            <h2>Benefit #4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore, alias, numquam enim ab.</p>
        </div>

       `;

       $(document).ready(function() {
        
        $('.Service').hover(
            function() {
                
                $(this).css({
                    'background-color': 'rgba(0, 0, 0, 1)',
                    'transform': 'scale(1.1)',
                    'transition': 'all 0.5s ease-in-out',
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
    return Services;
}