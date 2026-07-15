import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <h1 className="hero__title">Find Your Perfect Stay</h1>
          <p className="hero__subtitle">
            Luxury Hotels • Comfortable Rooms • Best Prices
          </p>
          <div className="hero__actions">
            <Link to="/hotels" className="hero__btn hero__btn--primary">
              Book Now
            </Link>
            <Link to="/register" className="hero__btn hero__btn--ghost">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro container">
        <h2>Welcome to StayEase</h2>
        <p className="intro__lead">
          Discover luxury hotels at affordable prices. Book rooms instantly,
          make secure online payments, and manage your bookings easily.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why container">
        <div className="why__grid">
          <div className="why__card">
            <span className="why__icon">🏨</span>
            <h3>10 Luxury Hotels</h3>
            <p>Premium hotels with modern amenities.</p>
          </div>
          <div className="why__card">
            <span className="why__icon">🛏️</span>
            <h3>Comfortable Rooms</h3>
            <p>Deluxe, Suite and Executive rooms.</p>
          </div>
          <div className="why__card">
            <span className="why__icon">💳</span>
            <h3>Secure Payments</h3>
            <p>Fast and secure online booking.</p>
          </div>
          <div className="why__card">
            <span className="why__icon">⭐</span>
            <h3>Top Rated Hotels</h3>
            <p>Trusted by thousands of happy customers.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready to Book Your Dream Stay?</h2>
          <p>Join thousands of travelers and explore the best hotels.</p>
          <Link to="/hotels" className="cta__btn">Get Started</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;