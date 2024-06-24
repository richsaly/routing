import React from 'react';
import Process from './Process';

const Parent = () => {
  const processes = [
    {
      title: 'Concept',
      description: 'It must all start with an idea',
      items: [
        'Reviewing any existing / model brand',
        'Target audience and competitors research',
        'Developing strategy and sketching',
      ],
    },
    {
      title: 'Design',
      description: 'Transforming ideas into visual designs',
      items: [
        'Creating wireframes and mockups',
        'Choosing color schemes and typography',
        'Designing UI components and layouts',
      ],
    },
    {
      title: 'Development',
      description: 'Building and coding the final product',
      items: [
        'Writing clean and maintainable code',
        'Integrating with APIs and backend services',
        'Testing and debugging',
      ],
    },
  ];

  return (
    <div className='space-x-7 flex mt-10'>
      {processes.map((process, index) => (
        <Process
          key={index}
          title={process.title}
          description={process.description}
          items={process.items}
        />
      ))}
    </div>
  );
};

export default Parent;
