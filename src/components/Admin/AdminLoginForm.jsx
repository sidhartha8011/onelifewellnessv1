import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { userLogin } from "./userLogin";
import property2 from "../../assets/admin/blog1.jpg";

const AdminLoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!loginData.username) tempErrors.username = "Username is required";
    if (!loginData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      try {
        const data = await userLogin(loginData.username, loginData.password);
        localStorage.setItem("token", data.token); // Store the JWT token
        navigate("/admin--dashboard"); // Redirect to dashboard
      } catch (error) {
        setErrors({ auth: error });
      }
    }
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="flex w-full max-w-6xl !m-auto overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="hidden w-1/2 !md:block">
          <img
            src={property2}
            alt="Admin Login"
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-700"
          />
        </div>

        <div className="w-full !p-8 !md:w-1/2 flex flex-col justify-center">
          <div className="text-center !mb-8">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
              Admin Login
            </h1>
          </div>

          {errors.auth && (
            <div className="!mb-6 !p-4 bg-red-50 text-red-700 rounded-lg text-sm border-l-4 border-red-500">
              {errors.auth}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="!mb-5">
              <label className="!mb-2 block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 !px-4 !py-3 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all"
              />
              {errors.username && (
                <p className="!mt-2 text-xs text-red-600">{errors.username}</p>
              )}
            </div>

            <div className="!mb-6 relative">
              <label className="!mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 !px-4 !py-3 !pr-10 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="!mt-2 text-xs text-red-600">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 !py-3 !px-4 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
