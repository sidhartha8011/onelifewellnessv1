import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Users,
  Mail,
  FileText,
  Home,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const navigationItems = [
    // { name: "Contacts", path: "contacts", icon: <Mail size={18} /> },
    { name: "Blogs", path: "blogs", icon: <FileText size={18} /> },
    // { name: "Mortgage", path: "mortgage", icon: <User size={18} /> },
    // { name: "Golden Visa", path: "goldenVisa", icon: <User size={18} /> },
    // { name: "Properties", path: "properties", icon: <Home size={18} /> },
  ];

  const utilityLinks = [
    { name: "Logout", path: "logout", icon: <LogOut size={18} /> },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin", { replace: true });
  };

  return (
    <aside className="w-64 min-h-screen bg-black !text-white flex flex-col shadow-lg">
      <div className="!p-6 border-b !border-gray-700">
        <h2 className="text-xl font-bold flex items-center">
          <LayoutDashboard className="mr-2" size={24} />
          Admin Dashboard
        </h2>
      </div>

      <nav className="flex-grow !py-4 !px-4">
        <div className="!mb-2 !px-3 !text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Navigation
        </div>
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === ""}
                className={({ isActive }) =>
                  `flex items-center !px-3 !py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gray-800 text-white font-medium shadow-sm"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                <span className="!mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="!px-4 !py-2 !mt-auto">
        <div className="!mb-2 !px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Account
        </div>
        <ul className="space-y-1 mb-6">
          {utilityLinks.map((item) => (
            <li key={item.name}>
              {item.name === "Logout" ? (
                <button
                  type="button"
                  className="flex items-center !px-3 !py-2 rounded-lg transition-all duration-200 !text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={handleLogout}
                >
                  <span className="!mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center !px-3 !py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gray-800 text-white font-medium"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  <span className="!mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="!p-4 border-t border-gray-700 bg-gray-900 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-medium !mr-3">
          AD
        </div>
        <div className="flex-grow">
          <div className="!text-sm font-medium">Admin User</div>
          <div className="!text-xs !text-gray-400">admin@example.com</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
