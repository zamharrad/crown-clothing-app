import React from "react";
import "./Homepage.scss";
import MenuItem from "../../Components/Menu-Item/MenuItem";

function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default HomePage;
