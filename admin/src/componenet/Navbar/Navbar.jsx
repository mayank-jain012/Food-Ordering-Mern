import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import '../../index.css';
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { FaBasketShopping } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [toogleMenu,setToogleMenu]=useState(false)
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='app__navbar'>
      <Link to='/' className='app__navbar-logo'>
        <img  src={assets.gericht} alt="" /></Link>
      <ul className="navbar-menu app__navbar-links">
        <li className='p__opensans'>
          <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        </li>
        <li className='p__opensans'>
          <a href='#aboutus' onClick={() => setMenu("about")} className={`${menu === "about" ? "active" : ""}`}>About</a>
        </li>
        <li className='p__opensans'>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        </li>
        <li className='p__opensans'>
          <a href='#awards' onClick={() => setMenu("awards")} className={`${menu === "awards" ? "active" : ""}`}>Awards</a>
        </li>
        <li className='p__opensans'>
          <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        
        <Link to='/cart' className='navbar-search-icon'>
        <FaBasketShopping color='white' size={30}/>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)} className='p__opensans'>sign in</button>
          : <div className='navbar-profile'>
            <IoPersonAdd size={30} color='white'/>
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li>
            </ul>
          </div>
        }

      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToogleMenu(true)}} />
        {toogleMenu &&(
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => {setToogleMenu(false) }} />
          <ul className=" app__navbar-smallscreen-links">
        <li className='p__opensans'>
          <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>home</Link>
        </li>
        <li className='p__opensans'>
          <a href='#aboutus' onClick={() => setMenu("about")} className={`${menu === "about" ? "active" : ""}`}>About us</a>
        </li>
        <li className='p__opensans'>
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        </li>
        <li className='p__opensans'>
          <a href='awards' onClick={() => setMenu("awards")} className={`${menu === "awards" ? "active" : ""}`}>Awards</a>
        </li>
        <li className='p__opensans'>
          <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>contact us</a>
        </li>
      </ul>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
