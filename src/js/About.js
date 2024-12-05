import '../css/About.css';
export default function About() {
    const About = document.createElement("div");
    About.className = "About";

    About.innerHTML = `
        <img src="../../public/images/About.jpeg" alt="About image">
        <div class="About__content">
            <h1>Never Worry About Doing This Or That Ever Again!</h1>
            <p>Autem dolore, alias, numquam enim ab volu ptate. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Relias, numquam enim ab volu ptate. Autem dolore, alias, numquam enim ab volu ptate. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Relias, numquam enim ab volu ptate.
            </p>
            <p>Autem dolore, alias, numquam enim ab volu ptate. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Lorem ipsum dolor sit amet, conse ctetur adipis icing elit relias, numquam.</p>
        </div>
       `;

    return About;
}