import './Heroo.css'

const Hero = () => {
  return (
    // absolute max-w-29 flex flex-col left-8 items-start  lg:gap-4 text-slate-100 lg:bottom-10 lg:left-14
    <>
       <div className='header relative pt-16 lg:pt-10 font-sans'>
       {/* flex flex-col absolute items-start  gap-1 lg:gap-3 max-w-66 lg:left-14 lg:bottom-8 bottom-3 left-8 text-white */}
        <div className='comb'>
        <h1 className='big sm:text-2xl w-2/3 font-bold  lg:text-4xl lg:w-2/4 text-white '>Order your favourite food here</h1>
                    <p className='small lg:block md:hidden text-xl md:text-3xl sm:hidden lg:text-xl text-white  ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit
                    Et, labore tempora cumque rem esse mollitia voluptatum 
                        commodi reiciendis a culpa? Et, labore tempora cumque rem esse mollitia voluptatum 
                        libero maiores cupiditate commodi reiciendis a culpa?</p> 
                        <button className='btn bg-blue-100 sm:text-sm rounded-full px-3 text-sm py-2 text-blue-950 lg:px-5 lg:py-3 lg:text-3sm'>View Menu</button>
        </div>
        
        </div>     
  
 </>
  )
}

export default Hero
