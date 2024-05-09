import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login-Form/LoginF';
import Profiles from './page/profile page/Profiles';
import Header from './component/header/index.jsx';



const App = () => {
  return (
    < BrowserRouter>
    <Header/>
    
    <Routes>
      
    <Route path="/" element={ <Login />} />
    <Route path="/profile" element={ <Profiles/>} />
   
      
    </Routes>
    
    
  </BrowserRouter>
   )
}

export default App

