// Feedback.js

import React, { useState } from 'react';
import './Feedback.css'; // Import your CSS file for styling

const Feedback = () => {
  const [resultAsExpected, setResultAsExpected] = useState('');
  const [mostAccurateDetection, setMostAccurateDetection] = useState('');
  const [detectionNotMeetingExpectations, setDetectionNotMeetingExpectations] = useState('');

  const handleSubmit = () => {
    // Handle submission logic here
alert("Your message has been submityted successfully.")
    // You might want to send this feedback to an API or perform some other action
  };

  return (
    <div className='p-8 sm:p-14 h-full' id='feedback'>
      <h1 className='font-bold text-black text-[2.2rem] tracking-[0.1rem]'>Feedback</h1>

      <div className="question">
        <p>1. Is the result as expected?</p>
        <div className="options">
          <label>
       <input type="radio" />
       Yes
          </label>
          <label>
       <input type="radio" />
       No
          </label>
        </div>
      </div>

      <div className="question">
        <p>2. Which of the detection is most accurate?</p>
        <div className="options">
          <label>
            <input
              type="radio"
              value="Digital Forgery Detection"
              checked={mostAccurateDetection === 'Digital Forgery Detection'}
              onChange={() => setMostAccurateDetection('Digital Forgery Detection')}
            />
            Digital Forgery Detection
          </label>
          <label>
            <input
              type="radio"
              value="Data Manipulation Detection"
              checked={mostAccurateDetection === 'Data Manipulation Detection'}
              onChange={() => setMostAccurateDetection('Data Manipulation Detection')}
            />
            Data Manipulation Detection
          </label>
          <label>
            <input
              type="radio"
              value="Whitener Detection"
              checked={mostAccurateDetection === 'Whitener Detection'}
              onChange={() => setMostAccurateDetection('Whitener Detection')}
            />
            Whitener Detection
          </label>
        </div>
      </div>

      <div className="question">
        <p>3. Which detection did not meet your expectations?</p>
        <div className="options">
        <label>
            <input
              type="radio"
              value="Digital Forgery Detection"
              checked={mostAccurateDetection === 'Digital Forgery Detection'}
              onChange={() => setMostAccurateDetection('Digital Forgery Detection')}
            />
            Digital Forgery Detection
          </label>
          <label>
            <input
              type="radio"
              value="Data Manipulation Detection"
              checked={mostAccurateDetection === 'Data Manipulation Detection'}
              onChange={() => setMostAccurateDetection('Data Manipulation Detection')}
            />
            Data Manipulation Detection
          </label>
          <label>
            <input
              type="radio"
              value="Whitener Detection"
              checked={mostAccurateDetection === 'Whitener Detection'}
              onChange={() => setMostAccurateDetection('Whitener Detection')}
            />
            Whitener Detection
          </label>
        </div>
      </div>
      <div className="question">
        <p>4. Any other feedback?</p>
        <div className="options">
        <label>
            <input
              type="text"
            />
          </label>
        </div>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Feedback;
