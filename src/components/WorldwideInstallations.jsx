import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import Image from 'next/image'; 
//import worldMap from '../../public/images/world-map.png'; 

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end, 10);
    if (start === endValue) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / endValue) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
};

const WorldwideInstallations = ({ data }) => {
  return (
    <>
    <div className='installations-section'>
    <h5 className='section-heading'>Our 300+ Installations</h5>
    <h4 className='section-sub-heading'>Worldwide</h4>
      
      <Row className='world-installation'>
        {data.map((item, index) => (
          <div key={index} className="installation-count">
            <h2 ><CountUp end={item.number} duration={2} /></h2>
            <p>{item.country}</p>
          </div>
        ))}
         
      </Row>
     
      </div>
    </>
  );
};

export default WorldwideInstallations;
