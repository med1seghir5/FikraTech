import React from 'react';
import Speaker1 from './images/Ahmed.svg';
import Speaker2 from './images/Anwar.svg';
import Speaker3 from './images/Meriem.svg';
import Speak from './images/Speakers.svg';
import Flech3 from './images/Flech3.svg';

const Speakers = () => {
  return (
    <div className='sm:pt-16'>
      <div className='flex flex-col items-center pb-5'>
        <img src={Speak} alt='Font Speaker' className='w-32 sm:w-48' />
        <img src={Flech3} alt='Fleche' className='w-8 sm:w-12' />
      </div>

      <div className='flex flex-col space-y-10 sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-10'>
        <img src={Speaker1} alt='Speaker' className='w-full sm:w-96' />
        <img src={Speaker2} alt='Speaker' className='w-full sm:w-96' />
        <img src={Speaker3} alt='Speaker' className='w-full sm:w-96' />
      </div>
    </div>
  );
}

export default Speakers;