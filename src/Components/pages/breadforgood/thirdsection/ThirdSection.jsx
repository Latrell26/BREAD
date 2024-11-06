import React from "react";
import "./ThirdSection.css"
import cleanup from '../../../../assets/cleanup.png'

const ThirdSection = () => {
  return (
    <div className="fourth-part">
      <div className="container">
        <div className="Description">
          <h1 className="Heading">Make a Difference Today</h1>
          <p className="Paragraph">
            Your donation supports our cleanup efforts, helping us<br /> 
            restore our environment for a healthier community.<br />
            Together, we can create cleaner, safer spaces for everyone!
          </p>
          <button className="LearnMoreButton">Learn More</button>
        </div>
        <div className="donate">
          <img className="donate1" src={cleanup} alt="Cleanup" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;