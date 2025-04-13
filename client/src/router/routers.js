"use client"; // Ensure it's a client component

import Home from "@/app/page";
import Login from "@/pages/login";
import Register from "@/pages/register";
import SearchResultList from "@/pages/searchresultlist";
import ToursDetails from "@/pages/toursdetails";
import Tours from "@/pages/tours";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/search" element={<SearchResultList />} />
        <Route path="/tour/:id" element={<ToursDetails />} />
        <Route path="/tours" element={<Tours/>} />
      </Routes>
    </BrowserRouter>
  );
}
