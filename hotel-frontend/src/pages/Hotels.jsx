import { useLocation } from "react-router-dom";
import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard";

function Hotels(){

const location=useLocation();

const destination=location.state?.destination || "";

const filteredHotels=hotels.filter(hotel=>

hotel.city.toLowerCase().includes(destination.toLowerCase()) ||

hotel.name.toLowerCase().includes(destination.toLowerCase()) ||

hotel.state.toLowerCase().includes(destination.toLowerCase())

);

return(

<div className="container">

<h1>

Available Hotels

</h1>

<div className="hotel-grid">

{filteredHotels.length>0?

filteredHotels.map(hotel=>

<HotelCard

key={hotel.id}

hotel={hotel}

/>

)

:

<h2>

No Hotels Found

</h2>

}

</div>

</div>

);

}

export default Hotels;