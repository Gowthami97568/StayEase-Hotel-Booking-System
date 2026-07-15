import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Payments.css";

function Payments() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  if (!booking) {
    return (
      <h2 style={{ padding: "40px" }}>
        No Booking Found
      </h2>
    );
  }

    const handlePayment = () => {

  const bookingData = {
    ...booking,
    paymentStatus: "Paid",
    bookingDate: new Date().toLocaleDateString(),
    bookingId: "BK" + Date.now(),
  };

  // Save booking
  localStorage.setItem("booking", JSON.stringify(bookingData));

  alert("Payment Successful!");

  navigate("/my-bookings");
};

  return (
    <div className="payment-page">

      <div className="payment-card">

        <h1>Payment</h1>

        <h2>{booking.hotel.name}</h2>

        <p>📍 {booking.hotel.city}</p>

        <hr />

        <p><strong>Room :</strong> {booking.room.name}</p>

        <p><strong>Check In :</strong> {booking.checkIn}</p>

        <p><strong>Check Out :</strong> {booking.checkOut}</p>

        <p><strong>Guests :</strong> {booking.adults} Adults</p>

        <p><strong>Total Amount :</strong></p>

        <h2 className="price">
          ₹{booking.total.toLocaleString()}
        </h2>

        <hr />

        <h3>Select Payment Method</h3>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>Net Banking</option>
          <option>Cash at Hotel</option>
        </select>

        <button
          className="pay-now"
          onClick={handlePayment}
        >
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default Payments;