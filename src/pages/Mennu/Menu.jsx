import React, { useState } from 'react'
import ExploreMenu from '../../Components/Exploree/ExploreMenu'
import FoodDisplay from '../../Components/Foodshow/FoodDisplay'



const Menu = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>  
  
    </div>
  )
}

export default Menu
