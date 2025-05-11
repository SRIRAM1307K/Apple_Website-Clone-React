
import './App.css'

import Navbar from './Components/Navbar'
import OfferLabel from './Components/OfferLabel'
import Header from './Components/Header'
import Mothersday from './Components/Mothersday'
import Watch from './Components/Watch'
import Macbook from './Components/Macbook'
import Collegestudents from './Components/Collegestudents'
import Ipad from './Components/Ipad'
import Macbookpro from './Components/Macbookpro'
import Airpods from './Components/Airpods'
import Tradein from './Components/Tradein'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <Navbar/>
    <OfferLabel/>
    <Header/>
    <Mothersday/>
    <Watch/>
    <div className='flex flex-col lg:flex-row justify-center items-center gap-4 min-w-full'>
      <Macbook/>
      <Collegestudents/>
      </div >
      <div className='flex flex-col lg:flex-row justify-center items-center gap-4 min-w-full'>
      <Ipad/>
      <Macbookpro/>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-4 min-w-full'>
      <Airpods/>
      <Tradein/>
      </div>

      <Hero/>
      <Footer/>
    </>
  )
}

export default App
