import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="📍 Where are you going?"
      />

      <input type="date" />

      <input type="date" />

      <select>
        <option>2 Adults</option>
        <option>1 Adult</option>
        <option>3 Adults</option>
        <option>4 Adults</option>
      </select>

      <select>
        <option>0 Children</option>
        <option>1 Child</option>
        <option>2 Children</option>
      </select>

      <button>Search</button>

    </div>
  );
}

export default SearchBar;