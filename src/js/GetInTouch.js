import '../css/GetInTouch.css';
export default function GetInTouch() {
    const GetInTouch = document.createElement("div");
    GetInTouch.className = "GetInTouch";

    GetInTouch.innerHTML = `
        <div class="GetInTouch__content">
            <div class="GetInTouch__content__header">
                <h2>What are you waiting for?</h2>
                <h1>Get The '30-Day ZERO to 1k Social Planner' Now!</h1>
                <button class="download">Yes! Download This Now!</button>
            </div>
            <div class="GetInTouch__content__body">
                <ul>
                    <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque!</li>
                    <li>​Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque!</li>
                    <li>​Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque!</li>
                </ul>
                
            </div>
        </div
       `;
       $(document).ready(function() {
        $('.download').hover(
            function() {
                
                $(this).css({
                    'background-color': '#f1f1f1', 
                    'transform': 'scale(1.05)', 
                    "transition": "all 0.5s ease-in-out",
                    'color': 'black',
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
    return GetInTouch;
}