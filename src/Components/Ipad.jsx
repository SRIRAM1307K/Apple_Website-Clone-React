import React from 'react'
import img from '../assets/images/main/promo_ipad_air__bfbxzvw65c02_small.jpg'
import logo from '../assets/images/logo/promo_logo_ipadair__frwnnsqveeye_medium.png'

const Ipad = () => {
  return (
    <a href="https://www.apple.com/in/ipad-air/" target='_blank'>
                        <div className='relative text-center flex flex-col justify-start items-center mt-4'>
                    <div className='mx-auto absolute flex flex-col text-centre z-1 p-10'>
                    <img className='mx-auto' src={logo} alt="iPad Img" />
                    <h3 className='text-xl mt-2'>Now supercharged by the M3 chip.</h3>
                    <div className='flex justify-center gap-5 mt-4'>
                        <button className='bg-blue-500 px-4 py-2 rounded-3xl hover:cursor-pointer'>Learn more</button>
                        <button className=' border border-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>Buy</button>
                    </div>
                    </div>
                    <div>
                    <img style={{width:'1000px',height:'550px'}} className='mx-auto relative' src={img} alt="iPhone Img" />
                    </div>
                    <p className=' absolute mt-6 text-xl bottom-8'>Built for Apple Intelligence.</p>
                </div>
    </a>

  )
}

export default Ipad