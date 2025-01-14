import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HowWeAreGoingTo from '../pages/HowWeAreGoingTo';
import OutcomeAll from '../pages/OutcomeAll';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import WhatWeDo from '../pages/WhatWeDo';
import HowWeAreSingle from '../pages/HowWeAreSingle';
import OutcomeSingle from '../pages/OutcomeSingle';
import OneLifeLayout from '../pages/OneLifeLayout';
import BodyBasics from '../pages/BodyBasics';
import Explore from '../pages/Explore';
import NotFound from '../pages/NotFound'; // Add 404 page component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <OneLifeLayout />, // Use OneLifeLayout for other pages
    children: [
      {
        path: '/welcome',
        element: <About />,
      },
      {
        path: '/who-we-are',
        element: <WhatWeDo />,
      },
      {
        path: '/how-we-work',
        element: <HowWeAreGoingTo />,
      },
      {
        path: '/how-we-work/:title',
        element: <HowWeAreSingle />,
      },
      {
        path: '/why-it-matters',
        element: <OutcomeAll />,
      },
      {
        path: '/why-it-matters/:title',
        element: <OutcomeSingle />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/lets-talk',
        element: <Contact />,
      },
      {
        path: '/body-basics',
        element: <BodyBasics />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
    ],
  },
  // Catch-all route for 404 page
  {
    path: '*',
    element: <NotFound />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
