
import './App.css';

import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout';
import NotFoundPage from './component/NotFoundPage';


export default function App ()
{
  let route=createBrowserRouter([
    {
      path:"/startReact",
      element:<Layout/>,
      children:[{
        index:true,
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"portfolio",
        element:<Portfolio/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"*",
        element:<NotFoundPage/>

      }
      
    ]
    }
  ])
  return(
    <>
     <RouterProvider router={route}></RouterProvider>

    </>
  );
}
