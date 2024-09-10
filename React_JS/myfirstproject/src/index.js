import React from 'react';
import ReactDOM from 'react-dom/client';

import Logo from "./Logo";
import Footer from "./Footer";
import {Separator} from './Separator';
import Welcome from './Welcome';
import Hello from './Hello';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';

const root = ReactDOM.createRoot(document.getElementById('root'));
//" " karya vagar html as a argument pass karva dye due to JSX, JSX FRAGMENT
//interpolation --> name vadu, 
// const name = "kunj";

// component no first letter capital, baki e function thay jase


function Layout(){
  return(
        <div className='container'>

          <div className='row mb-2'>
            <div className='col-2 border border-primary mx-1'>
                Logo
            </div>
            <div className='col border border-dark'>
              
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col-3 me-2 border border-danger'>
              SIDEBAR
            </div>
            <div className='col border border-danger'>
              <ul class="navbar">
                <li class="nav">
                  <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li class="nav">
                  <Link class="nav-link" to="/about">About Us</Link>
                </li>
                <li class="nav">
                  <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                <li class="nav">
                  <Link class="nav-link" to="/service">Service</Link>
                </li>
              </ul>
            </div>
            <Outlet/>
          </div>

          <div className='row mb-2 border border-success'>
            <div className='col'>
              Footer
            </div>
          </div>

        </div>
  )
}

root.render(

  //   <h1>Hello World !  -- basic</h1>
  //   <h2>Kunj's pretty  -- basic</h2>    <h1>{name}  -- interpolation</h1>
  //   <h2>{ " {name} " } -- how to write this</h2>
  //   <Separator count="20" by="="/>
  //   <Logo />
  //   <Separator count="20" by="#"/>
  //   <Footer />
  //   <Welcome/>
  //   <Separator count="10" by=" _ |"/>
  //   <Hello/>


    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/service" element={<Service/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  
);