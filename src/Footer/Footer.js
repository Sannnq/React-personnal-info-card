import "./Footer.css";
import twitter from '../twitter.png';
import facebook from '../facebook.png';
import github from '../github.png';
import instagram from '../instagram.png';

const Footer = () => {
    return <>
        <div className="footer">
            <ul>
                <li><a href="https://twitter.com/FlorinFoungues" target="blank_" alt="Florin"><img src={twitter} alt="" /></a></li>
                <li><a href="https://www.Facebook.com" target="blank_" alt="Sannnq"><img src={facebook} alt="" /></a></li>
                <li><a href="https://www.instagram.com/foungues_first/" target="blank_" alt="Florin"><img src={instagram} alt="" /></a></li>
                <li><a href="https://github.com/Sannnq" target="blank_" alt="Sannnq"><img className="git" src={github} alt="" /></a></li>
            </ul>
        </div>
    </>
}

export default Footer;