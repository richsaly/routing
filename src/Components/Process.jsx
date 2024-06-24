import React from 'react';

const Process = ({ title, description, items }) => {
  return (
    <section className='px-5 py-5 border-2 rounded-xl hover:border-yellow-400'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-xl mt-2'>{description}</p>
      <ul className='list-disc ml-5 mt-2'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Process;

