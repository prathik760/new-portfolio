import React from 'react';
import './Experience.css';
import { FaBriefcase, FaGraduationCap, FaRocket, FaExternalLinkAlt } from 'react-icons/fa';

const founderEntry = {
  type: 'founder',
  role: 'Founder & Full Stack Developer',
  company: 'ShareInvite',
  link: 'https://shareinvite.in',
  period: 'May 2026 – Present',
  location: 'Remote',
  current: true,
  about: 'ShareInvite is a SaaS platform that lets users instantly create and share beautiful digital invitation websites — for weddings, birthdays, corporate events, and more. Users pick a template, personalise it, and share a live link — no design skills needed. Built with real-time RSVP updates via WebSockets and Redis-backed session management for low-latency performance.',
  highlights: [
    'Founded and independently built the platform end-to-end — architecture, payment integration, automated onboarding, hosting, SEO, and domain configuration — and continue driving performance optimisation and product iteration.',
    'Implemented real-time RSVP tracking with WebSockets and Redis pub/sub, enabling instant guest-response updates without page refresh.',
    'Integrated payment gateway for subscription billing and automated onboarding flows, reducing time-to-live for new users to under 2 minutes.',
  ],
  tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'WebSockets', 'Vercel', 'Payments', 'SEO'],
};

const experiences = [
  {
    type: 'work',
    role: 'Full Stack Developer',
    company: 'AOW Information Technology',
    period: 'Oct 2025 – Present',
    location: 'Bengaluru',
    current: true,
    highlights: [
      'Architected AI-powered B2B lead generation platform — improved SEO by 35%, cut page load by 30%, scaled to 500+ concurrent users',
      'Engineered NLP-based chatbot cutting manual follow-up effort by 60% and qualifying 3x more leads per day',
      'Built configurable email automation engine boosting client sales conversions by 40% within 3 months',
      'Developed multi-tenant admin dashboard with RBAC, JWT auth & real-time analytics at 99.9% uptime across 30+ endpoints',
      'Established AWS Amplify + Vercel CI/CD with zero-downtime blue-green deployments; reduced PR conflicts by 45%',
    ],
    tags: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'AWS', 'TypeScript', 'JWT'],
  },
  {
    type: 'work',
    role: 'Software Developer',
    company: 'Code Nimbus Solutions',
    period: 'Dec 2024 – Jun 2025',
    location: 'Bengaluru',
    current: false,
    highlights: [
      'Built React.js + TypeScript reusable component library — reduced code duplication by 30% across 4 concurrent projects',
      'Integrated Razorpay payment gateway handling secure transactions for 1,000+ daily active users',
      'Optimized 20+ REST APIs with custom hooks and caching — improved fetch performance by 40%, DB queries by 25%',
      'Awarded Star Performer for 95%+ code review approval rate and consistent on-time sprint delivery',
    ],
    tags: ['React.js', 'TypeScript', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Razorpay'],
  },
  {
    type: 'work',
    role: 'Frontend Developer Intern',
    company: 'Parkqwik Pvt. Ltd.',
    period: 'Jul 2024 – Dec 2024',
    location: 'Bengaluru',
    current: false,
    highlights: [
      'Translated 50+ Figma designs into pixel-perfect, WCAG-accessible React.js screens across all browsers and devices',
      'Configured Netlify CI/CD pipelines — reduced deployment errors to zero and release effort by 50%',
      'Optimized bundle via lazy loading and code splitting for 20% Lighthouse score gain',
    ],
    tags: ['React.js', 'Figma', 'Netlify', 'CI/CD', 'CSS3', 'Responsive Design'],
  },
];

const education = [
  {
    type: 'education',
    role: 'Java Full Stack Development',
    company: 'Kodnest Institute, Bengaluru',
    period: '2023 – 2024',
    location: '',
    current: false,
    highlights: [
      'Intensive full-stack certification: Java, Spring Boot, React.js, MySQL, REST APIs',
      'Built and deployed real-world capstone projects with end-to-end architecture',
    ],
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
  },
  {
    type: 'education',
    role: 'Bachelor of Commerce',
    company: 'Kuvempu University',
    period: '2020 – 2023',
    location: '',
    current: false,
    highlights: [
      'Graduated in Accounting & Finance with strong analytical and problem-solving foundation',
      'Developed leadership and collaboration skills through academic projects and activities',
    ],
    tags: ['Finance', 'Analytics', 'Leadership'],
  },
];

const FounderCard = ({ item }) => (
  <div className="founder-card glass-card">
    <div className="founder-icon-wrap">
      <FaRocket />
    </div>
    <div className="founder-card-body">
      <div className="founder-header">
        <div>
          <span className="exp-period">{item.period}</span>
          <h3 className="exp-role">{item.role}</h3>
          <span className="exp-company">{item.company} · {item.location}</span>
        </div>
        <div className="founder-header-right">
          <span className="founder-badge">Founder</span>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="founder-link-btn"
            >
              <FaExternalLinkAlt /> {item.link.replace('https://', '')}
            </a>
          )}
        </div>
      </div>
      {item.about && <p className="founder-about">{item.about}</p>}
      <ul className="exp-list">
        {item.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="exp-tags">
        {item.tags.map((t, i) => (
          <span key={i} className="exp-tag founder-exp-tag">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

const TimelineCard = ({ item }) => (
  <div className={`exp-card ${item.current ? 'exp-card--current' : ''}`}>
    <div className="exp-dot">
      {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
    </div>
    <div className="exp-body glass-card">
      <div className="exp-header">
        <div className="exp-meta">
          <span className="exp-period">{item.period}</span>
          <h3 className="exp-role">{item.role}</h3>
          <span className="exp-company">
            {item.company}{item.location ? ` · ${item.location}` : ''}
          </span>
        </div>
        {item.current && <span className="exp-current-badge">Current</span>}
      </div>
      <ul className="exp-list">
        {item.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="exp-tags">
        {item.tags.map((t, i) => (
          <span key={i} className="exp-tag">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => (
  <section id="experience">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">My Journey</span>
        <h1 className="heading-1">
          Experience &amp; <span className="gradient-text">Education</span>
        </h1>
        <p>A track record of delivering measurable results across companies, products, and teams.</p>
      </div>

      <div className="founder-section">
        <h3 className="exp-col-heading">
          <FaRocket className="exp-col-icon founder-icon-color" /> Entrepreneurial Experience
        </h3>
        <FounderCard item={founderEntry} />
      </div>

      <div className="exp-grid">
        <div className="exp-col">
          <h3 className="exp-col-heading">
            <FaBriefcase className="exp-col-icon" /> Work Experience
          </h3>
          <div className="exp-timeline">
            {experiences.map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="exp-col">
          <h3 className="exp-col-heading">
            <FaGraduationCap className="exp-col-icon" /> Education
          </h3>
          <div className="exp-timeline">
            {education.map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
