import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
// import Home from './pages/Homem/Home';
import Menu from './pages/Mennu/Menu';
import Mobile from './pages/Mobileapp/Mobile';

import Navbar from './Components/Navv/Navbar';
import Cartt from './pages/Cart/Cartt';
import Foot from './pages/Footer/Foot';
import { useState } from 'react';
import Login from './Components/Login/Login';
import React from 'react';
import LazyLoad from './pages/Loading/LazyLoad';
const Home= React.lazy(()=>  import ('./pages/Homem/Home'))

function App() {
  const [show,setShow]=useState(false)

  return (
    <>
    <BrowserRouter>
    {show ? <Login setShow={setShow}/> : <></>}
    <Navbar setShow={setShow}/>
    <Routes>
      <Route path='/' element={<React.Suspense fallback={<LazyLoad/>}><Home/></React.Suspense>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='mobile' element={<Mobile/>}/>
      <Route path='cart' element={<Cartt/>}/>
      <Route path='contact' element={<Foot/>}/>
    </Routes>
    <Foot/>
    
    </BrowserRouter>
    {/* <div className="flex min-w-full">
       <h1 className="p-3 m-4 text-2xl bg-blue-500 font-bold text-white">
      Hello world! the lord is right
    </h1>
  
    <div className="App">
       <h1 className="p-3 m-4 h-36 w-1/2 text-2xl bg-red-500 opacity-20 text-white -mt-2">
      the lord is right
    </h1>
    </div> 
    </div> */}
    </>

  );
}

export default App;
