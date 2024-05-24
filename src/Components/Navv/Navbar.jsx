import { Link } from 'react-router-dom'
import search from '../../image/search_icon.png'
import basket from '../../image/basket_icon.png'
import Logo from '../../image/logo.png'
import { useContext, useState } from 'react'
import './Navbarr.css'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({setShow}) => {
    const [menu,setMenu]=useState("home")
    const {getTotalItems}=useContext(StoreContext)
  return (
    <>
    <div className='flex justify-around  bg-white-500 py-4 mb-4 m-auto items-center font-sans'>
        <div className='Logo'>
       <Link to='/'><img className='w-24 object-contain' src={Logo} alt={Logo}/></Link>
        </div>
        <nav className='hidden lg:block'>
      <ul className='flex gap-5 '>
        <a href='/' onClick={()=>setMenu("home")} id={menu === 'home'? "active" : ""} className="text-blue-900 font-bold" to='/'><li>home</li></a>
        <a href='Hero.jsx' onClick={()=>setMenu("menu")} id={menu === 'menu'? "active" : ""} className=" text-blue-900 font-bold" to='menu'><li>menu</li></a>
        <a href='mobile' onClick={()=>setMenu("mobile-app")} id={menu === 'mobile-app'? "active" : ""} className=" text-blue-900 font-bold" to='mobile'><li>mobile app</li></a>
        <a href='contact' onClick={()=>setMenu("contact")} id={menu === 'contact'? "active" : ""} className=" text-blue-900 font-bold" to='contact'><li>contact us</li></a>
      </ul>
      </nav>
      <div className='flex items-center gap-5'>
        <img className=" w-4 object-contain" src={search} alt='search'/>

        <div className='relative '>
        <Link to='cart'><img className=" w-5 object-contain" src={basket} alt='search'/></Link>
        <div className={getTotalItems() === 0 ? '': 'ready'}></div>
        </div>

        <button onClick={()=>setShow(true)} className='bg-white-500  text-blue-900 bg-slate-100 hover:bg-red-300 border-blue-900 border-2 mr-4  px-4 py-1/2 rounded-full'>sign in</button>
      </div>
    </div>
    </>
    
  )
}

export default Navbar
