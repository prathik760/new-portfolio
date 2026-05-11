import React from 'react';
import './Services.css';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaRocket, FaBolt } from 'react-icons/fa';

const services = [
  {
    id: '01',
    icon: <FaCode />,
    title: 'Full Stack Web Development',
    desc: 'End-to-end web app development with React.js, Next.js (SSR/SSG), Node.js, and MongoDB. From system design to CI/CD deployment.',
    tags: ['React.js', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    id: '02',
    icon: <FaServer />,
    title: 'REST API Development',
    desc: 'Scalable RESTful APIs with JWT auth, RBAC, rate limiting, schema validation & API versioning. 30+ endpoints built at 99.9% uptime.',
    tags: ['Node.js', 'Express', 'JWT', 'REST'],
  },
  {
    id: '03',
    icon: <FaMobileAlt />,
    title: 'Responsive UI/UX',
    desc: 'Pixel-perfect, WCAG-accessible interfaces from Figma designs. Fully tested across Chrome, Safari, Firefox, iOS & Android.',
    tags: ['React', 'Tailwind CSS', 'Figma', 'A11y'],
  },
  {
    id: '04',
    icon: <FaDatabase />,
    title: 'Database Architecture',
    desc: 'Schema design, aggregation pipelines, query optimization for MongoDB & PostgreSQL. Reduced query times by 25%+ in production.',
    tags: ['MongoDB', 'PostgreSQL', 'Prisma', 'Firebase'],
  },
  {
    id: '05',
    icon: <FaRocket />,
    title: 'Performance & DevOps',
    desc: 'Code splitting, lazy loading, Lighthouse optimization, AWS Amplify & Vercel CI/CD with zero-downtime blue-green deployments.',
    tags: ['Vercel', 'AWS', 'CI/CD', 'Lighthouse'],
  },
  {
    id: '06',
    icon: <FaBolt />,
    title: 'AI Integration',
    desc: 'Integrate AI/ML APIs — NLP chatbots for lead capture, face recognition attendance systems, and intelligent automation workflows.',
    tags: ['AI APIs', 'NLP', 'OpenCV', 'Automation'],
  },
];

const Services = () => (
  <section id="services">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">What I Do</span>
        <h1 className="heading-1">
          Services I <span className="gradient-text">Offer</span>
        </h1>
        <p>
          Specialized in delivering production-ready solutions across the full stack —
          from beautiful UIs to robust backends and smart AI integrations.
        </p>
      </div>

      <div className="services-grid">
        {services.map(({ id, icon, title, desc, tags }) => (
          <div key={id} className="svc-card glass-card">
            <div className="svc-top">
              <div className="svc-icon">{icon}</div>
              <span className="svc-id">{id}</span>
            </div>
            <h3 className="svc-title">{title}</h3>
            <p className="svc-desc muted">{desc}</p>
            <div className="svc-tags">
              {tags.map((t, i) => (
                <span key={i} className="svc-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
