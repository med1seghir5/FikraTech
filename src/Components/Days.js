import React from 'react';
import Day1 from './images/Day1.svg';
import Day2 from './images/Day2.svg';
import Day3 from './images/Day3.svg';
import Day4 from './images/Day4.svg';
import Day5 from './images/Day5.svg';
import Agenda from './images/Agenda.svg';
import Fleche from './images/Frame (6).svg';

const Days = () => {
  return (
    <div className='pt-16 pt-44 sm:pt-32 pb-36'>
      <div className='flex flex-col items-center sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-20'>
        <img src={Day1} className='w-60 sm:w-96' alt='day1' />
        <img src={Day2} className='w-60 sm:w-96' alt='day2' />
        <img src={Day3} className='w-60 sm:w-96' alt='day3' />
      </div>

      <div className='flex flex-col items-center  sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-12'>
        <img src={Day4} className='w-60 sm:w-96' alt='day4' />
        <div className='flex flex-col items-center sm:flex flex-col items-center mb-48'>
          <img src={Agenda}  className='w-32 sm:w-full' alt='agenda' />
          <img src={Fleche} className='w-16 sm:w-12' alt='fleche' />
        </div>
        <img src={Day5} className='w-60 sm:w-96' alt='day5' />
      </div>
    </div>
  );
}

export default Days;
