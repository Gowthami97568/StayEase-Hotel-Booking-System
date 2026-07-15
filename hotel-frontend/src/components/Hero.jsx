import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {

  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const searchHotels = () => {

    navigate("/hotels", {

      state: {

        destination,

        checkIn,

        checkOut

      }

    });

  };

  return (

<div className="hero">

<div className="hero-content">

<h1>Find Your Perfect Stay</h1>

<p>
Search hotels across India
</p>
<div className="search-container">

  <input
    type="text"
    placeholder="📍 Where are you going?"
    value={destination}
    onChange={(e) => setDestination(e.target.value)}
  />

  <input
    type="date"
    value={checkIn}
    onChange={(e) => setCheckIn(e.target.value)}
  />

  <input
    type="date"
    value={checkOut}
    onChange={(e) => setCheckOut(e.target.value)}
  />

  <button onClick={searchHotels}>
    Search
  </button>

</div>
</div>

</div>

  );

}

export default Hero;