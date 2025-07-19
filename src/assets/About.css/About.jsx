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
          A professional Full-Stack Web Developer skilled in both frontend and backend development, dedicated to crafting seamless and engaging digital experiences. I blend creativity with strategic thinking to build solutions that are both user-centric and technically robust. With a calm, focused mindset and a proactive approach, I thrive on solving complex challenges with precision, innovation, and clean code.
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
    <h4>2020 - 2023</h4>
    <h3>Bachelor of Commerce (Accounting and Finance)</h3>
    <h4><i>Edurite College Of Management Studies</i></h4>
    <ul>
      <li>Mastered core financial and accounting principles with academic excellence.</li>
      <li>Led group projects, guiding peers in financial analysis and collaborative presentations.</li>
      <li>Actively participated in drama and music, performing at college-level events and competitions.</li>
      <li>Represented the college in sports including badminton and cricket, promoting teamwork and discipline.</li>
      <li>Enhanced leadership, creativity, and collaboration through academic and extracurricular involvement.</li>
    </ul>
  </div>

  <div className='box'>
    <h4>2018 - 2020</h4>
    <h3>Pre-University Course</h3>
    <h4><i>Vikasa PU College</i></h4>
    <ul>
      <li>Built a strong foundation in science and humanities through advanced coursework.</li>
      <li>Performed as a singer at college events, enhancing public speaking and stage presence.</li>
      <li>Led study groups to support peers, fostering teamwork and academic collaboration.</li>
    </ul>
  </div>

  <div className='box'>
    <h4>2008 - 2018</h4>
    <h3>High School</h3>
    <h4><i>Sri Ramakrishna Vidyanikethan High School</i></h4>
    <ul>
      <li>Excelled academically in core subjects like Mathematics and Science.</li>
      <li>Actively participated in extracurricular activities and student council initiatives.</li>
      <li>Took on leadership roles in group projects, encouraging team-based problem-solving.</li>
    </ul>
  </div>
</div>

       </div>
       
      <div className='column'>
  <h2 className='gradient-text heading-1'>EXPERIENCE</h2>
  <div className='contents'>

    <div className='box'>
      <h4>Dec 2024 – June 2025</h4>
      <h3>Software Developer</h3>
      <h4><i>Code Nimbus Solutions, Bengaluru</i></h4>
      <ul>
        <li>Led bug resolution across core modules, improving platform stability by 40%.</li>
        <li>Integrated REST APIs covering 80% of the platform functionality using React Query and Axios.</li>
        <li>Designed and developed a dynamic template system for the invitation module, accelerating customization workflows.</li>
        <li>Built scalable, reusable React components using Hooks and Context API for <a href="https://invitationnation.in/" target="_blank" rel="noopener noreferrer">Invitation Nation</a>.</li>
        <li>Improved routing performance with lazy loading and code splitting using React Router.</li>
        <li>Mentored 3 interns on full-stack development best practices, enhancing code quality and delivery timelines.</li>
        <li>Conducted regular code reviews and enforced clean code practices across the frontend team.</li>
      </ul>
    </div>

    <div className='box'>
      <h4>Aug 2024 – Oct 2024</h4>
      <h3>Frontend Developer Intern</h3>
      <h4><i>Parkqwik Pvt. Ltd., Bengaluru</i></h4>
      <ul>
        <li>Built UI components for a mobile-first, cross-platform app using React Native and Expo.</li>
        <li>Integrated Firebase Authentication and real-time database updates for user data management.</li>
        <li>Translated Figma designs into responsive, interactive UIs with optimized state handling.</li>
        <li>Collaborated with developers in Agile workflows and deployed features via Netlify.</li>
      </ul>
    </div>

    {/* <div className='box'>
      <h4>Mar 2024 – May 2024</h4>
      <h3>Full Stack Web Developer Intern</h3>
      <h4><i>Kodnest</i></h4>
      <ul>
        <li>Built responsive frontend components using React for educational web platforms.</li>
        <li>Developed backend APIs with Node.js and Express, integrating them with MongoDB.</li>
        <li>Worked on user authentication systems and RESTful API services.</li>
        <li>Participated in Agile sprints to deliver scalable, production-ready features.</li>
      </ul>
    </div> */}

    <div className='box'>
      <h4>Certified</h4>
      <h3>Java Full Stack Developer</h3>
      <h4><i>Kodnest</i></h4>
      <ul>
        <li>Completed certification in Java Full Stack Development covering Java, Spring Boot, React, MySQL, and REST APIs.</li>
        <li>Applied full-stack concepts to build real-world projects with end-to-end architecture and deployment.</li>
      </ul>
    </div>

  </div>
</div>

   </div>
   </div>
    </section>

     
 
  )
}

export default About