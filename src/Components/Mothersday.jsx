import React from 'react'
import img from '../assets/images/main/hero_md25__ca4cocy2qlv6_small.png'

const Mothersday = () => {
  return (
    <a href="https://www.apple.com/in/store" target='_blank'>
         <div className='relative text-center flex flex-col justify-end  items-center min-w-full mt-4'>
        <div className='mx-auto absolute flex flex-col text-centre z-1 bottom-15 text-xl md:text-xs'>
        <h1 className='font-bold text-3xl mt-4'>Mother's Day</h1>
        <h3 className=' text-gray-800 mt-2 '>It's not too late to find the perfect gift for Mom.</h3>
        <div className='flex justify-center gap-5 mt-4'>
            <button className='bg-blue-500 px-6 py-3 rounded-3xl hover:cursor-pointer'>Shop</button>
        </div>
        </div>
        <div className='min-w-full'>
        <img style={{width:'100%',height:'550px'}} className='mx-auto relative' src={img} alt="iPhone Img" />
        </div>


    </div>
    </a>

  )
}

export default Mothersday