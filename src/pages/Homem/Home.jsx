import { useState } from 'react'
import ExploreMenu from '../../Components/Exploree/ExploreMenu'
import FoodDisplay from '../../Components/Foodshow/FoodDisplay'

import Hero from '../../Components/Herro/Hero'
import './Homme.css'
import Mobile from '../Mobileapp/Mobile'
import Foot from '../Footer/Foot'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
 <>
 <Hero/>
 <ExploreMenu category={category} setCategory={setCategory}/>
 <FoodDisplay category={category}/>
 <Mobile/>
 <Foot/>
 </>
  )
}

export default Home
