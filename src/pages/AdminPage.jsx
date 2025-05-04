import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";

function AdminPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Right Content Section */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet /> {/* Nested Routes will be shown here */}
      </div>
    </div>
  );
}

export default AdminPage;
