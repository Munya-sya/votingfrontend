import React, { Component,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Header from './Components/header';
import President from './Components/Pages/President';
import Login from './Components/Authenticationpages/Login';
import Account from './Components/Authenticationpages/auth';
import Register from './Components/Authenticationpages/register';
import VicePresident from './Components/Pages/Vicepresident';
import PollCreate from './Components/Pages/createpoll';
import ProtectedRoutes from './Components/Authenticationpages/protectedroute';
import Secretary from './Components/Pages/secretary';
import Spokesperson from './Components/Pages/spokesperson';
import Deputy from './Components/Pages/deputy';
import Council from './Components/Pages/council';
import Counciltreasurer from './Components/Pages/counciltreasurer';
import Editpoll from './Components/Pages/Editpolls';

function App(){
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
  setisLoggedIn(true);
  };
  const logOut = () => {
  setisLoggedIn(false);
  };
  return (
  <BrowserRouter>
       <Header/>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/auth' element={<Account/>}/>
        <Route path='/createpoll' element={<PollCreate/>}/>
        <Route path='/president' element={<President/>}/>
        <Route path='/vicepresident' element={<VicePresident/>}/>
        <Route path='/secretary' element={<Secretary/>}/>
        <Route path='/deputy' element={<Deputy/>}/>
        <Route path='/council' element={<Council/>}/>
        <Route path='/spokesperson' element={<Spokesperson/>}/>
        <Route path='/counciltreasurer' element={<Counciltreasurer/>}/>
        <Route path='/viewpoll' element={<Editpoll/>}/>
    </Routes>
    </div>
  </BrowserRouter>
);
}
export default App;