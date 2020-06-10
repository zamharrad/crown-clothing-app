import React from "react";
import "./MenuItem.scss";

const MenuItem = ({title}) => (
  <div className="menu-item">
    <div className="item-content">
      <h1 className="title">{title}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
