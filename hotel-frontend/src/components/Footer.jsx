import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3 className="footer__logo">Stay<span>Ease</span></h3>
          <p>Find your perfect stay, anywhere in the world.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/hotels">Hotels</Link>
          <Link to="/register">Become a Partner</Link>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#!">Help Center</a>
          <a href="#!">Cancellation Options</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#!">About Us</a>
          <a href="#!">Careers</a>
        </div>
      </div>
      <p className="footer__bottom">© {new Date().getFullYear()} StayEase. All rights reserved.</p>
    </footer>
  );
}

export default Footer;