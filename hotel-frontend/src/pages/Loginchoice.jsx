import { Link } from "react-router-dom";
import "./Auth.css";

function LoginChoice() {
  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-visual__text">
          <h2>Welcome back</h2>
          <p>Sign in to manage your bookings or your hotel listings.</p>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-card">
          <Link to="/" className="auth-card__brand">Stay<span>Ease</span></Link>
          <h1>Login As</h1>
          <p className="auth-card__subtitle">Choose how you'd like to sign in.</p>

          <div className="choice-grid">
            <Link to="/login/customer" className="choice-card">
              <span className="choice-card__icon">👤</span>
              <span className="choice-card__label">Customer</span>
              <span className="choice-card__desc">Book hotels & manage trips</span>
            </Link>
            <Link to="/login/admin" className="choice-card">
              <span className="choice-card__icon">🛠️</span>
              <span className="choice-card__label">Admin</span>
              <span className="choice-card__desc">Manage your hotel property</span>
            </Link>
          </div>

          <p className="auth-card__footer">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginChoice;