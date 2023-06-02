import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
 return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/home' element = {<Home />} />
       <Route path='/shop' element={<Shop />} />
     </Routes>
   </BrowserRouter>
 )
}


export default App;


