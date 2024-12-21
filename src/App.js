import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageMain from "./components/Home";
import ProductsPage from "./components/Products";
import ContactUsPage from "./components/Contact";
import MyAccountPage from "./components/Account";
import TrackOrderPage from "./components/Track_order";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageMain />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/my-account" element={<MyAccountPage />} />
          <Route path="/track-order" element={<TrackOrderPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
