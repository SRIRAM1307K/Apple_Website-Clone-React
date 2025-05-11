
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'



const OfferLabel = () => {
  return (
    <div className='text-md p-6'>
        <p>Get up to 12 months of No Cost EMI <sup>◊</sup> plus up to ₹8000.00 instant cashback <sup>‡</sup> on selected products with eligible cards. <a className='text-blue-500 hover:underline' href="https://www.apple.com/in/store" target='_blank'>Shop<FontAwesomeIcon className='text-xs' icon={faAngleRight} /></a></p>
    </div>
  )
}

export default OfferLabel