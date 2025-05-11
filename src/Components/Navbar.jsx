import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='container flex justify-between text-md min-w-full'>
        <a href="#"><FontAwesomeIcon icon={faApple} /></a>

        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/store" target='_blank'>Store</a>
        <a  className='hidden lg:flex hover:underline' href="https://www.apple.com/in/mac/" target='_blank'>Mac</a>
        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/ipad/" target='_blank'>iPad</a>
        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/iphone/" target='_blank'>iPhone</a>
        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/watch/" target='_blank'>Watch</a>
        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/airpods/" target='_blank'>Airpods</a>
        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/tv-home/" target='_blank'>TV & Home</a>
        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/services/" target='_blank'>Entertainment</a>
        <a className='hidden lg:flex hover:underline' href="https://www.apple.com/in/shop/accessories/all" target='_blank'>Accessories</a>
        <a className='hidden lg:flex hover:underline' href="https://support.apple.com/en-in" target='_blank'>Support</a>
        <div className='flex gap-5 items-center'>
            
        <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
        <a href=""><FontAwesomeIcon icon={faBagShopping} /></a>
        </div>




    </div>
  )
}

export default Navbar