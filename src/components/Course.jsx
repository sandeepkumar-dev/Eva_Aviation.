/* eslint-disable */
import {useNavigate} from 'react-router-dom';

const Course = () => {
  const navigate = useNavigate();
  return (
    <div className="course-body">
      <h1>Aviation Pilot Courses</h1>

      {/* Private Pilot License (PPL) Course  */}
      <div className="course-container">
        <h2>
          {' '}
          <a
            onClick={() => {
              navigate('/ppl-course');
            }}
          >
            Private Pilot License (PPL) Course
          </a>
        </h2>
        <p>
          The Private Pilot License (PPL) course is designed for individuals who
          want to obtain a pilot's license for recreational or non-commercial
          flying purposes.
        </p>
        <h3>Course Overview</h3>
        <ul>
          <li>Duration: Several months</li>
          <li>
            Curriculum: Ground school training, flight training, cross-country
            navigation, emergency procedures, etc.
          </li>
          <li>
            Requirements: Minimum age of 17, valid medical certificate, passing
            written and practical exams, etc.
          </li>
        </ul>
      </div>

      {/* Commercial Pilot License (CPL) Course */}
      <div className="course-container">
        <h2>
          {' '}
          <a
            onClick={() => {
              navigate('/cpl-course');
            }}
          >
            Commercial Pilot License (CPL) Course
          </a>
        </h2>
        <p>
          The Commercial Pilot License (CPL) course is for individuals aspiring
          to become professional pilots and pursue a career in commercial
          aviation.
        </p>
        <h3>Course Overview</h3>
        <ul>
          <li>Duration of Full Course- 12-18 months</li>
          <li>Duration of Ground School- 3-6 months </li>
          <li> Duration of Flying - 6-12 months</li>

          <li>
            Get Scholarship Upto 50% on CPL Ground Classes based on your 12th
            Class Physics, Maths and English Marks.
          </li>
        </ul>
      </div>

      {/* Airlines Transport Pilot License (ATPL) Course */}
      <div className="course-container">
        <h2>
          <a
            onClick={() => {
              navigate('/atpl-course');
            }}
          >
            Airlines Transport Pilot License (ATPL) Course
          </a>
        </h2>
        <p>
          The Airlines Transport Pilot License (ATPL) course is the highest
          level of pilot certification, allowing pilots to fly commercial
          airliners.
        </p>
        <h3>Course Overview</h3>
        <ul>
          <li>Duration: 6-12 months</li>
          <li>
            Curriculum: Advanced aircraft systems, airline operations, crew
            resource management (CRM), airline transport regulations, etc.
          </li>
          <li>
            Requirements: CPL with multi-engine and instrument ratings, minimum
            flight hours, passing ATPL written and practical exams, etc.
          </li>
        </ul>
      </div>
      <div className="course-container">
        <h2>
          <a
            onClick={() => {
              navigate('/type-rating/a320');
            }}
          >
            Type Rating
          </a>
        </h2>
        <p>
          Type rating is a type of aircraft certification that is granted by
          aviation authorities to pilots who have completed training and testing
          on a specific type of aircraft. This type of certification allows the
          pilot to operate that type of aircraft.
        </p>
        <h3>Course Overview</h3>
        <ul>
          <li>
            This course includes both theoretical training and training in Full
            Flight Simulator .
          </li>

          <li>Airbus 320 Type Rating</li>
          <li>ATR72-600 Type Rating</li>
          <li>Boeing B737 Type Rating</li>
        </ul>
      </div>
    </div>
  );
};

export default Course;
