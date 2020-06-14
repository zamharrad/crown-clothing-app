import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/HomePage";
import ShopPage from "./Pages/shoppage/ShopPage";


function App() {
  return (
    <div>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
