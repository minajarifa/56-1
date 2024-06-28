import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home/Home/Home.jsx";
import Login from "./AuthProviders/Login/Login.jsx";
import Register from "./AuthProviders/Register/Register.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import AuthProvider from "./AuthProviders/Auth/AuthProvider.jsx";
import UpdatePage from "./Pages/UpdatePage/UpdatePage.jsx";
import AddPage from "./Pages/AddPage/AddPage.jsx";
import Addpage2 from "./Pages/AddPage2/AddPage2.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AddPage",
        element: <AddPage />,
      },
      {
        path: "/Addpage2",
        element: <Addpage2 />,
      },
      {
        path: "/UpdatePage",
        element: <UpdatePage />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
