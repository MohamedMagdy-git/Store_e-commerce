import React from 'react'
import './App.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet ,
} from "react-router-dom";


import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Product from './pages/product/product';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import { Provider } from 'react-redux';
import FavProducts from './pages/favProducts/favProducts';
import Search from './pages/search/Search';
import Register from './pages/register/Register';
import Profile from './pages/Profile/Profile';
import LogPage from './pages/LogPage/LogPage';
import Aboutus from './components/Aboutus/Aboutus';
import Stores from './pages/Stores/Stores';
import Contact from './pages/Contact/Contact';




function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/favorites",
          element: <FavProducts />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/login",
          element: <LogPage/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },
        {
          path: "/about",
          element: <Aboutus/>,
        },
        {
          path: "/stores",
          element: <Stores />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

      ]
    },


  ]);



  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
