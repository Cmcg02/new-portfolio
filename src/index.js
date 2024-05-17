import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import WelcomePage from './pages/Welcome';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
      element: (<WelcomePage/>),
  },
  {
    path: "about",
    element: (<AboutPage/>),
  }, 
  {
    path: "projects",
    element: (<ProjectsPage/>),
  },
  {
    path: "contact",
    element: (<ContactPage/>),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);