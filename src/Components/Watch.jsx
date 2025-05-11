import React from 'react'
import img from '../assets/images/main/hero_apple_watch_family__dktodkf3g7au_small.jpg'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Watch = () => {
  return (
    <a href="https://www.apple.com/in/watch/" target='_blank'>
                 <div className='relative text-center flex flex-col justify-start items-center min-w-full mt-4'>
                <div className='mx-auto absolute flex flex-col text-centre z-1'>
                <h1 className='font-bold text-3xl mt-4 flex justify-center gap-2 items-center'><FontAwesomeIcon icon={faApple}/>Watch</h1>
                <h3 className='text-xl text-gray-800 mt-2'>Live healthier.Train better.Stay Connected</h3>
                <div className='flex justify-center gap-5 mt-4'>
                    <button className='bg-blue-500 px-4 py-2 rounded-3xl'>Learn more</button>
                    <button className=' border border-blue-500 px-4 py-2 rounded-3xl'>Shop Watch</button>
                </div>
                <p className='mt-6 text-xl'>Built for Apple Intelligence.</p>
                </div>
                <div className='min-w-full'>
                <img style={{width:'100%',height:'550px'}} className='mx-auto relative' src={img} alt="iPhone Img" />
                </div>
        
        
            </div>
    </a>

  )
}

export default Watch