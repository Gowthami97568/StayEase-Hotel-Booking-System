import { Link } from "react-router-dom";
import { useState } from "react";
import "./HotelCard.css";

function HotelCard({ hotel }) {
  const [wishlisted, setWishlisted] = useState(false);
  

  return (
    <div className="hotel-card">
      <div className="hotel-card__image-wrap">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="hotel-card__image"
        />

        <button
          className={`hotel-card__wishlist ${wishlisted ? "is-active" : ""}`}
          onClick={() => setWishlisted(!wishlisted)}
        >
          {wishlisted ? "❤️" : "🤍"}
        </button>

        <span className="hotel-card__badge">
          📍 {hotel.city}
        </span>
      </div>

      <div className="hotel-card__body">

        <div className="hotel-card__top">
          <h3>{hotel.name}</h3>

          <span className="hotel-card__rating">
            ⭐ {hotel.rating}
          </span>
        </div>

        <p className="hotel-card__reviews">
          {hotel.reviews} reviews
        </p>

        <div className="hotel-card__amenities">
          {hotel.amenities.map((item) => (
            <span key={item} className="hotel-card__chip">
              {item}
            </span>
          ))}
        </div>

        <div className="hotel-card__footer">

          <div>
            <span className="hotel-card__price">
              ₹{hotel.price.toLocaleString()}
            </span>

            <span className="hotel-card__unit">
              {" "} / night
            </span>
          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            className="hotel-card__cta"
          >
            View Details
          </Link>
          

        </div>

      </div>
    </div>
  );
}

export default HotelCard;