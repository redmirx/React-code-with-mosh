import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./Components/movies";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";

const App = () => {
  const navigate = useNavigate();
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={Customers}></Route>
        <Route path="/rentals" element={Rentals}></Route>
        <Route path="/not-found" element={NotFound}></Route>
      </Routes>
    </main>
  );
};

export default App;
