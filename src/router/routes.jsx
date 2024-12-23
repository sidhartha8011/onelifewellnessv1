import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComingSoon from '../pages/ComingSoon';
import Home from '../pages/Home';
import OneLifeLayout from '../pages/OneLifeLayout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HowWeAreGoingTo from '../pages/HowWeAreGoingTo';
import OutcomeAll from '../pages/OutcomeAll';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import NavigationMenu from '../components/NavigationMenu';
import WhatWeDo from '../pages/WhatWeDo';
import HowWeAreSingle from '../pages/HowWeAreSingle';
import OutcomeSingle from '../pages/OutcomeSingle';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoon />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/pages/',
    element: <OneLifeLayout />,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'how-we-are-going-to-achieve-it',
        element: <HowWeAreGoingTo />
      },
      {
        path: 'how-we-are-going-to-achieve-it/:title',
        element: <HowWeAreSingle />
      },
      {
        path: 'outcome-of-one-life-wellness',
        element: <OutcomeAll />
      },{
        path: '/pages/outcome-of-one-life-wellness/:title',
        element: <OutcomeSingle />
      },    
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: 'what-we-do',
        element: <WhatWeDo />
      }
    ]
  },
  {
    path: '/navigation-menu',
    element: <NavigationMenu />
  }
]);

// Export the RouterProvider component
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
