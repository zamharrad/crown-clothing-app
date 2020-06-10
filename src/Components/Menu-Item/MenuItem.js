import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="item-content">
      <h1 className="title">{title}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
