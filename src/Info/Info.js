import "./Info.css";
import photo from '../photo.png';
import linkedin from '../linked.png'
import mail from '../mail.png';
import About from "../About/About";
import Interest from "../Interest/Interest";
import Footer from '../Footer/Footer';
const Info = () => {
    return <>
        <div className="info">
            <img id="photo" src={photo} alt="" />
            <p></p>
            <span id="name">Florin FOUNGUES</span><br />
            <span id="title">Software Engineer</span><br />
            <span id="site">founguesfirst.com</span>
            <div className="button">
                <a href="https://google.com" target="blank_"><button id="email"><img id="linked" src={mail} alt="" />Email</button></a>
                <a href="https://www.linkedin.com/in/florin-foungues/" target='blank_'><button id="linkedin"><img id="linked" src={linkedin} alt="" />LinkedIn</button></a></div>
            <About className='text' />
            <Interest className='text' />
            <Footer />
        </div></>
}

export default Info;