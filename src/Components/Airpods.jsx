import React from 'react'
import img from '../assets/images/main/promo_airpods_4_avail__bl22kvpg6ez6_small.jpg'

const Airpods = () => {
  return (
    <a href="https://www.apple.com/in/airpods-4/" target='_blank'>
                            <div className='relative text-center flex flex-col justify-start items-center mt-4'>
                        <a href=""></a>
                        <div className='mx-auto absolute flex flex-col text-centre text-white z-1 bottom-15'>
                        <h1 className='font-bold text-3xl mt-4'>AirPods 4</h1>
                        <h3 className='text-xl mt-2'>Iconic. Now Supersonic.</h3>
                        <h3 className='text-xl mt-1'>Available with Active Noise Cancellation.<sup className='text-xs font-extralight'>1</sup> </h3>
                        <div className='flex justify-center gap-5 mt-4'>
                            <button className='bg-blue-500 px-4 py-2 rounded-3xl hover:cursor-pointer'>Learn more</button>
                            <button className=' border border-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>Buy</button>
                        </div>
                        </div>
                        <div>
                        <img style={{width:'1000px',height:'550px'}} className='mx-auto relative' src={img} alt="iPhone Img" />
                        </div>
                    </div> 
    </a>

  )
}

export default Airpods