import React from 'react'
import img from '../assets/images/main/promo_macbook_air_avail__e8ksaudoisey_small.jpg'

const Macbook = () => {
  return (
    <a href="https://www.apple.com/in/macbook-air/" target='_blank'>
                    <div className='relative text-center flex flex-col justify-start items-center mt-4'>
                <a href=""></a>
                <div className='mx-auto absolute flex flex-col text-centre z-1 top-5'>
                <h1 className='font-bold text-3xl mt-4'>MacBook Air</h1>
                <h3 className='text-xl mt-2'>Sky blue colour.</h3>
                <h3 className='text-xl mt-1'>Sky high performance with M4</h3>
                <div className='flex justify-center gap-5 mt-4'>
                    <button className='bg-blue-500 px-4 py-2 rounded-3xl hover:cursor-pointer'>Learn more</button>
                    <button className=' border border-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>Buy</button>
                </div>
                </div>
                <div>
                <img style={{width:'1000px',height:'550px'}} className='mx-auto relative' src={img} alt="iPhone Img" />
                </div>
                <p className=' absolute mt-6 text-xl bottom-5'>Built for Apple Intelligence.</p>
        
        
            </div>
    </a>

  )
}

export default Macbook