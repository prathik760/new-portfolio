import React, { useState,useEffect} from 'react'
import '../facts/Facts.css'
import Odometer from 'react-odometerjs';

const Facts = () => {
  const [customers,setcustomer] = useState(0);
  const [experience, setexperience] = useState(0);
  const [projects,setprojects] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() =>{
          setcustomer(10);
          setexperience(1);
          setprojects(20);
    }  , 500);
    return () => {
        clearTimeout(timeoutId);
    };
}, []);
  return (
    <div className='facts-container'>
       {/* {fact start } */}
      <div className='fact'>
       <div className='flex-center top'>
       <Odometer value={customers} className='title'  />
       <h1 className='title'> + </h1>
       </div>
       <p className='muted'>Happy customers</p>
      </div>
      {/* {fact end} */}
       
       {/* {fact start } */}
      <div className='fact'>
       <div className='flex-center top'>
       <Odometer value={experience} className='title'  />
       <h1 className='title'> + </h1>
       </div>
       <p className='muted'>Years Experience</p>
      </div>
      {/* {fact end} */}

      {/* {fact start } */}
      <div className='fact'>
       <div className='flex-center top'>
       <Odometer value={projects} className='title'  />
       <h1 className='title'> + </h1>
       </div>
       <p className='muted'>Completed projects</p>
      </div>
      {/* {fact end} */}

    </div>
  )
}

export default Facts