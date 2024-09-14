/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.jsx";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./assets/components/HomePage/HomePage.jsx";
import About from "./assets/components/About/About.jsx";
import FixedBackground from "./assets/components/Services/Services.jsx";
import Steel from "./assets/components/Services/Steel.jsx";
import Mandir from "./assets/components/Services/Mandir.jsx";
import Wood from "./assets/components/Services/Wood.jsx";
import Doors from "./assets/components/Services/Doors.jsx";
import Contact from "./assets/components/Contact/Contact.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<FixedBackground />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/steel" element={<Steel />} />
      <Route path="/mandir" element={<Mandir />} />
      <Route path="/wood" element={<Wood />} />
      <Route path="/door" element={<Doors />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
