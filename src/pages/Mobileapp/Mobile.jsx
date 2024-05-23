import Apple from '../../image/app_store.png'
import Playstore from '../../image/play_store.png'
import './Mobil.css'

const Mobile = () => {
  return (
    <div className='mobil'>
      <h1 className='mt-16 lg:text-4xl text-2xl font-bold  w-3/4 m-auto'>For Better Experience Download Tomato App</h1>
      <div className='flex mt-4 gap-4 justify-center'>
        <img className='w-24 object-contain lg:w-52' src={Playstore} alt='google'/>
        <img className='w-24 object-contain lg:w-52'src={Apple} alt='google'/>
      </div>
    </div>
  )
}

export default Mobile
