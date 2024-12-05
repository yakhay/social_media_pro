import '../css/Testimonials.css';
export default function Testimonials() {
    
    const Testimonials = document.createElement("div");
    Testimonials.className = "Testimonials";
    Testimonials.innerHTML = `
    <img src="/images/Testimonial_img.jpeg" alt="Testimonial image">
    <div class="Testimonials__content">
        <h1>"This planner is a GAME CHANGER!"</h1>
        <p>"nim ab volu ptate. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Lorem ipsum dolor sit amet, conse ctetur ad ipis ctetur adipis icing elit icing elit. Relias, numquam enim conse ctetur adipis icing elit ab volu ptate."</p>
        <p>- <span class="Testimonial_span">Customer Name</span>, CEO, Company</p>
        </div>
    `
    return Testimonials;
}