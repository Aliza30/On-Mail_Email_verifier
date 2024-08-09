import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import Service from './components/Service';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import EmailSecurity from './components/EmailSecurity';


function App() {
  const HeaderRouter = createBrowserRouter([
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
      path: '/contact',
      element: <ContactUs />
    },
    {
      path: '/Login',
      element: <Login />
    },
    {
      path: '/emailSecurity',
      element: <EmailSecurity />
    }
  ])
  return (
    <div>
      <Header />
      <RouterProvider router={HeaderRouter} />
      <Footer />
    </div>
  );
}

export default App;
