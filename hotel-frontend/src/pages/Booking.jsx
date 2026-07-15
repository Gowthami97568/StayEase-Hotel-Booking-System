import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Booking.css";

function Booking() {

  const navigate = useNavigate();
  const location = useLocation();

  const hotel = location.state?.hotel;

  const room = location.state?.room;

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  if (!hotel || !room) {
    return <h2 style={{padding:"40px"}}>No booking selected.</h2>;
  }

  const roomPrice = room.price;

  const taxes = Math.round(roomPrice * 0.18);

  const total = roomPrice + taxes;

  return (

<div className="booking-page">

<div className="booking-left">

<img
src={hotel.image}
alt={hotel.name}
className="booking-image"
/>

<h2>{hotel.name}</h2>

<p>
📍 {hotel.city}, {hotel.state}
</p>

<h3>
₹{room.price.toLocaleString()}
</h3>

<p>{room.name}</p>

</div>

<div className="booking-right">

<h2>Complete Your Booking</h2>

<div className="form-group">

<label>Check In</label>

<input
type="date"
value={checkIn}
onChange={(e)=>setCheckIn(e.target.value)}
/>

</div>

<div className="form-group">

<label>Check Out</label>

<input
type="date"
value={checkOut}
onChange={(e)=>setCheckOut(e.target.value)}
/>

</div>

<div className="form-group">

<label>Adults</label>

<select
value={adults}
onChange={(e)=>setAdults(e.target.value)}
>

{[1,2,3,4,5,6].map(n=>

<option key={n}>{n}</option>

)}

</select>

</div>

<div className="form-group">

<label>Children</label>

<select
value={children}
onChange={(e)=>setChildren(e.target.value)}
>

{[0,1,2,3,4].map(n=>

<option key={n}>{n}</option>

)}

</select>

</div>

<div className="form-group">

<label>Rooms</label>

<select
value={rooms}
onChange={(e)=>setRooms(e.target.value)}
>

{[1,2,3,4].map(n=>

<option key={n}>{n}</option>

)}

</select>

</div>

<div className="price-box">

<h3>Price Summary</h3>

<p>Room Price : ₹{roomPrice.toLocaleString()}</p>

<p>Taxes : ₹{taxes.toLocaleString()}</p>

<hr/>

<h2>Total : ₹{total.toLocaleString()}</h2>

</div>

<button

className="pay-btn"

onClick={()=>

navigate("/payments",{

state:{

hotel,

room,

checkIn,

checkOut,

adults,

children,

rooms,

total

}

})

}

>

Continue To Payment

</button>

</div>

</div>

  );

}

export default Booking;