import React from 'react'
import Logo from './images/SmallLogo.svg'
import Instagram from './images/instagram (1).svg'
import Facebook from './images/facebook-2 (1).svg'
import Linkdnl from './images/linkedin (1).svg'


const LastSection = () => {
  return (
    <div class="relative w-full h-full bg-cover bg-center firstbg">
    <div>
        <div className='flex justify-center pt-10'>
            <img src={Logo} alt='FikraTech Logo' />
        </div>
    <div>
        <div className='flex flex-row justify-center pt-20 pb-3 space-x-5'>
            <a href='https://www.instagram.com/startedu_dz/'><button><img src={Instagram} className='w-10'  alt='instagram'/></button></a>                    
            <a><button><img src={Linkdnl} className='w-10' alt='Linkldnl'/></button></a>
            <a><button><img src={Facebook} className='w-10' alt='Facebook' /></button></a>
        </div>

        <div className='text-center font-sans text-[#FFFFFF] text-opacity-65 pb-5'>
            © All Rights Reserved For Fikratech 2024.
        </div>
    </div>
    </div>
 </div>
  )
}

export default LastSection;










/*import React from 'react'
import Logo from './images/SmallLogo.svg'
import Instagram from './images/instagram (1).svg'
import Facebook from './images/facebook-2 (1).svg'
import Linkdnl from './images/linkedin (1).svg'


const LastSection = () => {
  return (
    <div className='pt-12 bg-slate-600'>
        <div className='flex justify-center pt-16'>
            <img src={Logo} alt='FikraTech Logo' />
        </div>
    <div className='pt-10'>
        <div className='flex flex-row justify-center pt-20 pb-3 space-x-5'>
            <a href='https://www.instagram.com/gdsc.batna2/'><button><img src={Instagram} className='w-10'  alt='instagram' /></button></a>                    
            <a href='https://www.linkedin.com/in/dscbatna/'><button><img src={Linkdnl} className='w-10' alt='Linkldnl'/></button></a>
            <a href='https://www.facebook.com/GDSCBatna'><button><img src={Facebook} className='w-10' alt='Facebook' /></button></a>
        </div>

        <div className='text-center font-sans text-[#FFFFFF] text-opacity-65 pb-5'>
            © All Rights Reserved For Fikratech 2024.
        </div>
    </div>
    </div>
  )
}

export default LastSection; */