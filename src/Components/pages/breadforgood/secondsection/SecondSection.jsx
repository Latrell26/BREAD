import React from "react";
import "./SecondSection.css"
import community from "../../../../assets/community.png"

const SecondSection = () => {
  return (
    <div className="second-layer">
    <div className="container">
      <div className="donate">
        <img className="donateClass" src={community} alt="Donate" />
      </div>
      <div className="Description">
        <h2 className="Heading">Make an Impact Today</h2>
        <p>Your contribution fuels our community programs,<br></br>providing resources and support to those who need it most. </p>
        <button className="LearnMoreButton">Learn More</button>
      </div>
    </div>
  </div>
  
  );
};

export default SecondSection;