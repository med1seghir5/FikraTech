import React from 'react'
import Aboutus from './images/About Us.svg';
import flech from './images/flech4.svg'


const AboutUs = () => {
  return (
    <div className='flex flex-col items-center sm:flex flex-row'>
            <div className='flex flex-col items-center sm:flex flex-row items-end justify-end'>
             <div className='font-magic text-[#008080] text-xl mb-4'>
                 <img src={Aboutus} alt='AboutUs logo' />
             </div>
             <div className='flex flex-col justify-center pr-6 sm: pb-8'>
                 <img src={flech} className='w-full sm:w-24' alt='About logo' />
            </div>
            </div>

        <div className='font-mermaid text-3xl text-center text-[#008080] '>
            Fikrtech is an exciting event where you'll apply your ideas in Startup prototype using<br/>
            Technology. With interactive workshops, you'll get to present your prototype at the end.
        </div>
    </div>
  )
}

export default AboutUs;