import React from 'react'
import img from '../assets/images/main/promo_macbookpro_announce__gdf98j6tj2ie_small.jpg'

const Macbookpro = () => {
  return (
    <a href="https://www.apple.com/in/macbook-pro/" target='_blank'>
                            <div className='relative text-center flex flex-col justify-start items-center mt-4'>
                        <div className='mx-auto absolute flex flex-col text-centre text-white z-1 p-10'>
                        <h1 className='font-bold text-4xl mt-4'>MacBook Pro</h1>
                        <h3 className='text-xl mt-2 font-medium'>A work of smart.</h3>
                        <div className='flex justify-center gap-5 mt-4'>
                            <button className='bg-blue-500 px-4 py-2 rounded-3xl hover:cursor-pointer'>Learn more</button>
                            <button className=' text-blue-500 border border-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 hover:text-white cursor-pointer'>Buy</button>
                        </div>
                        </div>
                        <div>
                        <img style={{width:'1000px',height:'550px'}} className='mx-auto relative' src={img} alt="iPhone Img" />
                        </div>
                        <p className=' absolute mt-6 text-xl bottom-8 text-white'>Built for Apple Intelligence.</p>
                    </div>
    </a>

  )
}

export default Macbookpro