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
import Sidebar from './Components/Sidebar'
import SideBarLayout from './Components/SideBarLayout'
import ProtectedRoute from './Components/ProtectedRoute'
import AdminRoute from './Components/AdminRoute'
import UserDashboard from './pages/dashboard/UserDashboard'
import MyBookings from './pages/dashboard/MyBookings'
import ReceiptDownload from './pages/dashboard/ReceiptDownload'
import AdminPanel from './pages/Admin/AdminPanel'
import About from './pages/About'
import '@fortawesome/fontawesome-free/css/all.min.css';

const user = JSON.parse(localStorage.getItem("user"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
   <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar/>
    <div style={{ flex: 1 }}>
       
    <Routes>
      <Route  path='/dashboard' element = {<ProtectedRoute user={user}><UserDashboard/></ProtectedRoute>}> </Route>
        <Route path="/my-bookings" element={<ProtectedRoute user={user}><MyBookings /></ProtectedRoute>} />
        <Route path="/receipts" element={<ProtectedRoute user={user}><ReceiptDownload /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminRoute user={user}><AdminPanel /></AdminRoute>} />
      <Route  path ="/login" element = {<Login/>}> </Route>
      <Route  path ="/signup" element = {<Signup/>}> </Route>
      <Route  path ="/home" element = { <SideBarLayout user={user}>
      <Home />
    </SideBarLayout>}> </Route>
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
