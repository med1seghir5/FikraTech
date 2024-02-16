import React from 'react'
import BigLogo from './images/Frame 1.svg'
import DateLieu from './images/Newdate.svg'
import Collab from './images/gdsc-startedu-02.svg'


const Logo = () => {
  return (
    <div className= 'flex flex-col items-center justify-center sm:flex flex-col items-center justify-center' id='logo'>
        <div>
            <img src={BigLogo} alt='Fikratech logo' className='w-72 sm:w-96'/>
        </div>

        <div>
            <img src={DateLieu} alt="La date et le lieu de l'evenement" className='w-96 sm:w-full'/>
        </div>

        <div className='m-10'>
            <img src={Collab} alt='Collab logo' className='w-72 sm:w-96' />
        </div>

        <div>
        <button className='bg-[#008080] text-[#ffff] w-52 h-14 text-2xl font-mermaid ml-5 mb-10 sm:bg-[#008080] text-[#ffff] w-52 h-14 text-2xl font-mermaid ml-10 mt-6'>
           <a href='https://docs.google.com/forms/d/e/1FAIpQLSfErfYRo7Xg4FU1fyZ9M0r0YU1AWGAwiNA9pzKi6J87_BHDkQ/viewform'>
              Register
           </a>
          </button>
        </div>
        
    </div>
  )
}

export default Logo;