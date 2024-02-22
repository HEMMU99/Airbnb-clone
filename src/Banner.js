import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import Search from "./Search";
import { Button } from "@material-ui/core";

function Banner() {
  const history = useHistory();

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="button__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h3>Go Near</h3>
        <p>
          Settle in somewhere new. Discover nearby stays to live, work, or just
          relax.
        </p>
        <button onClick={() => history.push("/search")}>Explore Nearby</button>
      </div>
    </div>
  );
}

export default Banner;
