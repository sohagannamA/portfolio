import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


import Navbar from "../components/Navbar";
import UserSelectNav from "../components/UserSelectNav";
import RightNav from "../components/RightNav";
import BottomNav from "../components/BottomNav";

export default function PublicLayOut() {
  const side = useSelector((state) => state.nav.side);
  return (
    <>
      {side === "top" && <Navbar />}
      {side === "left" && <UserSelectNav />}
      {side === "right" && <RightNav />}
      {side === "bottom" && <BottomNav />}
      <Outlet />
    </>
  );
}
