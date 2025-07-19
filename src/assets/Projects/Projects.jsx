import React from "react";
import "../Projects/Projects.css";
import project3 from "../../assets/img/AI-attendance.png";
import carproject from "../../assets/img/car rental.png";
import todo from "../../assets/img/todolist.png";
import invitation from "../../assets/img/invitationnation.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">Projects</span>
          </h1>
        </div>
        <div className="projects-container">
          {/* start */}
          <div className="flex project">
            <div className="picture">
              <img src={invitation} alt="Project management dashboard design" />
            </div>
            <div className="details">
              <h3 className="name">
                Dashboard Development – Invitation Nation
              </h3>
              <p className="muted">
                Developed a responsive admin dashboard using React to manage
                user events, invitations, and analytics. Focused on creating an
                intuitive interface for real-time data handling and seamless
                user experience.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a
                href="https://invitationnation.in/"
                className="btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className="flex project">
            <div className="picture">
              <img src={carproject} alt="Files storage cloud app" />
            </div>
            <div className="details">
              <h3 className="name">Car Rental System</h3>
              <p className="muted">
                A full-stack web application that allows users to browse, book,
                and manage car rentals. Features include real-time car
                availability, booking history, secure authentication, and
                role-based dashboards for customers and admins. Built with
                React, Node.js, Express, and MongoDB.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a
                href="https://car-rental-project-qx5i.vercel.app/"
                className="btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className="flex project">
            <div className="picture">
              <img src={todo} alt="Online payment dashboard" />
            </div>
            <div className="details">
              <h3 className="name">Task Management App</h3>
              <p className="muted">
                A dynamic and user-friendly task management app built with React
                and Redux. Users can add, edit, delete, and mark tasks as
                complete. State management is handled globally using Redux for
                scalable performance. The app also supports local storage for
                data persistence and features a clean, responsive UI.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a
                href="https://to-do-app-lfov.vercel.app/"
                className="btn primary"
              >
                Demo
              </a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className="flex project">
            <div className="picture">
              <img src={project3} alt="Project management dashboard design" />
            </div>
            <div className="details">
              <h3 className="name">AI Attendance</h3>
              <p className="muted">
                Built a real-time student attendance system using AI and face
                recognition with OpenCV. I led the API integration, developing
                RESTful APIs to securely send attendance data to the backend,
                enabling accurate and automated recordkeeping.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              {/* <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a> */}
              <a
                href="inprogress"
                className="btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
