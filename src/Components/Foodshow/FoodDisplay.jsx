import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({category}) => {
    const {Food_list} = useContext(StoreContext)

  return (
    <>
    <div className='w-4/5 m-auto'>
    <h3 className='font-bold text-2xl pt-9'>Top dishes near you</h3>
    <div className='grid lg:grid-cols-4 cursor-pointer content-center  gap-4 pt-7'>
   
      {
        Food_list.map((food,index)=>{
         console.log(category)
          if(category ==="All" || category === food.category){
            return <FoodItem key={index} id={food._id} name={food.name}  Description={food.description} image={food.image} price={food.price} />
             
          }else{
            return null
          }

        })
      }
    </div>
    </div>
    </>
  )
}

export default FoodDisplay
