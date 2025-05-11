import React from 'react'
import one from '../assets/images/main/hero_iphone_family__fuz5j2v5xx6y_small.jpg'

const Header = () => {
  return (
    <a href="https://www.apple.com/in/iphone/" target='_blank'>
          <div className='relative text-center flex flex-col justify-start items-center min-w-full'>
        <a href=""></a>
        <div className='mx-auto absolute flex flex-col text-centre z-1'>
        <h1 className='font-bold text-3xl mt-4'>iPhone</h1>
        <h3 className='text-xl text-gray-800 mt-2'>Meet the iPhone 16 family</h3>
        <div className='flex justify-center gap-5 mt-4'>
            <a href="<button className='bg-blue-500 px-4 py-2 rounded-3xl hover:cursor-pointer'>Learn more</button>"><button className='bg-blue-500 px-4 py-2 rounded-3xl hover:cursor-pointer'>Learn more</button></a>
            <button className=' border border-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-500 cursor-pointer'>Shop iPhone</button>
        </div>
        <p className='mt-6 text-xl'>Built for Apple Intelligence</p>
        </div>
        <div className='min-w-full'>
        <img style={{width:"100%", height:"550px"}} className='mx-auto relative' src={one} alt="iPhone Img" />
        </div>


    </div>
    </a>

  )
}

export default Header