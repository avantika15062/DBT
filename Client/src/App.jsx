import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './Components/Login'
import { Home } from './Components/Home'
import {Signup} from './Components/Signup'
import { Navbar } from './Components/Navbar'
import TourDetails from './Components/TourDetails'
import Tours from './Components/Tours'
import Footer from './Components/Footer'
import { PrivacyPolicy } from './Components/PrivacyPolicy'
import { TermsAndConditions } from './Components/TermsAndConditions'
import TourBooking from './pages/TourBooking'
import SearchResultList from './Components/SearchResultList'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
   <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar/>
    <div style={{ flex: 1 }}>
    <Routes>
      <Route  path ="/login" element = {<Login/>}> </Route>
      <Route  path ="/signup" element = {<Signup/>}> </Route>
      <Route  path ="/home" element = {<Home/>}> </Route>
      <Route path = "/tours" element = {<Tours/>} />
      <Route path = "/tours/:id" element = {<TourDetails/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/booking" element={<TourBooking/>}/>
      <Route path="/search" element={<SearchResultList />} />
      
       </Routes>
       </div >
<Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
