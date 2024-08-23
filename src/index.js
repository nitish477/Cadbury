import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './View/Home/Home';
import About from './View/About/About';
import Contact from './View/Contact/Contact';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import "./main.css"

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    element: (
      <div>
       <Navbar/>
        <main style={{ minHeight: 'calc(100vh - 60px)' }}>
          <Outlet/> 
        </main>
        <Footer/>
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      
    ],
  },
]);


root.render(<>
  <RouterProvider router={router}/>
</>);
