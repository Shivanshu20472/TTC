// App.js
import React, { useState } from 'react';
import './Occupation.css';

function App() {
  const [selectedOccupation, setSelectedOccupation] = useState('Professional');

  const handleOccupationChange = (event) => {
    setSelectedOccupation(event.target.value);
  };

  const handleRegisterClick = () => {
    // Make your AJAX call here using selectedOccupation
    console.log('Selected Occupation:', selectedOccupation);
  };

  return (
    <div className="main_box">
      <div className="upper_content">
        <h1>Hi {{name}}!</h1>
        <div className="animate-gradient-text">
          <h1>TTChef</h1>
        </div>
        <h2>How do you identify yourself as a Chef?</h2>
      </div>

      <section>
        <div>
          <input
            type="radio"
            id="control_01"
            name="select"
            value="Professional"
            checked={selectedOccupation === 'Professional'}
            onChange={handleOccupationChange}
          />
          <label htmlFor="control_01">
            <h2>Professional</h2>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="control_02"
            name="select"
            value="Expert"
            checked={selectedOccupation === 'Expert'}
            onChange={handleOccupationChange}
          />
          <label htmlFor="control_02">
            <h2>Expert</h2>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="control_03"
            name="select"
            value="Amateur"
            checked={selectedOccupation === 'Amateur'}
            onChange={handleOccupationChange}
          />
          <label htmlFor="control_03">
            <h2>Amateur</h2>
          </label>
        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <button id="submit_ocp" onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  );
}

export default Occupation;
