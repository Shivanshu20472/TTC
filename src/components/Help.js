import React from 'react';
import './Help.css'; // You can create this CSS file for styling

function Help() {
  const handleContinueClick = () => {
    // Handle the click event here and make the AJAX request
    console.log('Clicked the "Continue" button');
  };

  return (
    <div>
      <div className="animate-gradient-text">
        <h1>TTChef</h1>
      </div>
      <div className="about">
        'Can machines cook?'<br /><br />
        'Can machines think like a Chef?'<br /><br />
        Can they create novel recipes? Or recipe instructions that can fool a Chef into thinking that a fake (computer-generated) recipe is real.
        <br /><br />
        We have developed (and constantly improving) <a href="https://cosylab.iiitd.edu.in/ratatouille2/">Ratatouille</a>, an algorithm for generating novel recipes. Trained with a structured corpus of 118,000+ recipes, Ratatouille is our tribute to cumulative culinary intuition accumulated over millennia by cultures across the globe.
        <br /><br />
        With the 'Turing Test for Chef,' we are building on Alan Turing's inquiry into human intelligence and machines' ability to imitate.
        <br /><br />
        Let the imitation game begin!
      </div>
      <br /><br />
      <div className="continue">
        <button id="continue_main" onClick={handleContinueClick}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Help;
