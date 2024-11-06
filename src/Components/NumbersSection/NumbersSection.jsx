//This is the numbers section
import React from 'react';
import './NumberSection.css'

const NumbersSection = () => {
  return (
    <div className="fourth-layer">
      <section id="numbers" className="numbers-intro">
        <h1>Bread by the Numbers</h1>
        <p>Bread is a growing community dedicated to making a difference through charitable efforts and donations.</p>
        <p><span>As of September, 2024</span></p>
      </section>

      <main className="cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </main>
    </div>
  );
};

export default NumbersSection;
