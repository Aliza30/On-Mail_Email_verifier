import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import EmailSecurity from './components/EmailSecurity';
import Error from './components/Error';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet /> {/* Renders the matched route's element */}
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Wrap routes in Layout to include Header and Footer
    errorElement: <Error />, // This handles errors for the entire route tree
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/aboutUs',
        element: <AboutUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/emailSecurity',
        element: <EmailSecurity />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
