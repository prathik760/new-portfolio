import React, { useState } from 'react';
import './Skills.css';
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <FaCode />,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js (SSR/SSG)', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Redux / Toolkit', level: 80 },
      { name: 'HTML5 / CSS3', level: 93 },
      { name: 'Figma (UI Design)', level: 75 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <FaServer />,
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 87 },
      { name: 'RESTful APIs', level: 92 },
      { name: 'JWT / OAuth 2.0', level: 82 },
      { name: 'WebSockets', level: 70 },
      { name: 'GraphQL (basics)', level: 58 },
      { name: 'MVC / Microservices', level: 78 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: <FaDatabase />,
    skills: [
      { name: 'MongoDB', level: 87 },
      { name: 'PostgreSQL', level: 76 },
      { name: 'Prisma ORM', level: 76 },
      { name: 'Firebase', level: 70 },
      { name: 'Mongoose', level: 87 },
    ],
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    icon: <FaCloud />,
    skills: [
      { name: 'AWS Amplify / Lambda', level: 72 },
      { name: 'Vercel / Netlify', level: 90 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Git / GitHub / GitFlow', level: 92 },
      { name: 'Docker (basics)', level: 55 },
      { name: 'Linux CLI', level: 72 },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState('frontend');
  const current = categories.find((c) => c.id === active);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Arsenal</span>
          <h1 className="heading-1">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p>
            A comprehensive toolkit built through 1+ year of production experience and
            continuous learning across the full stack.
          </p>
        </div>

        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab ${active === cat.id ? 'active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span className="skills-tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {current.skills.map((skill, i) => (
            <div className="skill-row" key={i}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ '--w': `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
