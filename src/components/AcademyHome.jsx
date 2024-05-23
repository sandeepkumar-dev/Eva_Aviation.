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

  // For registerd form
  const [registerFormData, setRegisterFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    selectedCourse: '',
    twelfthMarks: '',
  });

  const handleChanges = (e) => {
    const {name, value} = e.target;
    setRegisterFormData({...registerFormData, [name]: value});
  };

  const handleSubmits = (e) => {
    e.preventDefault();

    // Map form data to different parameter names for email body
    const mappedData = {
      'Full Name': registerFormData.fullName,
      'Email Address': registerFormData.emailAddress,
      'Phone Number': registerFormData.phoneNumber,
      'Selected Course': registerFormData.selectedCourse,
      '12th Marks Scored': registerFormData.twelfthMarks,
    };

    // Construct the mailto URL
    const mailtoLink = `mailto:evaaviationacademy@gmail.com?subject=Register Now Form Submission&body=${encodeURIComponent(
      Object.entries(mappedData)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')
    )}`;

    // Open the mailto link
    window.location.href = mailtoLink;
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
      </main>
      <div className="Apps">
        <h1>Register Now</h1>
        <form onSubmit={handleSubmits} className="register-form">
          <div>
            <label htmlFor="fullName"></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={registerFormData.fullName}
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="emailAddress"></label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="Enter your email address"
              value={registerFormData.emailAddress}
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber"></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={registerFormData.phoneNumber}
              onChange={handleChanges}
              required
            />
          </div>
          <div>
            <label htmlFor="selectedCourse"></label>
            <select
              id="selectedCourse"
              name="selectedCourse"
              value={registerFormData.selectedCourse}
              onChange={handleChanges}
              required
            >
              <option value="" disabled>
                Select a course
              </option>
              <option value="Course 1">Private Pilot Licence</option>
              <option value="Course 2">Commercial Pilot Licence</option>
              <option value="Course 3">Airlines Transport Pilot Licence</option>
              <option value="Course 4">Type Rating</option>
            </select>
          </div>
          <div>
            <label htmlFor="twelfthMarks"></label>
            <input
              type="number"
              id="twelfthMarks"
              name="twelfthMarks"
              placeholder="Enter your 12th marks in %"
              value={registerFormData.twelfthMarks}
              onChange={handleChanges}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AcademyHome;
