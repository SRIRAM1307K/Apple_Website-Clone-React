import React from 'react'
import img from '../assets/images/main/promo_college_students__bxqdcoxgjzw2_medium.jpg'

const Collegestudents = () => {
  return (
    <a href="https://www.apple.com/in/education/college-students/" target='_blank'>
                        <div className='relative text-center flex flex-col justify-start items-center mt-4'>
                    <a href=""></a>
                    <div className='mx-auto absolute flex flex-col text-centre z-1 top-5'>
                    <h1 className='font-bold text-3xl mt-4'>College Students</h1>
                    <h3 className='text-xl mt-2'>Mac and iPad.</h3>
                    <h3 className='text-xl mt-1'>Major. In any field.</h3>
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

export default Collegestudents