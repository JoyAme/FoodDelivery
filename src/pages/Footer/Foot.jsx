import './Foott.css'
import Logo from '../../image/logo.png'
import facebook from '../../image/facebook_icon.png'
import twitter from '../../image/twitter_icon.png'
import linkedin from '../../image/linkedin_icon.png'
// import { useState } from 'react'
// import Navbar from '../../Components/Navv/Navbar'

const Foot = () => {
    // const [back,setBack]=useState(<Navbar/>)
  return (
    <div className='bg-black text-white mt-10 font-sans'>
        <div className='fit'>
      <div className='Tomato py-20 sm:gap-3'>
           

                <div> 
                <img className='image' src={Logo} alt={Logo}/>
                    <p className='sm:w-76 lg:w-96 text-sm  mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Blanditiis voluptate vel totam odit consequuntur, repellendus similique odio? 
                        Quis esse asperiores cupiditate tempore at quaerat et amet ducimus repellat, 
                        voluptas reprehenderit totam labore incidunt numquam deserunt officia ipsa cumque eligendi.</p>
                    
                <div className='flex gap-4 mt-5'>
                  <img className='w-5 object-contain' src={facebook} alt='facebook'/>
                  <img className='w-5 object-contain' src={twitter} alt='facebook'/>
                  <img className='w-5 object-contain' src={linkedin} alt='facebook'/>
                 </div>
                </div>

                <div>
                    <h1 className=''>COMPANY</h1>
                    <ul className='mt-5'>
                        <li className='text-sm lg:text-3sm'>Home</li>
                        <li className='text-sm '>About us</li>
                        <li className='text-sm '>Delivery</li>
                        <li className='text-sm ' >Privacy Policy</li>
                        </ul>
                </div>

                <div>
                    <h1>GET IN TOUCH</h1>
                    <ul className='mt-5'>
                        <li className='text-sm '>+000-2222-111</li>
                        <li className='text-sm '> contact@gmail.com</li>
                    </ul>
                </div>
                </div>
          


    
                <hr className='line'></hr>
            {/* <h1 onClick={()=> setBack(back)}>Back to top</h1> */}
                <p className='text-center text-sm -mb-10 mt-10'> @copyright Tomato.com - All Rights Reserved</p>

      </div>
 
    </div>
  )
}

export default Foot
