import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './Page/Login'
import ProductAll from './Page/ProductAll';
import Header from './conpinent/Header'
import PivateRoute from './route/PivateRoute';
import ProductDetail from './Page/ProductDetail';
import './App.css';


const App = () => {

  const [loginok, setLoginok] = useState(false);

  console.log(loginok)

  useEffect(()=>{
    console.log(loginok)
  },[loginok])

  return (
    <div>
      <Header loginok={loginok}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setLoginok={setLoginok}/>}/>
        <Route path="/products/:id" element={<PivateRoute loginok={loginok}/>}/>
      </Routes>
    </div>
  );
}

export default App;
