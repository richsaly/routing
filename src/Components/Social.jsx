import React from 'react'

const Social = () => {
  return (
    <div className=' mt-32 bg-slate-900 px-11 py-11 mb-24'>
        <h1 className='text-9xl font-bold mt-20 hover:text-yellow-400'>GET IN TOUCH..</h1>

        <div className='flex justify-evenly mt-14 text-3xl '>
        <a 
          href="https://web.facebook.com/richiesalvation" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='hover:bg-gray-950 px-10 py-3 rounded-xl'>
          Facebook
        </a>
        <a 
          href="https://github.com/richsaly" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='hover:bg-gray-950 px-10 py-3 rounded-xl'>
          Github
        </a>
        <a 
          href="https://www.linkedin.com/in/salvation-maduka-21111b231/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='hover:bg-gray-950 px-10 py-3 rounded-xl'>
          LinkedIn
        </a>
        </div>
    </div>
  )
}

export default Social

