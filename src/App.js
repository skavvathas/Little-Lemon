import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ReservationsPage from "./pages/ReservationsPage";
import { BrowserRouter, Routes, Route, Navigate,  useNavigate } from "react-router-dom"; // navigate is for the redirecting
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
