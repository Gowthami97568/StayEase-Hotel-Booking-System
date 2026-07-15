import { useParams } from "react-router-dom";
import { useState } from "react";
import hotels from "../data/hotels";
import "./HotelDetails.css";
import { useNavigate } from "react-router-dom";

function HotelDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = hotels.find(
    (h) => h.id === Number(id)
);

// Hook moved above the conditional return so it always runs in the same order
const [selectedImage, setSelectedImage] = useState(hotel ? hotel.image : null);

if (!hotel) {
    return <h2>Hotel Not Found</h2>;
}

  return (
    <div className="hotel-details">

      <div className="hotel-header">

        <div>

          <h1>{hotel.name}</h1>

          <p className="location">
            📍 {hotel.city}, {hotel.state}
          </p>

          <p className="rating">
            ⭐ {hotel.rating} ({hotel.reviews} Reviews)
          </p>

        </div>

        <div>

          <button
            className="reserve-btn"
            onClick={() => {
              const room = hotel.rooms[0]; // default to first room
              navigate("/booking", {
                state: {
                  hotel,
                  room,
                },
              });
            }}
          >
            Reserve Now
          </button>

        </div>

      </div>

      {/* Main Image */}

       <img
       src={selectedImage}
        className="main-image"
       alt={hotel.name}
       />

      {/* Gallery */}

    
    <div className="gallery">

  {hotel.gallery.map((img, index) => (

    <img
      key={index}
      src={img}
      alt=""
      onClick={() => setSelectedImage(img)}
      className={selectedImage === img ? "active-image" : ""}
    />

  ))}

</div>
   
   <section className="info-card">

<h2>Property Information</h2>

<p><strong>Hotel :</strong> {hotel.name}</p>

<p><strong>City :</strong> {hotel.city}</p>

<p><strong>State :</strong> {hotel.state}</p>

<p><strong>Rating :</strong> ⭐ {hotel.rating}</p>

<p><strong>Total Reviews :</strong> {hotel.reviews}</p>

<p><strong>Price Starts From :</strong> ₹{hotel.price}</p>

</section>


      {/* About */}

      <section>

        <h2>About this Property</h2>

        <p>{hotel.description}</p>

      </section>

      {/* Amenities */}

      <section>

        <h2>Most Popular Facilities</h2>

        <div className="amenities">

          {hotel.amenities.map((item) => (

            <div className="amenity" key={item}>
              ✔ {item}
            </div>

          ))}

        </div>

      </section>

      {/* Property Highlights */}

      <section>

        <h2>Property Highlights</h2>

        <ul>

          {hotel.highlights.map((item) => (

            <li key={item}>{item}</li>

          ))}

        </ul>

      </section>

      {/* Room Information */}

      <section>

        <h2>Room Information</h2>

        <table className="room-table">

          <thead>

            <tr>

              <th>Room</th>

              <th>Bedrooms</th>

              <th>Bathrooms</th>

              <th>Guests</th>

              <th>Beds</th>

              <th>Price</th>

              <th></th>

            </tr>

          </thead>

          <tbody>

            {hotel.rooms.map((room) => (

              <tr key={room.name}>

                <td>{room.name}</td>

                <td>{room.bedrooms}</td>

                <td>{room.bathrooms}</td>

                <td>{room.guests}</td>

                <td>{room.beds}</td>

                <td>₹{room.price}</td>

                <td>
                    <button
  className="reserve-btn"
  onClick={() => {
    const room = hotel.rooms[0]; // First room by default

    navigate("/booking", {
      state: {
        hotel,
        room,
      },
    });
  }}
>
  Reserve Now
</button>


                  

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

      {/* House Rules */}

      <section>

        <h2>House Rules</h2>

        <ul>

          <li>Check In : {hotel.checkIn}</li>

          <li>Check Out : {hotel.checkOut}</li>

          <li>No Smoking</li>

          <li>No Pets Allowed</li>

          <li>Government ID Required</li>

        </ul>
        </section>
      <section className="review-summary">

<h2>Overall Rating</h2>

<div className="summary-box">

<div>

<h3>⭐ {hotel.rating}</h3>

<p>Excellent</p>

</div>

<div>

<p>Cleanliness ⭐⭐⭐⭐⭐</p>

<p>Location ⭐⭐⭐⭐⭐</p>

<p>Facilities ⭐⭐⭐⭐☆</p>

<p>Staff ⭐⭐⭐⭐⭐</p>

<p>Value ⭐⭐⭐⭐☆</p>

</div>

</div>

</section>

<section>

<h2>Nearby Attractions</h2>

<ul>

<li>🏖 Beach - 500 m</li>

<li>🛍 Shopping Mall - 1 km</li>

<li>🍽 Restaurant - 200 m</li>

<li>🚉 Railway Station - 3 km</li>

<li>✈ Airport - 18 km</li>

</ul>

</section>
     
</div>
  );

}
export default HotelDetails;