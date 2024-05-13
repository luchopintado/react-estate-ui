import "./filter.scss";

function Filter(){
  return (
    <div className="filter">
        <h1>Search results for <b>Lima</b></h1>

        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" id="city" placeholder="City Location" name="city" />
            </div>
        </div>

        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select id="type" name="type">
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select id="property" name="property">
                    <option value="">Any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <select id="minPrice" name="minPrice">
                    <option value="">Any</option>
                    <option value="100000">$100,000</option>
                    <option value="200000">$200,000</option>
                    <option value="300000">$300,000</option>
                    <option value="400000">$400,000</option>
                    <option value="500000">$500,000</option>
                    <option value="600000">$600,000</option>
                    <option value="700000">$700,000</option>
                    <option value="800000">$800,000</option>
                    <option value="900000">$900,000</option>
                    <option value="1000000">$1,000,000</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <select id="maxPrice" name="maxPrice">
                    <option value="">Any</option>
                    <option value="100000">$100,000</option>
                    <option value="200000">$200,000</option>
                    <option value="300000">$300,000</option>
                    <option value="400000">$400,000</option>
                    <option value="500000">$500,000</option>
                    <option value="600000">$600,000</option>
                    <option value="700000">$700,000</option>
                    <option value="800000">$800,000</option>
                    <option value="900000">$900,000</option>
                    <option value="1000000">$1,000,000</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="bedrooms">Bedrooms</label>
                <select id="bedrooms" name="bedrooms">
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                </select>
            </div>

            <div className="item">
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Filter;
