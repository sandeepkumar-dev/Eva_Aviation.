// AcademyHome.jsx

import React from 'react';
import broucher from '../images/Eva-Aviation.jpg';

const AcademyHome = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Eva Aviation Academy</h1>
        <p>Your pathway to the skies!</p>
        <img src={broucher} alt="" />
      </header>
      <main>
        <section className="about">
          <h2>About Us</h2>
          <p>
            Eva Aviation Academy is a premier institution dedicated to providing
            world-class aviation education and training. With state-of-the-art
            facilities and experienced instructors, we prepare aspiring aviation
            professionals for successful careers in the aerospace industry.
          </p>
          <p>
            Our comprehensive programs cover a range of disciplines including
            pilot training, aircraft maintenance, air traffic control, and
            flight attendant courses. We pride ourselves on offering hands-on
            training, simulation exercises, and real-world experiences to ensure
            our students are well-equipped with the skills and knowledge needed
            in today's dynamic aviation sector.
          </p>
          <p>
            At Eva Aviation Academy, we are committed to excellence, safety, and
            innovation. Join us on your journey to soaring new heights in
            aviation!
          </p>
        </section>
        <section className="courses">
          <h2>Our Courses</h2>
          <ul>
            <li>Private Pilot Licence (PPL)</li>
            <li>Commercial Pilot Licence (CPL)</li>
            <li>Airlines Transport Pilot Licence (ATPL)</li>
            <li>PreType Rating B737/A320/ATR72-600</li>
            <li>Post Type Rating B737/A320/ATR72-600</li>
            <li>Type Rating B737/A320/ATR72-600</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Email: evaaviationacademy@gmail.com</p>
          <p>Mobile no: +91 7982316437</p>
          <p>Phone: 011-35886195</p>
        </section>
      </main>
    </div>
  );
};

export default AcademyHome;
