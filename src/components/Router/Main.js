import React from 'react'
import {BrowserRouter,Outlet,Route,Routes} from 'react-router-dom';
import { About, Home,Error} from './Component';
import MainHeader from './MainHeader.js';

// npm install react-router-dom@6

const RouterMain = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainHeader/>} >
              <Route index element={<Home/>}></Route>
              <Route path='/about' element={<About/>} ></Route>
              <Route path='*' element={<Error/>} ></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterMain