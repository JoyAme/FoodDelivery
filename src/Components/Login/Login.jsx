import React, { useState } from 'react'
import Close from '../../image/cross_icon.png'
import './Login.css'

const Login = ({setShow}) => {
    const [sign,setSign]=useState('Login')
  return (
    <div className='body'>
        <form className='Form rounded sm:w-96'>
        <div className='flex justify-between'>
        <h1 className='text-black lg:text-xl font-bold'>{sign}</h1>
          <img onClick={()=> setShow()} className='lg:w-3 object-contain cursor-pointer' src={Close} alt='closebtn'/>
        </div>
      
      <div className='flex flex-col gap-5'>
        {sign ==='Login' ? <></>: <input className='border rounded border-black py-2'/>}
         <input className='border rounded border-black py-2'/>
         <input className='border rounded border-black py-2'/>
       
       
     </div>

        <button className='bg-red-500 rounded lg:text-xl text-white py-2' onClick={()=>setSign()}>{sign === 'signup'?'Create account': 'login'}</button>
        {
            sign === 'signup'? <p>kindly Login in here<span className='text-red-500 font-bold cursor-pointer' onClick={()=>setSign("Login")}>Login</span></p>
            : 
            <p className=''>Create an account <span className='text-red-500 font-bold cursor-pointer' onClick={()=>setSign("signup")}>Signup</span></p>
            
        }
</form>

    
    </div>
  )
}

export default Login
