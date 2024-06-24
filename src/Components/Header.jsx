import React  from 'react';

const Header = () => {

  return (

    <header className='fixed w-full z-50  flex justify-between px-20 py-5 bg-gray-600 text-white'>
        <h1 className='text-2xl'>SALV<box-icon name='code-alt' color='red'></box-icon>TION </h1>
        <nav>
          <ul className='flex space-x-11 text-2xl'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <links className='space-x-12 flex bg-gray-500 px-5 py-3'>
        <h3 className='flex'>Follow me  here: </h3>
         <a 
        href="https://web.facebook.com/richiesalvation" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='flex items-center'>
        <box-icon name='facebook-circle' type='logo' color='#ffffff' ></box-icon>
      </a>
      <a 
        href="https://github.com/richsaly" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='flex items-center'>
        <box-icon name='github' type='logo' color='#ffffff' ></box-icon>
      </a>
      <a 
        href="https://www.linkedin.com/in/salvation-maduka-21111b231/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='flex items-center'>
        <box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon>
      </a>
        </links>


      </header> 
    
  );
};

export default Header;
