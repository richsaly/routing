import React from 'react';
import Parent from './Parent';
import Social from './Social';


function Home() {
  return (
   <section  className="flex flex-col justify-center items-center  bg-black text-white">
        <div className='flex items-center justify-center mt-20'>
        <box-icon className='h-24 w-24' name='chevrons-right' type='solid' animation='fade-left' size='lg' color='#ffffff' ></box-icon> 
        <img className='h-96 px-24 mt-28' src="/xaxxy mockup.png" alt="salv" /> 
        <box-icon className='h-24 w-24' name='chevrons-left' type='solid' animation='fade-right' size='lg' color='#ffffff' ></box-icon>
        </div>
         <div>
           <h1 className='text-3xl font-serif hover: text-center'>SALVATION CHUKWUEBUKA MADUKA</h1>
      
           <p className='text-center px-20 text-2xl mt-7'>I am a highly skilled and quality-oriented frontend developer with expertise in React, JavaScript, HTML, and CSS. I excel in creating visually appealing and user-friendly interfaces, ensuring high performance and responsiveness across all devices. My proficiency extends to modern tools and frameworks such as Redux, Tailwind CSS, and TypeScript, enabling efficient and maintainable code. I am dedicated to best practices in web development, emphasizing clean code, thorough testing, and a strong user experience focus.</p>

          <div className='flex space-x-20 justify-center items-center mt-24'>
          <img className='h-18 animate-spin' src='/section-star.png' alt='star' />
          <img className='h-20 animate-bounce' src='/section-star.png' alt='star' />
          <img className='h-18 animate-spin' src='/section-star.png' alt='star' />
          </div>
         </div>

         <h1 className='text-4xl font-bold mt-24'>Your Dream Website Is Just Few Steps Away..</h1>
         <p className='text-2xl font-sans underline mt-8 mb-20'>My work flow <box-icon name='trending-up' color='yellow'></box-icon></p>

         <Parent />
         <Social />

         

   </section>
   
   


  );
}

export default Home;

