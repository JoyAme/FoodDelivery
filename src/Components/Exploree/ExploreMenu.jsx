import { Foods } from '../../image/assets/Asset'
import './Explore.css'


const ExploreMenu = ({category,setCategory}) => {


  return (
    <>
    <div className='Exploree pt-7 font-sans font-bold'>
    <h1 className="text-2xl lg:text-3xl">Explore our Menu</h1>
    <p className='text-sm w-4/4 lg:w-1/2 text-slate-500 pt-5'>choose from a delivery menu featuring a delectable array of dishes. 
        Our mission is your satify your cravings and elevate your dining
         experience,one delicious meal at a time.</p>
         <div className='flex  justify-between  items-center pt-6 scroll-auto'>
            {
                Foods.map((food)=>{
                    return(
                        <div className='cursor-pointer lg:cursor-pointer' >
                            <div className='flex flex-col gap-3 items-center' onClick={()=>setCategory((prev)=>prev === food.menu_name ?"All" && 'circle':food.menu_name)}>
                            <img className={category === food.menu_name ? 'circle' : ''} src={food.menu_image} alt='name'/>
                            <p className=' mt-3 lg:mt-2 text-sm text-slate-500  lg:text-3sm'>{food.menu_name}</p>
                           </div>
                        </div>
                        // border-4 rounded-full border-orange-500 max-w-12 lg:max-w-60 cursor-pointer
                    )
                })
            }
            <hr/>
         </div>
    </div>
    </>
  )
}

export default ExploreMenu
