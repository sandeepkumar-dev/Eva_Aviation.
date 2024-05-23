// AcademyHome.jsx

import React from 'react';
import {useState, useEffect} from 'react';
// import broucher from '../images/Eva-Aviation.jpg';

const AcademyHome = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Show the popup when the component mounts (page reload)
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto URL
    const mailtoLink = `mailto:evaaviationacademy@gmail.com?subject=Enquiry Form Submission&body=${encodeURIComponent(
      `Name: ${formData.name} \nMobile: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    handleClose();
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to Eva Aviation Academy</h1>
        <p>Your pathway to the skies!</p>
        {/* <img src={broucher} alt="" /> */}
      </header>
      {/*  */}

      <div className="App">
        {showPopup && (
          <div id="popup" className="popup">
            <div className="popup-content">
              <h2>Enquiry Form</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <label>Mobile :</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClose}>
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/*  */}
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
        <section className="qualifiction">
          <h2>Become a Pilot</h2>
          <strong>Qualification: </strong>
          <ul>
            <li>
              10+2 with Physics & Mathematics (CBSE/ICSE/STATE BOARD/*NIOS)
            </li>
            <li>10th, 10+2 Marksheets & Certificates Verifications </li>
            <li>
              <strong>Medical: </strong> Class ll & Class l
            </li>
            <li>
              <strong>Police Verification: </strong>Passport Issued Within 6
              Months Police Verication Not Required
            </li>
            <li>DGCA Computer Number</li>
            <li>
              <strong>Age: </strong>18 + Years
            </li>
          </ul>
          <strong>Ground Class Subjects:</strong>
          <ul>
            <li>Aviation Metrology</li>
            <li>Air Regulation</li>
            <li>Air Navigation</li>
            <li>Technical General</li>
            <li>RTR (A)</li>
            <li>
              Aircraft Specification (Single Engine, Multi Engine Aircraft)
            </li>
          </ul>
          <strong>200hrs Flying:</strong>
          <ul>
            <li>Single Engine</li>
            <li>Single Engine & Mutli Engine</li>
          </ul>
          <strong>Course Duration:</strong>
          <ul>
            <li>18 Months to 2 Years</li>
          </ul>
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
