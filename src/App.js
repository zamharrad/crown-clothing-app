import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/HomePage";

const HatPage = () => <h1>HatsPage</h1>;

function App() {
  return (
    <div>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/hats" component={HatPage} />
    </div>
  );
}

export default App;
