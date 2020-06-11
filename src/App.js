import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/HomePage";

const HatPage = () => (
  <h1>HatsPage</h1>
  )

function App() {
  return (
    <div>
      <Route  path="/" component={HomePage} />
      <Route exact={true} path="/hat" component={HatPage} />
    </div>
  );
}

export default App;
