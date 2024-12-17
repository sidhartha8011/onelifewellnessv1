import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComingSoon from '../pages/ComingSoon';
import Home from '../pages/Home';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoon />,
  },{
    path: '/home',
    element: <Home />,
  }
  // You can add other routes here as you build your app
]);

// Export the RouterProvider component
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
