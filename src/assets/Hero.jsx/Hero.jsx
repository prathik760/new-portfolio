import React, { useState, useEffect } from 'react';
import './Hero.css';
import img from '../img/prathik-optimized.jpg';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaStar, FaRocket } from 'react-icons/fa';

const resumeUrl = import.meta.env.VITE_RESUME_URL || '/Prathik_Thelkar_Resume.pdf';

const roles = [
  'Full Stack Developer',
  'SaaS Founder',
  'React.js Expert',
  'Next.js Developer',
  'Node.js Engineer',
  'AI Integration Specialist',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-orb hero-orb-1" />
      <div className="hero-bg-orb hero-orb-2" />

      <div className="container hero-container">
        {/* ── Left: Text ── */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <br />
            <span className="gradient-text">Prathik Thelkar</span>
          </h1>

          <div className="hero-role">
            <span className="role-text">{displayed}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-desc">
            Results-driven Full Stack Developer &amp; SaaS Founder with 2+ years building production-grade web apps.
            Expert in React.js, Next.js, Node.js &amp; TypeScript. Founded ShareInvite independently — promoted
            Intern → Full-Time in 6 months, recognized as <strong>Star Performer</strong>.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">2+</span>
              <span className="hero-stat-label">Years Exp.</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">20+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">1</span>
              <span className="hero-stat-label">SaaS Founded</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">99.9%</span>
              <span className="hero-stat-label">Uptime SLA</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="projects" smooth={true} duration={500} className="btn primary">
              View My Work
            </Link>
            <a
              href={resumeUrl}
              download="Prathik_Thelkar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/prathikthelkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/prathik760"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="hero-image-side">
          <div className="hero-img-wrapper">
            <div className="hero-img-ring">
              <div className="hero-img-inner">
                <img
                  src={img}
                  alt="Prathik Thelkar"
                  width="360"
                  height="360"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>
            </div>
            <div className="hero-img-glow" />
          </div>

          <div className="float-badge float-top">
            <span className="float-icon"><FaStar /></span>
            <div>
              <p className="float-title">Star Performer</p>
              <p className="float-sub">Promoted in 6 months</p>
            </div>
          </div>

          <div className="float-badge float-bottom">
            <span className="float-icon"><FaRocket /></span>
            <div>
              <p className="float-title">Full Stack Dev</p>
              <p className="float-sub">React · Node · MongoDB</p>
            </div>
          </div>
        </div>
      </div>

      <Link to="about" smooth={true} duration={500} className="scroll-cue">
        <FaArrowDown />
      </Link>
    </section>
  );
};

export default Hero;
