import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css";
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Users from './components/Users';
import UserDetails from './UserDetails';
import Posts from './Posts';
import PostDetails from './components/PostDetails';



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
      {
        // userId is like variable
        path: "/user/:userId",
        // loader diye data fetch korte hoy and useLoaderData() diye receive korte hoy
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/posts/:id',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails></PostDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
