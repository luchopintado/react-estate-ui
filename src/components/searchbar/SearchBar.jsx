import { useState } from "react";
import "./SearchBar.scss";

const types = ["buy", "rent"];

function SearchBar(){

  const [ query, setQuery ] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {
          types.map((type) => (
            <button
              key={`btn-${type}`}
              onClick={() => switchType(type)}
              className={query.type === type ? "active" : ""}
            >
              {type}
            </button>
          ))
        }
      </div>

      <form action="">
        <input type="text" name="location" placeholder="City Locations" />
        <input type="text" name="minPrice" placeholder="Min Price" min={0} max={10000000} />
        <input type="text" name="maxPrice" placeholder="Max Price" min={0} max={10000000} />
        <button><img src="/search.png" alt="" /></button>
      </form>
    </div>
  )
}

export default SearchBar;
