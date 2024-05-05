
import './App.css';

import { Component } from "react";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';

export default class App extends Component{
    state={

    }
    render()
    {
        return(
          <>
          <Navbar/>
         
          <Home/>
          <About/>
          <Portfolio/>
          <Contact/>
          <Footer/>
          
          
          </>
        )
    }
}
