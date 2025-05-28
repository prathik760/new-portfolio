import React from 'react';
 
import '../Projects/Projects.css';
import project1 from '../../assets/img/invitationnation.svg';
import project2 from '../../assets/img/invitationnation2.png';
import project3 from '../../assets/img/AI-attendance.png';
import project4 from '../../assets/img/baby.png';
 
const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className='gradient-text'>Projects</span>
          </h1>
        </div>
        <div className='projects-container'>
          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project1} alt='Project management dashboard design' />
            </div>
            <div className='details'>
              <h3 className='name'>Dashboard Development – Invitation Nation</h3>
              <p className='muted'>
              Developed a responsive admin dashboard using React to manage user events, invitations, and analytics. Focused on creating an intuitive interface for real-time data handling and seamless user experience.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a href='https://invitationnation.in/' className='btn primary' target="_blank" rel="noopener noreferrer">
  Demo
</a>

            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project2} alt='Files storage cloud app' />
            </div>
            <div className='details'>
              <h3 className='name'>Template API Integration – Invitation Nation</h3>
              <p className='muted'>
              Integrated dynamic invitation templates via RESTful APIs, enabling users to preview, customize, and deploy templates directly from the dashboard. Ensured smooth backend connectivity and efficient data binding.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a href='https://invitationnation.in/' className='btn primary' target="_blank" rel="noopener noreferrer">
  Demo
</a>

            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project3} alt='Online payment dashboard' />
            </div>
            <div className='details'>
              <h3 className='name'>AI Attendance – Native API Integration</h3>
              <p className='muted'>
              Implemented AI-based attendance tracking by integrating APIs using native JavaScript, enabling real-time check-ins and attendance data processing without relying on external libraries or frameworks.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project4} alt='Project management dashboard design' />
            </div>
            <div className='details'>
              <h3 className='name'>Invitation Nation – Template Development</h3>
              <p className='muted'>
              Developed dynamic and reusable templates using React.js for the Invitation Nation platform, enhancing user customization and improving front-end flexibility for event invitations.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a href='https://invitationnation.in/' className='btn primary' target="_blank" rel="noopener noreferrer">
  Demo
</a>

            </div>
          </div>
          {/* end */}

        </div>
      </div>
    </section>
  );
}

export default Projects;
