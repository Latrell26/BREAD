//This is the about section
import React from 'react';
import './AboutSection.css'

const AboutSection = () => {
  return (
    <div className="about-layer">
      <section id="about" className="about-section">
        <h1>What we do?</h1>
        <p>Bread is dedicated to making a meaningful impact through various charitable efforts. Here are our key focus areas:</p>
        <ul className="about-subtext">
          <li>Community Support</li>
          <li>Food Assistance</li>
          <li>Education & Training</li>
          <li>Health & Wellness</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutSection;
