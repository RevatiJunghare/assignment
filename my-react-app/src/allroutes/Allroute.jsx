import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/signup'
import Signin from '../pages/signin'
import UsersProfile from '../pages/main'



const Allroutes = () => {
  return (
    
        <Routes>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/userprofile" element={<UsersProfile/>}></Route>
            
        </Routes>
  )
}

export default Allroutes