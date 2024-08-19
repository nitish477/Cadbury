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

// const router = createBrowserRouter([
//   {
//     element: (
//       <div>
//        <Navbar/>
//         <main style={{ minHeight: 'calc(100vh - 60px)' }}>
//           <Outlet/> 
//         </main>
//         <Footer/>
//       </div>
//     ),
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
      
//     ],
//   },
// ]);

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main style={{ minHeight: 'calc(100vh - 10px)' }}>
      {children}
    </main>
    <Footer />
  </>
);

  const App = ()=>{
    const path = window.location.pathname;

    let content;
    switch (path) {
      case '/':
        content = <Home />;
        break;
      case '/about':
        content = <About />;
        break;
      case '/contact':
        content = <Contact />;
        break;
      default:
        content = <div>404 Not Found</div>; 
        break;
    }
    return(
      <Layout>
        {content}
      </Layout>
    )
  }
root.render(<>
    <App/>
</>);
