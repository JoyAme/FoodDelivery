import { useContext } from "react"
import { StoreContext } from "../../Components/Context/StoreContext"
import './Carrt.css'

const Cartt = ({id,name,Description,image,price}) => {

    const {cartItems,Food_list,RemoveItem,getTotalItems,}=useContext(StoreContext)

  return (
    <div className="carty">
        <div className='pt-4   py-5'>
            <div className="flex items-center justify-around">
                <p>image</p>
                <p>name</p>
                <p>price</p> 
                <p>quantity</p>
                <p>total</p>
                <p>Delete</p>
            </div>
            <br></br>
            <hr></hr>
     {
        Food_list.map((food,index)=>{
            if(cartItems[food._id]>0){
                return(
                <div className="">
                <div className="flex  justify-around py-3">
                <img className='w-10 lg:w-16 rounded' src={food.image} alt={image}/>
     
                <p className='font-bold'>{food.name}</p>
                <p className='font-bold'>{food.price}</p>
                <p className='lg:text-sm '>{cartItems[food._id]}</p>
                <p className='font-bold text-orange-600'>${food.price*cartItems[food._id]}</p>
                <p className="text-xl cursor-pointer">x</p>
                </div>
                <hr className=""></hr>
                </div>
                 ) 
            }else {
                return null 
            }
           
        })
     }
     
     <div className="mt-20  lg:flex lg:justify-between items-center">
    
                <div className="rule text-xl lg:text-xl">
                    <h3 className="text-2xl font-bold mb-3">Carts Totals</h3>
                    <div className="flex justify-between  lg:w-96 text-xl">
                        <h2 className="mt-1">Subtotal</h2>
                        <h2>${getTotalItems()}</h2>
                    </div>
                    <hr className="mt-2"></hr>
                    <div className="flex justify-between  lg:w-96">
                        <h4 className="mt-1">Delivery Fee</h4>
                        <h4 className="text-orange-500">${2}</h4>
                    </div>
                    <hr className="mt-2"></hr>
                    <div className="flex justify-between lg:w-96">
                        <h4 className="mt-1">Total</h4>
                        <h4>${getTotalItems() * 2}</h4>
                    </div>
                    <hr className="mt-2"></hr>

                    <button className="bg-orange-500 rounded text-white px-2 py-2 mb-10 mt-4 lg:mt-2">PROCEED TO CHECKOUT</button>
                </div>

                <div className="">
        <h5 className="text-xl font-medium mb-1">Have a Promo Code Enter it below</h5>
        <div >
            <input type="text" placeholder="type here" className=" appearance-none text-slate-100 border border-black-700 rounded py-2 w-72 pl-3"/>
            <button type="submit" className="bg-black py-2 px-8 text-slate-100 rounded">Submit</button>
        </div>
     </div>
     </div>
    
     </div>
    </div>
  )
}

export default Cartt
