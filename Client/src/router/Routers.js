import React from 'react'
import { Routes,Route, Navigate} from 'react-router-dom'
import  Home  from '../Components/Home';
import Signup from '../Components/Signup';
import  Login  from '../Components/Login';
import TourDetails from '../Components/TourDetails';
import SearchResultList from '../Components/SearchResultList';
import Tours from '../Components/Tours';

const Routers = () => {
  return (
   <Routes> 
    <Route path = "/" element = {<Navigate to = "/home"/>}/>
    <Route path = "/home" element = {<Home/>} />
    <Route path = "/tours" element = {<Tours/>} />
    <Route path = "/tours/:id" element = {<TourDetails/>} />
    <Route path = "/login" element = {<Login/>} />
    <Route path = "/signup" element = {<Signup/>} />
    <Route path = "/tours/search" element = {<SearchResultList/>} />

   </Routes>
  )
}

export default Routers