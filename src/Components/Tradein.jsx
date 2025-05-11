import React from 'react'
import img from '../assets/images/main/promo_iphone_tradein__bugw15ka691e_small.jpg'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tradein = () => {
  return (
    <a href="https://www.apple.com/in/shop/trade-in" target='_blank'>
                            <div className='relative text-center flex flex-col justify-start items-center mt-4'>
                        <a href=""></a>
                        <div className='mx-auto absolute flex flex-col text-centre z-1 top-10'>
                        <h1 className='font-bold text-3xl mt-4 flex items-center gap-2 justify-center'><FontAwesomeIcon icon={faApple}/>Trade In</h1>
                        <h3 className='text-xl mt-2'>Upgrade and save. It's that easy</h3>
                        <div className='flex justify-center gap-5 mt-4'>
                            <button className='bg-blue-500 px-4 py-2 rounded-3xl hover:cursor-pointer text-white'>Get your estimate</button>
                        </div>
                        </div>
                        <div>
                        <img style={{width:'1000px',height:'550px'}} className='mx-auto relative' src={img} alt="iPhone Img" />
                        </div>
                    </div>
    </a>

  )
}

export default Tradein