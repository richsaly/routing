import React from 'react';
import Form from './Form';
import Social from './Social';

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center  bg-black text-white">

      <div className='flex justify-center items-center gap-10'>
        <h1 className='text-4xl'>CONTACT ME FOR ANY <br /> WEBSITE  PROJECT IDEA..</h1>
        <Form />
      </div>
      <Social />
    </section>
  );
}

export default Contact;