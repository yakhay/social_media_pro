import Hero from "./js/Hero"
import Slider from "./js/Slider"
import About from "./js/About"
import Services from "./js/Services"
import Testimonials from "./js/Testimonials"
import GetInTouch from "./js/GetInTouch"
import Footer from "./js/Footer"

const root = document.getElementById("root")
    if (root) {
        root.appendChild(Hero());
        root.appendChild(Slider());
        root.appendChild(About());
        root.appendChild(Services());
        root.appendChild(Testimonials());
        root.appendChild(GetInTouch());
        root.appendChild(Footer());
    }
