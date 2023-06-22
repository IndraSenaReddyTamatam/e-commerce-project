import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "../src/components/header/header.component.jsx"

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/shop/hats" Component={HatsPage} />
        <Route exact path="/shop" Component={ShopPage}/>
      </Routes>
    </div>
  );
}

export default App;
