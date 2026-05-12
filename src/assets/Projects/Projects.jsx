import React, { useState } from 'react';
import './Projects.css';
import carproject from '../img/car rental.png';
import todo from '../img/todolist.png';
import invitation from '../img/invitation.png';
import attendance from '../img/AI-attendance.png';
import b2bProject from '../img/project-1.png';
import retailBillBook from '../img/retail-bill-book.png';
import { FaExternalLinkAlt, FaStar, FaWrench, FaLock } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI-Powered B2B Lead Generation Platform',
    desc: 'Full-stack SaaS platform with NLP chatbot, email automation engine & real-time analytics dashboard. Improved SEO by 35%, cut page load by 30%, scaled to 500+ concurrent users. Email engine boosted client conversions by 40% in 3 months.',
    image: b2bProject,
    tags: ['React.js', 'Next.js SSR', 'Node.js', 'MongoDB', 'AWS Amplify', 'TypeScript', 'AI APIs'],
    category: 'fullstack',
    demo: null,
    status: 'Live',
    featured: true,
    metrics: ['35% SEO boost', '500+ users', '40% more conversions'],
  },
  {
    id: 2,
    title: 'Retail Bill Book SaaS',
    desc: 'Multi-tenant invoicing SaaS with PDF export, Razorpay billing, GST auto-calculation, RBAC, real-time inventory tracking, and analytics dashboard targeting the SMB market.',
    image: retailBillBook,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'Prisma ORM', 'JWT', 'PDF Gen'],
    category: 'fullstack',
    demo: null,
    status: 'Live',
    featured: false,
    metrics: [],
  },
  {
    id: 3,
    title: 'Invitation Nation SaaS',
    desc: 'Live SaaS serving 10,000+ active users with 99.9% uptime SLA. Contributed reusable components, REST API integrations, dynamic template system and performance optimizations.',
    image: invitation,
    tags: ['React.js', 'Node.js', 'REST APIs', 'Context API', 'React Router'],
    category: 'fullstack',
    demo: 'https://invitationnation.in/',
    status: 'Live',
    featured: false,
    metrics: ['10,000+ users', '99.9% uptime'],
  },
  {
    id: 4,
    title: 'Car Rental Management System',
    desc: 'Full-stack booking platform with real-time fleet availability engine, booking lifecycle management, automated email alerts, and a full admin panel for fleet operations.',
    image: carproject,
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'REST APIs', 'Email Alerts'],
    category: 'fullstack',
    demo: 'https://car-rental-project-qx5i.vercel.app/',
    status: 'Live',
    featured: false,
    metrics: [],
  },
  {
    id: 5,
    title: 'AI Attendance System',
    desc: 'Real-time student attendance using face recognition (OpenCV). Led REST API integration to securely record and transmit attendance data. Eliminates manual roll-call entirely.',
    image: attendance,
    tags: ['Python', 'OpenCV', 'REST APIs', 'Face Recognition', 'Node.js'],
    category: 'ai',
    demo: null,
    status: 'In Progress',
    featured: false,
    metrics: [],
  },
  {
    id: 6,
    title: 'Task Management App',
    desc: 'Dynamic task manager with React & Redux — add, edit, delete, complete tasks. Global state management, local storage persistence, and a clean responsive UI.',
    image: todo,
    tags: ['React.js', 'Redux', 'Local Storage', 'Responsive Design'],
    category: 'frontend',
    demo: 'https://to-do-app-lfov.vercel.app/',
    status: 'Live',
    featured: false,
    metrics: [],
  },
];

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'AI', value: 'ai' },
  { label: 'Frontend', value: 'frontend' },
];

const Projects = () => {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h1 className="heading-1">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p>
            Production-grade applications built with real business impact — scalable
            architecture, clean code, and measurable results.
          </p>
        </div>

        <div className="proj-filters">
          {filterOptions.map((f) => (
            <button
              key={f.value}
              className={`proj-filter-btn ${active === f.value ? 'active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map((p) => (
            <div key={p.id} className={`proj-card glass-card ${p.featured ? 'proj-card--featured' : ''}`}>
              <div className="proj-img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="proj-img-overlay">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-cta"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
                <span className={`proj-status ${p.status === 'Live' ? 'status-live' : 'status-wip'}`}>
                  {p.status}
                </span>
                {p.featured && (
                  <span className="proj-featured-badge"><FaStar /> Featured</span>
                )}
              </div>

              <div className="proj-info">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc muted">{p.desc}</p>

                {p.metrics.length > 0 && (
                  <div className="proj-metrics">
                    {p.metrics.map((m, i) => (
                      <span key={i} className="proj-metric">{m}</span>
                    ))}
                  </div>
                )}

                <div className="proj-tags">
                  {p.tags.map((t, i) => (
                    <span key={i} className="proj-tag">{t}</span>
                  ))}
                </div>

                <div className="proj-actions">
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn primary proj-btn"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <span className="proj-btn-placeholder">
                      {p.status === 'In Progress' ? <><FaWrench /> In Progress</> : <><FaLock /> Private / NDA</>}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
