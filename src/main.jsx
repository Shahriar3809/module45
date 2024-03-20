import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css";
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './About';
import Contact from './Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
