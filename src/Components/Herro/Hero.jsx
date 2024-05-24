import './Heroo.css'

const Hero = () => {
  return (
    // absolute max-w-29 flex flex-col left-8 items-start  lg:gap-4 text-slate-100 lg:bottom-10 lg:left-14
    <>
       <div className='header relative pt-10 font-sans'>
        <div className='flex flex-col absolute items-start  gap-1 lg:gap-3 max-w-66 lg:left-14 lg:bottom-8 bottom-4 left-8 text-white'>
        <h1 className='text-2xl w-2/3  lg:text-6xl lg:w-1/2  '>Order your favourite food here</h1>
                    <p className='text-sm lg:text-xl w-5/4 lg:w-3/4 ' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit
                    Et, labore tempora cumque rem esse mollitia voluptatum 
                        commodi reiciendis a culpa? Et, labore tempora cumque rem esse mollitia voluptatum 
                        libero maiores cupiditate commodi reiciendis a culpa?</p>
                        <button className='bg-blue-100 rounded-full px-3 text-sm py-2 text-blue-950 lg:px-5 lg:py-3 lg:text-3sm'>View Menu</button>
        </div>
        
        </div>     
  
 </>
  )
}

export default Hero
