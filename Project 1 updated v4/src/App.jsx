import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./Components/movies";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";

const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
};

export default App;
