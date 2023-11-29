import React from "react";
import "./LoginPage.css"; // You can create this CSS file for styling

class LoginPage extends React.Component {
  handleLoginClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Define the URL of your backend endpoint
    window.location.href = "http://127.0.0.1:5000/ttc/LoginPage";
    
    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ /* You can pass any data you need here */ }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle successful login (e.g., redirect to a new page)
          window.location.href = '/ttc/protected_area'; // Redirect to the protected area
        } else {
          // Handle login error (e.g., display an error message)
          console.error(response.status);
          console.error('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div className="main_box">
        <div className="animate-gradient-text">
          <h1>TTChef</h1>
        </div>
        <h5>Turing test for Chef</h5>
        <div className="g_body">
          <button className="g-button" onClick={this.handleLoginClick}>
            <img
              className="g-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
            />
            <p className="g-text">Continue with Google</p>
          </button>
        </div>
        <p style={{ fontSize: "small" }}>
          By continuing, you agree to Name <br />
          <span style={{ color: "#5162FF", fontSize: "small" }}>
            Terms of Use
          </span>{" "}
          and{" "}
          <span style={{ color: "#5162FF", fontSize: "small" }}>
            Privacy Policy.
          </span>
        </p>
      </div>
    );
  }
}

export default LoginPage;
