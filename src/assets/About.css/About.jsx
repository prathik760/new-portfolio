import React from 'react'
import '../About.css/About.css'
import amazon from '../../assets/img/logos/amazon.png'
import facebook from '../../assets/img/logos/facebook.png'
import google from '../../assets/img/logos/google.png'
import linkedin from '../../assets/img/logos/linkedin.png'
import microsoft from '../../assets/img/logos/microsoft.png'
import netflix from '../../assets/img/logos/netflix.png'
import samsung from '../../assets/img/logos/samsung.png'
import skpe from '../../assets/img/logos/skype.png'
import whatsapp from '../../assets/img/logos/whatsapp.png'
import paypal from '../../assets/img/logos/paypal.png'
const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='section-wrapper'>
          <h3 className='sub-title primary'>About Me</h3>
          <h1 className='heading-1'>
            I am Prathik <span className='primary'>Thelkar</span>
          </h1>
          <p className='muted'>
          I am a skilled front-end developer with expertise in HTML, CSS, and JavaScript. My experience extends to the React framework, where I build dynamic and responsive web applications. I am passionate about creating user-friendly interfaces that provide seamless user experiences. With a strong foundation in modern web technologies, I am committed to delivering high-quality code and innovative solutions.
          </p>
          <div className='flex-center buttons-wrapper'>
            <a href='#' className='btn primary readmore-btn'>Read More</a>
          </div>
        </div>
      
      <div className='brands-container'>
       <div className='logos-slide gray-scale'>
        <img src={amazon} alt='amazon'></img>
        <img src={facebook} alt='facebook'></img>
        <img src={google} alt='google'></img>
        <img src={linkedin} alt='linkedin'></img>
        <img src={microsoft} alt='microsoft'></img>
        <img src={netflix} alt='netflix'></img>
        <img src={paypal} alt='paypal'></img>
        <img src={samsung} alt='samsung'></img>
        <img src={skpe} alt='skpe'></img>
        <img src={whatsapp} alt='whatsapp'></img>
       </div>

       <div className='logos-slide gray-scale'>
        <img src={amazon} alt='amazon'></img>
        <img src={facebook} alt='facebook'></img>
        <img src={google} alt='google'></img>
        <img src={linkedin} alt='linkedin'></img>
        <img src={microsoft} alt='microsoft'></img>
        <img src={netflix} alt='netflix'></img>
        <img src={paypal} alt='paypal'></img>
        <img src={samsung} alt='samsung'></img>
        <img src={skpe} alt='skpe'></img>
        <img src={whatsapp} alt='whatsapp'></img>
       </div>
       </div>
       <div className='education-experience-container'>
       <div className='column'>
        <h2 className='gradient-text heading-1'>EDUCATION</h2>
        <div className='contents'>
          <div className='box'>
            <h4>2008 - 2018</h4>
            <h3>High School</h3>
            <h4><i>Sri Ramakrishna Vidyanikethan High School</i></h4>
            <p>In high school, I actively participated in extracurricular activities, served on the student council organizing events, excelled academically in challenging subjects like math and science, and took on leadership roles in group projects to foster teamwork.</p>
          </div>

          <div className='box'>
            <h4>2018 - 2020</h4>
            <h3>Pre-University Course</h3>
            <h4><i>Vikasa PU College</i></h4>
            <p>During my Pre-University Course, I deepened my understanding of advanced subjects in sciences and humanities, honed my singing abilities by performing at college events, and led study groups to support my peers in their coursework.</p>
          </div>

          <div className='box'>
            <h4>2020 - 2023</h4>
            <h3>Bachelor of Commerce (Accounting and Finance)</h3>
            <h4><i>Edurite College Of Management Studies </i></h4>
            <p>While pursuing my Bachelor of Commerce in Accounting and Finance, I mastered complex financial concepts, nurtured my passion for singing through university performances, and led project work by guiding peers in financial analyses and collaborative presentations.</p>
          </div>
        </div>
       </div>
       
       <div className='column'>
  <h2 className='gradient-text heading-1'>EXPERIENCE</h2>
  <div className='contents'>

    <div className='box'>
      <h4>Dec 2024 – Present</h4>
      <h3>Frontend Developer</h3>
      <h4><i>Code Nimbus Solutions</i></h4>
      <p>
        Developed scalable and reusable React components using Hooks and Context API for 
            <a href="https://invitationnation.in/" target="_blank" rel="noopener noreferrer"> Invitation Nation </a>, an event invitation platform. 
        Led architectural decisions for component design, implemented dynamic REST API integration for real-time, multi-user template editing, and improved routing performance using React Router, lazy loading, and code splitting. 
        Mentored interns, conducted code reviews, and enforced clean code practices for scalable frontend development.
      </p>
    </div>

    <div className='box'>
      <h4>Aug 2024 – Oct 2024</h4>
      <h3>Frontend Developer Intern</h3>
      <h4><i>Parkqwik Pvt. Ltd.</i></h4>
      <p>
        Built UI components for a mobile-first cross-platform app using React Native and Expo. 
        Integrated Firebase Authentication and real-time database updates to manage user data. 
        Translated Figma designs into responsive, interactive interfaces and collaborated with developers through Agile workflows and continuous deployment on Netlify.
      </p>
    </div>

    <div className='box'>
      <h4>Mar 2024 – May 2024</h4>
      <h3>Full Stack Web Developer Intern</h3>
      <h4><i>Kodnest</i></h4>
      <p>
        Contributed to both frontend and backend development of educational web platforms. 
        Designed responsive UI components in React and implemented backend APIs using Node.js and Express. 
        Worked with MongoDB for data storage and authentication systems, while actively collaborating in Agile sprints to deliver scalable features. 
        Gained practical experience deploying full stack applications and integrating RESTful services.
      </p>
    </div>

  </div>
</div>
</div>
      </div>
    </section>

     
 
  )
}

export default About