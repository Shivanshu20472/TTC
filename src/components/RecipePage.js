import React from 'react';
import './style.css'; // Import your CSS file

class RecipeComponent extends React.Component {

  getval = (val) => {
    // Implement your getval logic
  };

  submit = (value, data) => {
    // Implement your submit logic
  };

  skip = (value) => {
    // Implement your skip logic
  };

  render() {
    const { data, value } = this.state;

    return (
      <div id="outer">
        <div id="inner_remaining">
          <div className="content">
            <div className="recp_name">
              <b>
                <p>🍽️ {data[1]}<br /><i>Ingredients</i></p>
              </b>
              <table id="ing1">
                {Array.from({ length: Math.ceil(data[2].length / 3) }, (_, index) => (
                  <tr key={index}>
                    {data[2].slice(index * 3, index * 3 + 3).map((ingredient, idx) => (
                      <td key={idx}>{ingredient}</td>
                    ))}
                  </tr>
                ))}
              </table>
              <ul id="ing2" style={{ marginTop: '-20px', padding: 0 }}>
                {data[2].map((ingredient, idx) => (
                  <li key={idx} style={{ listStyle: 'none', padding: 0 }}>
                    ✅ {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="instructions">
            <h2><i>Recipe Instructions</i></h2>
            <ul>
              {data[3].map((instruction, idx) => (
                <li key={idx}>
                  <b>🥣 {instruction.capitalize()}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom_box" id="inner_fixed">
          <div className="evaluate">
            <div className="evaluate_upper">
              <h1>Is this recipe fake or real?</h1>
              <ul className="progressbar">
                {/* Add your onClick event handlers */}
                <li id="bt0" className="blurry" onClick={() => this.getval(0)}>
                  Fake
                </li>
                {/* Repeat for other li elements */}
              </ul>
              <ul className="bts" style={{ padding: 0 }}>
                {/* Add your onClick event handlers */}
                <li>
                  <button className="sbtn" id="sbt" onClick={() => this.submit(value, data[0])}>
                    Submit
                  </button>
                </li>
                {/* Repeat for other li elements */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeComponent;
