import React from 'react';
import '../Feedback/Feedback.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import user1 from '../../assets/img/user-1.jpeg';
import user2 from '../../assets/img/user-2.jpeg';
import user3 from '../../assets/img/user-3.jpeg';

const Feedback = () => {
  const settings = {
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='feedbacks'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1 gradient-text'>Feedback</h1>
          <p className='muted'>
            Here's what professionals and mentors have said about my work — from scalable React architecture to hands-on frontend execution.
          </p>
        </div>

        <Slider {...settings} className='feedbacks-container'>

          {/* Feedback 1 */}
          <div className='feed-block'>
            <div className='profile'>
              <img src={user1} alt='User 1' />
            </div>
            <div className='details'>
              <p className='muted'>
                Working with them on a scalable React project was seamless. Their attention to reusability and clean architecture made onboarding easy and collaboration productive. The component logic was thoughtfully structured and future-proof.
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h2 className='name'>Karthik Reddy</h2>
              <p className='muted'>Senior React Engineer, CodeNimbus</p>
            </div>
          </div>

          {/* Feedback 2 */}
          <div className='feed-block'>
            <div className='profile'>
              <img src={user2} alt='User 2' />
            </div>
            <div className='details'>
              <p className='muted'>
                Their understanding of full-stack concepts was evident in every sprint. They handled both client-side and backend integration with REST APIs smoothly and demonstrated solid debugging and deployment skills throughout.
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h2 className='name'>Sonal Jain</h2>
              <p className='muted'>Tech Lead, Kodnest</p>
            </div>
          </div>

          {/* Feedback 3 */}
          <div className='feed-block'>
            <div className='profile'>
              <img src={user3} alt='User 3' />
            </div>
            <div className='details'>
              <p className='muted'>
                From implementing responsive UI with React Native to mentoring junior interns on modular CSS practices, their contribution was impactful and set a high standard for frontend development in our team.
              </p>
            </div>
            <div className='bottom'>
              <div className='flex-center stars-container'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h2 className='name'>Ravi Mishra</h2>
              <p className='muted'>Engineering Manager, Parkqwik Pvt. Ltd.</p>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default Feedback;
