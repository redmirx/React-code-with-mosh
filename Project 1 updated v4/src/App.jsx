import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./Components/movies";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";
import NavBar from "./Components/navBar";

const App = () => {
  return (
    <
      <NavBar />
    <main className="container">
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/" element={<Navigate to={"/movies"} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
};

export default App;
