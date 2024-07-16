import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import './app.css'
import Terms from './components/TermsAndCondition/Terms'
import Privacy from './components/PrivacyPolicy/Privacy'
import Refund from './components/RefundPolicy/Refund'
import Shipping from './components/ShippingPolicy/Shipping'
const App = () => {
  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='/privacy' element={<Privacy />}/>
          <Route path='/refund' element={<Refund />}/>
          <Route path='/shipping' element={<Shipping />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
