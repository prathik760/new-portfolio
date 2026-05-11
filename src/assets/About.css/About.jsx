import React from 'react';
import './About.css';
import { FaChartLine, FaTrophy, FaLayerGroup } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaChartLine />,
    title: 'Impact-Driven Results',
    desc: 'Delivered 35% SEO boost, 60% effort reduction, 40% conversion lift — measurable business outcomes on every project.',
  },
  {
    icon: <FaTrophy />,
    title: 'Fast Riser',
    desc: 'Promoted Intern → Full-Time in 6 months. Star Performer with 95%+ code review approval rate across 2 companies.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Full Stack Expert',
    desc: 'End-to-end development — system design, REST APIs, CI/CD, AWS, and scalable React/Node architectures.',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h1 className="heading-1">
            Crafting <span className="gradient-text">digital experiences</span>
            <br />that make an impact
          </h1>
          <p>
            A passionate Full Stack Developer dedicated to building production-grade applications
            with clean code, scalable architecture, and measurable business results.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-card glass-card">
              <span className="highlight-icon">{h.icon}</span>
              <div>
                <h4 className="highlight-title">{h.title}</h4>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
