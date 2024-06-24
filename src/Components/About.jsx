import React from 'react';

function About() {
  return (
   <section className="flex flex-col justify-center items-center  bg-black text-white pb-32">
      
      <div className='mt-20 flex bg-slate-900 px-52 py-40 gap-20 mb-32'>
        <img src="/personal-infothumb.png" alt='man' />

        <div>
           <h1 className='text-5xl mb-5'>Personal Info..</h1>
           <p className='text-justify text-lg'>
           As a detail-oriented front-end developer with a keen eye for exceptional UI, I leverage cutting-edge web development tools to empower businesses with a robust online presence. 
           My commitment to excellence ensures that every project I undertake not only meets but exceeds industry standards, setting new benchmarks for innovation and simplicity. I invite you to join forces with someone who understands the power of collaboration. Together, we can transform groundbreaking ideas into stunning realities, propelling businesses ahead of their competition and simplifying lives through innovative solutions.

           Let's embark on this journey together to create something truly remarkable.
           </p>

          <div className='flex gap-16 mt-11'>
            <div className='bg-gray-700 px-10 py-5 rounded-2xl hover:border-2 hover:border-yellow-500'>
              <p className='text-lg'>Email:</p>
              <p>salvationmaduka1@gmail.com</p>
            </div>

            <div className='bg-gray-700 px-10 py-5 rounded-2xl hover:border-2 hover:border-yellow-500'>
              <p className='text-lg'>Phone:</p>
              <p>+234-8142861009</p>
            </div>

          </div>

        </div>

      </div>

      <img src='/rate me.webp' alt='star' />
      <h1 className='text-7xl mt-4 font-bold text-center'>As a top rated frontEnd engineer, I am open for freelancing jobs worldwide.</h1>

       <div className='mt-10'>
       <box-icon name='globe' animation='spin' color='yellow' size='lg' ></box-icon>
       </div>
   </section>
  );
}

export default About;