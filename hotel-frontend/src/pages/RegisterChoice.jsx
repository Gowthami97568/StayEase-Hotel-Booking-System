import { Link } from "react-router-dom";
import "./Auth.css";

function RegisterChoice() {
  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-visual__text">
          <h2>Join StayEase</h2>
          <p>Book stays as a guest, or list your property as a partner.</p>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-card">
          <Link to="/" className="auth-card__brand">Stay<span>Ease</span></Link>
          <h1>Register As</h1>
          <p className="auth-card__subtitle">Tell us who you are.</p>

          <div className="choice-grid">
            <Link to="/register/customer" className="choice-card">
              <span className="choice-card__icon">🧳</span>
              <span className="choice-card__label">Customer</span>
              <span className="choice-card__desc">Book your next trip</span>
            </Link>
            <Link to="/register/admin" className="choice-card">
              <span className="choice-card__icon">🏨</span>
              <span className="choice-card__label">Admin</span>
              <span className="choice-card__desc">List your hotel</span>
            </Link>
          </div>

          <p className="auth-card__footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterChoice;