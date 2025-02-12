import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HowWeAreGoingTo from '../pages/HowWeAreGoingTo';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import BodyBasics from '../pages/BodyBasics';
import Explore from '../pages/Explore';
import NotFound from '../pages/NotFound';
import WhyItMatters from '../pages/WhyItMatters';
import Introduction from '../pages/Introduction';
import WhoWeAre from '../pages/WhoWeAre';
import TermsAndConditions from '../pages/TermsAndConditions';
import Insights from '../pages/Insights';
import BlogPost from '../pages/BlogPost';
import OneLifeLayout from '../layouts/OneLifeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <OneLifeLayout />,
    children: [
      {
        index: true, // Default route
        element: <Introduction />,
      },
      {
        path: '/welcome',
        element: <Home />,
      },{
        path: '/about',
        element: <About />,
      },{
        path: '/insights',
        element: <Insights />,
      },{
        path: '/insights/:title',
        element: <BlogPost />,
      },
      {
        path: '/who-we-are',
        element: <WhoWeAre />,
      },
      {
        path: '/how-we-work',
        element: <HowWeAreGoingTo />,
      },
      {
        path: '/why-it-matters',
        element: <WhyItMatters />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },{
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
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
  {
    path: '*',
    element: <NotFound />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
