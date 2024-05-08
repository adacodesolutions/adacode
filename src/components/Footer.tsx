import {
  FaPinterestSquare,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer_container">
      <div>
        <h1>ADACODE</h1>
        <p>
          3rd Floor,4 Wings Building,Panniyankara
          Kozhikode
        </p>
        <h4 className="text-xl font-bold">Follow us on</h4>
        <span className="social_icon">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaPinterestSquare />
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold">Our Services</h3>
        <ul>
          <li> Web Developement </li>
          <li> Robotics </li>
          <li> Android Developement </li>
          <li> Web Developement </li>
          <li> Data Science</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Our Courses</h3>
        <ul>
          <li> Web Developement </li>
          <li> Robotics </li>
          <li> Android Developement </li>
          <li> Web Developement </li>
          <li> Full Stack Development</li>
          <li> Data Science</li>
          <li> Embedded Systems and IoT</li>
          <li> Ethical Hacking</li>
          <li> Cyber Security</li>
        </ul>
      </div>
      <div>
        <h3>Subscribe</h3>
        <input
          placeholder="Enter your email"
          className="email_input"
          type="email"
        />
        <button className="button_dark">
          Subscribe Now <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default Footer;
