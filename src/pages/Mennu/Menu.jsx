import React, { useState } from 'react'
import ExploreMenu from '../../Components/Exploree/ExploreMenu'
import FoodDisplay from '../../Components/Foodshow/FoodDisplay'

import Foot from '../Footer/Foot'

const Menu = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>  
      <Foot/>
    </div>
  )
}

export default Menu
