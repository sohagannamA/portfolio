import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Certificate from "../pages/Certificate";
import Skill from "../pages/Skill";
import Projects from "../pages/Projects";
import Setting from "../pages/Setting";

import PublicLayOut from "../layouts/PublicLayOut";
import ProjectDetails from "../pages/ProjectDetails";

export default function Index() {
  return (
    <Routes>
      <Route element={<PublicLayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/projectdetails" element={<ProjectDetails />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
