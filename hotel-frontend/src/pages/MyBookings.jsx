import { Link, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import hotels from "../data/hotels";
import "./MyBookings.css";

function MyBookings() {

  const booking = JSON.parse(localStorage.getItem("booking"));

  // ----- Local state for interactive features -----
  const [bookingStatus, setBookingStatus] = useState("Confirmed");
  const [paymentStatus] = useState(booking?.paymentStatus || "Paid");
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const navigate = useNavigate();

  // ----- Derived / fallback data (so nothing breaks if fields are missing) -----
  const bookingId = useMemo(() => {
    if (booking?.bookingId) return booking.bookingId;
    if (!booking) return "";
    return "BK" + Math.floor(100000 + Math.random() * 900000);
  }, [booking]);

  const bookingDate = booking?.bookingDate || new Date().toLocaleDateString();

  const hotelAddress =
    booking?.hotel?.address ||
    (booking ? `${booking.hotel.city}, ${booking.hotel.state}` : "");

  const hotelContact = booking?.hotel?.contact || "+91 98765 43210";

  const qrValue = booking
    ? encodeURIComponent(
        `Booking ID: ${bookingId} | Hotel: ${booking.hotel.name} | Check-In: ${booking.checkIn} | Check-Out: ${booking.checkOut}`
      )
    : "";

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

  // Similar hotels: same city, excluding the current hotel
  const similarHotels = useMemo(() => {
    if (!booking) return [];
    return hotels
      .filter(
        (h) => h.city === booking.hotel.city && h.id !== booking.hotel.id
      )
      .slice(0, 3);
  }, [booking]);

  // ----- Handlers -----
     const handleCancelBooking = () => {
  const confirmCancel = window.confirm(
    "Are you sure you want to cancel this booking?"
  );

  if (confirmCancel) {
    localStorage.removeItem("booking");
    setBookingStatus("Cancelled");

    setTimeout(() => {
      navigate("/my-bookings");
    }, 1000);
  }
};

  const handleDownloadInvoice = () => {
    const invoiceText = `
HOTEL BOOKING INVOICE
======================
Booking ID     : ${bookingId}
Booking Date   : ${bookingDate}
Hotel          : ${booking.hotel.name}
Address        : ${hotelAddress}
Contact        : ${hotelContact}
Room           : ${booking.room.name}
Check In       : ${booking.checkIn}
Check Out      : ${booking.checkOut}
Guests         : ${booking.adults} Adults, ${booking.children} Children
Rooms Booked   : ${booking.rooms}
Payment Status : ${paymentStatus}
Booking Status : ${bookingStatus}
------------------------
Total Paid     : ₹${booking.total.toLocaleString()}
======================
Thank you for booking with us!
    `.trim();

    const blob = new Blob([invoiceText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Invoice_${bookingId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRatingSubmit = () => {
    if (userRating > 0) {
      setRatingSubmitted(true);
    }
  };

  const renderStaticStars = (rating) => {
    const fullStars = Math.round(rating || 0);
    return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
  };

  if (!booking) {
    return (
      <div className="no-booking">
        <h2>No Bookings Yet</h2>
        <p>Book your first hotel and it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="bookings-page">

      <h1>My Bookings</h1>

      <div className="booking-card">

        <img
          src={booking.hotel.image}
          alt={booking.hotel.name}
          className="booking-img"
        />

        <div className="booking-info">

          <h2>{booking.hotel.name}</h2>

          <p className="hotel-stars">
            {renderStaticStars(booking.hotel.rating)}{" "}
            <span>({booking.hotel.rating})</span>
          </p>

          <p>📍 {booking.hotel.city}, {booking.hotel.state}</p>

          <p>
            <strong>Room :</strong> {booking.room.name}
          </p>

          <p>
            <strong>Check In :</strong> {booking.checkIn}
          </p>

          <p>
            <strong>Check Out :</strong> {booking.checkOut}
          </p>

          <p>
            <strong>Guests :</strong>
            {" "}
            {booking.adults} Adults,
            {" "}
            {booking.children} Children
          </p>

          <p>
            <strong>Rooms :</strong>
            {" "}
            {booking.rooms}
          </p>

          <p>
            <strong>Total Paid :</strong>
            {" "}
            ₹{booking.total.toLocaleString()}
          </p>

          <span
            className={
              bookingStatus === "Cancelled" ? "cancelled" : "confirmed"
            }
          >
            {bookingStatus === "Cancelled"
              ? "✖ Booking Cancelled"
              : "✔ Booking Confirmed"}
          </span>

        </div>

      </div>

      {/* ---------------- Booking Details Extra Info ---------------- */}
      <section className="booking-details-section">

        <h2>Booking Details</h2>

        <div className="details-grid">

          <p><strong>Booking ID :</strong> {bookingId}</p>

          <p><strong>Booking Date :</strong> {bookingDate}</p>

          <p><strong>Hotel Address :</strong> {hotelAddress}</p>

          <p><strong>Hotel Contact :</strong> {hotelContact}</p>

          <p><strong>Payment Status :</strong> {paymentStatus}</p>

          <p>
            <strong>Booking Status :</strong>{" "}
            <span
              className={
                bookingStatus === "Cancelled"
                  ? "status-cancelled"
                  : "status-confirmed"
              }
            >
              {bookingStatus}
            </span>
          </p>

          <p><strong>Total Amount :</strong> ₹{booking.total.toLocaleString()}</p>

        </div>

      </section>

      {/* ---------------- QR Code ---------------- */}
      <section className="qr-section">

        <h2>Booking QR Code</h2>

        <img src={qrCodeUrl} alt="Booking QR Code" className="qr-code" />

        <p className="qr-note">Show this QR code at check-in for quick verification.</p>

      </section>

      {/* ---------------- Timeline ---------------- */}
      <section className="timeline-section">

        <h2>Booking Timeline</h2>

        <ul className="timeline">

          <li className="timeline-step completed">
            <span className="dot" />
            Booking Placed — {bookingDate}
          </li>

          <li className="timeline-step completed">
            <span className="dot" />
            Payment {paymentStatus}
          </li>

          <li
            className={
              bookingStatus === "Cancelled"
                ? "timeline-step cancelled"
                : "timeline-step completed"
            }
          >
            <span className="dot" />
            Booking {bookingStatus}
          </li>

          <li className="timeline-step">
            <span className="dot" />
            Check In — {booking.checkIn}
          </li>

          <li className="timeline-step">
            <span className="dot" />
            Check Out — {booking.checkOut}
          </li>

        </ul>

      </section>

      {/* ---------------- Action Buttons ---------------- */}
      <section className="actions-section">

        <button className="action-btn" onClick={handleDownloadInvoice}>
          ⬇ Download Invoice
        </button>

        <button
          className="action-btn cancel-btn"
          onClick={handleCancelBooking}
          disabled={bookingStatus === "Cancelled"}
        >
          {bookingStatus === "Cancelled" ? "Booking Cancelled" : "✖ Cancel Booking"}
        </button>

      </section>

      {/* ---------------- Rate Hotel ---------------- */}
      <section className="rate-hotel-section">

        <h2>Rate Hotel</h2>

        {ratingSubmitted ? (
          <p className="thank-you">
            Thanks for rating {booking.hotel.name} {userRating} ★!
          </p>
        ) : (
          <>
            <div className="star-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= (hoverRating || userRating)
                      ? "star filled"
                      : "star"
                  }
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setUserRating(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <button
              className="action-btn"
              onClick={handleRatingSubmit}
              disabled={userRating === 0}
            >
              Submit Rating
            </button>
          </>
        )}

      </section>

      {/* ---------------- Customer Support ---------------- */}
      <section className="support-section">

        <h2>Customer Support</h2>

        <p>Need help with this booking? Reach out to us:</p>

        <div className="support-actions">

          <a href="tel:+911234567890" className="action-btn">
            📞 Call Support
          </a>

          <a href="mailto:support@hotelbooking.com" className="action-btn">
            ✉ Email Support
          </a>

        </div>

      </section>

      {/* ---------------- Similar Hotels ---------------- */}
      {similarHotels.length > 0 && (
        <section className="similar-hotels-section">

          <h2>Similar Hotels</h2>

          <div className="similar-hotels-grid">

            {similarHotels.map((h) => (
              <Link
                to={`/hotel/${h.id}`}
                key={h.id}
                className="similar-hotel-card"
              >
                <img src={h.image} alt={h.name} />
                <h3>{h.name}</h3>
                <p>📍 {h.city}, {h.state}</p>
                <p>⭐ {h.rating} ({h.reviews} Reviews)</p>
                <p className="price">₹{h.price} / night</p>
              </Link>
            ))}

          </div>

        </section>
      )}

    </div>
  );
}

export default MyBookings;