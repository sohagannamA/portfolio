import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Certificate from "../pages/Certificate";
import Skill from "../pages/Skill";
import Projects from "../pages/Projects";
import Setting from "../pages/Setting";
import UserSelectNav from "../components/UserSelectNav";
import { useSelector } from "react-redux";
import RightNav from "../components/RightNav";
import BottomNav from "../components/BottomNav";

export default function Index() {
  const selectedItems = useSelector((state) => state.nav.side);
  return (
    <BrowserRouter>
      {selectedItems === "left" ? <UserSelectNav /> : ""}
      {selectedItems === "right" ? <RightNav /> : ""}
      {selectedItems === "bottom" ? <BottomNav /> : ""}
      {selectedItems === "top" ? <Navbar /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
