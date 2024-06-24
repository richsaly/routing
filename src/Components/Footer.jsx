import React from 'react'

const Footer = () => {
  return (
   <section className=' bg-gray-600 py-10 text-center'>
    <div className='flex flex-col justify-end'>
    <p>Copyright © 2024 <span className='text-xl text-yellow-500'>Salvation-Maduka.</span> All rights reserved.</p>
    </div>

    <div className='flex justify-center items-center gap-10 mt-5'>
    <a 
        href="https://web.facebook.com/richiesalvation" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='flex items-center'>
        <box-icon name='facebook-circle' type='logo' color='blue' ></box-icon>
      </a>
      <a 
        href="https://github.com/richsaly" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='flex items-center'>
        <box-icon name='github' type='logo' color='black' ></box-icon>
      </a>
      <a 
        href="https://www.linkedin.com/in/salvation-maduka-21111b231/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='flex items-center'>
        <box-icon name='linkedin-square' type='logo' color='blue' ></box-icon>
      </a>
      <a 
        href="https://www.youtube.com/channel/UCwqzW6tUMRwJImTwUYZv8hw" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='flex items-center'>
       <box-icon type='logo' name='youtube' color='red'></box-icon>
      </a>
    </div>
   </section>
  )
}

export default Footer