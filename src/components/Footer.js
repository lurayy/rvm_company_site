import { FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <FaLinkedin />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <FaTwitter />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <FaMailBulk />
                </a></li>
            </ul>
            <ul className="menu">
                <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
                <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

            </ul>
            <p>&copy;2023 <a href="https://lurayy.github.io/portfolio/" target='_blank' rel="noreferrer" className="menu__link">Kabir Tamari</a> | All Rights Reserved</p>
        </footer>
    )
};

export default Footer;
