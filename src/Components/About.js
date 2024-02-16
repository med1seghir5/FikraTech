import React from 'react';
import Card from './images/card1.svg';
import Startedu from './images/Mask group (1).svg';
import Ni9t from './images/ni9at.svg'

const About = () => {
  return (
    <div className='pb-48'>
      <div className='flex flex-col items-center mr-96 sm:flex flex-row sm:justify-between p-32'>
        <div className='absolute mt-20 sm:absolute mt-36 ml-28'>
          <img src={Startedu} alt='Startedu logo' className=' w-56 sm:w-full' />
        </div>
      </div>

      <div className='flex items-center justify-center pt-16'>
        <img src={Card} alt='Paragraph' width="90%"  />
      </div>
    </div>
  );
}

export default About;
