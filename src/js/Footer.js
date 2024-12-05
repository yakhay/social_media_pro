import '../css/Footer.css';
export default function Footer() {
    const Footer = document.createElement("div");
    Footer.className = "footer";

    Footer.innerHTML = `
            <div class="Footer__content">
                <h2>YOUR COMPANY ©2020 All Rights Reserved</h2>
                <div class="Footer__content__body">
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Support</li>
                        <li>Affiliates</li>
                        <li>Community </li>
                    </ul>
                </div>
            </div>
       `;

    return Footer;
}