import hotels from "../data/hotels";
import HotelCard from "./HotelCard";
import "./FeaturedHotels.css";

function FeaturedHotels(){

return(

<section className="featured">

<h1>

Featured Hotels

</h1>

<div className="hotel-grid">

{hotels.map(hotel=>

<HotelCard

key={hotel.id}

hotel={hotel}

/>

)}

</div>

</section>

);

}

export default FeaturedHotels;