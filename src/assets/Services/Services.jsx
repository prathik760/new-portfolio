import React from 'react';
import '../Services/Services.css';

const services = [
  {
    id: 1,
    title: 'Research and Analysis',
    description:
      'Systematic investigation and innovation to develop new solutions or improve existing products—driving progress and competitive advantage.',
  },
  {
    id: 2,
    title: 'Wireframe',
    description:
      'A structural blueprint that outlines a webpage or app layout before design, helping developers and designers collaborate effectively.',
  },
  {
    id: 3,
    title: 'Visual Design',
    description:
      'Enhancing user experience by using colors, layout, and typography to create visually appealing and functional user interfaces.',
  },
  {
    id: 4,
    title: 'Interaction Design',
    description:
      'Designing intuitive user flows and behaviors to ensure users can interact seamlessly and effectively with your product.',
  },
  {
    id: 5,
    title: 'UI Development',
    description:
      'Transforming design into responsive, interactive interfaces using modern tools like React, ensuring performance and accessibility.',
  },
  {
    id: 6,
    title: 'Usability Testing',
    description:
      'Evaluating how real users interact with your app to identify usability issues, improve UX, and validate design decisions.',
  },
];

const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className='gradient-text'>My Services</span>
          </h1>
          <p className='muted'>
            I specialize in building modern, intuitive, and responsive web and mobile apps using technologies like React.js and React Native, ensuring a seamless experience across platforms.
          </p>
        </div>

        <div className='services-grid'>
          {services.map(({ id, title, description }) => (
            <div className='service-card' key={id}>
              <div className='card-top'>
                <div className='service-id'>{id}.</div>
                <h2 className='service-title'>{title}</h2>
              </div>
              <div className='card-body'>
                <p className='muted'>{description}</p>
              </div>
               
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
