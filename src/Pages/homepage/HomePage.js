import React from "react";
import { Route } from "react-router-dom";
import "./Homepage.scss";
import MenuItem from "../../Components/Menu-Item/MenuItem";
import Directory from "../../Components/Directory/Directory";

const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
