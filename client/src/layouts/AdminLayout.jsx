import React from "react";
import DashboardNav from "../pages/dashboard/dashboardComponents/DashBoardNav";
import { Outlet } from "react-router-dom";
import DashboardTopNav from "../pages/dashboard/dashboardComponents/DashboardTopNav";

export default function AdminLayout() {
  return (
    <div>
      <DashboardTopNav/>
      <DashboardNav />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
