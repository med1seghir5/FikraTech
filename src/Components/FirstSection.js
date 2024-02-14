import React from 'react'
import Navbar from './Navbar';
import Logo from './Logo';



const FirstSection = () => {
  return (
    <div>
      <div class="relative w-full h-full bg-cover bg-center firstbg"> 
       <div class="absolute bg-cover bg-center secondbg">
       </div>
      <div class="absolute bg-cover bg-center thirdbg"> 
      </div>
      <Navbar id='Navbar' /> 
       <Logo id='Logo'/> 
      </div>
    </div>
    
  )
}

export default FirstSection;




















/*import React from 'react'
import Navbar from './Navbar';
import Logo from './Logo';



const FirstSection = () => {
  return (
    <div id='Firstsection'>
        <Navbar id='Navbar' />
        <Logo id='Logo'/>
    </div>
  )
}

export default FirstSection; */