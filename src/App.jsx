import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop"; // <-- Your floating button
import AutoScrollToTop from "./components/AutoScrollToTop"; // <-- NEW: Smooth route scroller
import AboutPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import KitchenPage from "./pages/KitchenPage";
import OurTrsuteesPage from "./pages/OurTrusteesPage";
import LibraryPage from "./pages/LibraryPage";
import RoomsPage from "./pages/RoomsPage";
import SportsPage from "./pages/SportsPage";
import SpiritualityPage from "./pages/SpiritualityPage";
import GalleryPage from "./pages/GalleryPage";
export default function App() {
  return (
    <Router>
      <AutoScrollToTop />{" "}
      {/* <-- 1. Placed here to auto-scroll on every page change */}
      <Loader />
      <ScrollToTop /> {/* <-- 2. Your floating button remains untouched */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/our-trustees" element={<OurTrsuteesPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/spirituality" element={<SpiritualityPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}
