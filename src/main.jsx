import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css";
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Users from './components/Users';



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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
