import './Foodite.css'
import rating_starts from '../../image/rating_starts.png'
import Addwhitebtn from '../../image/add_icon_white.png'
import Addgreenbtn from '../../image/add_icon_green.png'
import remove from '../../image/remove_icon_red.png'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'


const FoodItem = ({id,name,Description,image,price}) => {

        // const [items,setItems]=useState(0)
        const {cartItems,addToCart,RemoveItem}=useContext(StoreContext)

  return (
    <>
    <div className='pt-4 lg:w-full  rounded font-sans shadow-sm shadow-indigo-200  px-4 py-5'>
        {/* <div> */}
      <div className='relative'>
      <img className='w-full ' src={image} alt={image}/>
      <div className='absolute  right-2 bottom-3 lg:bottom-10 lg:right-4'>
      {
        !cartItems[id]
        ? <img className="lg:w-7 w-7 object-contain cursor-pointer" onClick={()=>addToCart(id)}  src={Addwhitebtn} alt='whitebtn'/>
        :<div className='flex gap-2 items-center'>
        <img className="lg:w-7 w-7 cursor-pointer" onClick={()=>addToCart(id)} src={Addgreenbtn} alt='greenbtn'/>
        <p className='text-xl lg:text-2sm text-slate-50'>{cartItems[id]}</p>
        <img className="lg:w-7 w-7 cursor-pointer" onClick={()=>RemoveItem(id)} src={remove} alt='greenbtn'/>
        </div>
      }
      </div>
      </div>
      <div className='flex justify-between mt-4'>
      <h5 className='font-bold text-base lg:text-xl'>{name}</h5>
        <img src={rating_starts} alt='ratings' className='lg:w-20 object-contain w-16'/>
      </div>
      <p className='lg:text-sm text-base pt-2'>{Description}</p>
      <h3 className='pt-2 font-bold text-orange-600'>${price}</h3>
      
      
      {/* </div> */}
     </div>
     </>
  )
}

export default FoodItem
