import "./Footer.css";
import twitter from '../twitter.png';
import facebook from '../facebook.png';
import github from '../github.png';
import instagram from '../instagram.png';

const Footer = () => {
    return <>
        <div className="footer">
            <ul>
                <li><img src={twitter} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
                <li><img src={instagram} alt="" /></li>
                <li><img className="git" src={github} alt="" /></li>
            </ul>
        </div>
    </>
}

export default Footer;