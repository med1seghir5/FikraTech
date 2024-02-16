import React from 'react';
import GdscLogo from './images/NewGdsc.svg';
import Instagram from './images/instagram.svg';
import Linkdnl from './images/linkedin.svg';
import Facebook from './images/facebook-2.svg';
import Fleche2 from './images/Frame 6.svg';
import SocialMedia from './images/Our Social Media.svg';

const Gdsc = () => {
  return (
    <div className='flex flex-col pt-36 sm:flex-row pt-16 justify-center'>
      <div className='mb-4 sm:mb-0 sm:basis-1/3'>
        <div className='flex flex-row justify-center sm:flex flex-row'>
          <img src={GdscLogo} alt='Gdsc logo' className='ml-8 w-72 sm:w-96' />
        </div>
      </div>

      <div className='flex flex-col justify-center pt-10 sm: pt-20 sm:ml-8'>
        <div className='font-mermaid text-3xl text-center text-[#008080] sm:font-mermaid text-3xl text-[#008080]'>
          What is GDSC Batna?
        </div>

        <div className='font-mermaid text-[#333333] text-center text-lg sm:font-mermaid text-[#333333] text-lg'>
          Google Developer Student Clubs are community groups for college
          and university students interested in Google developer technologies.
          <div className='flex flex-row justify-center space-x-5  sm:flex flex-row space-x-5 pt-4'>
            <a href='https://www.instagram.com/gdsc.batna2/'><button><img src={Instagram} className='w-10' alt='instagram' /></button></a>
            <a href='https://www.linkedin.com/in/dscbatna/'><button><img src={Linkdnl} className='w-10' alt='Linkldnl'/></button></a>
            <a href='https://www.facebook.com/GDSCBatna'><button><img src={Facebook} className='w-10' alt='Facebook' /></button></a>
          </div>
        </div>
        <div className='flex flex-col items-center ml-36 w-24 sm:hidden'>
          <img src={Fleche2} alt='Fleche2' />
          <img src={SocialMedia} alt='Social media'/> 
        </div>
      </div>
    </div>
  );
}

export default Gdsc;
