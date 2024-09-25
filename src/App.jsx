import React from 'react';
import Navbar from './Components/Navbar';
import HomeSection from './Components/Homesection';
import AboutSection from './Components/Aboutsection';
import DonationSection from './Components/DonationSection';
import NewsSection from './Components/NewsSection';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <DonationSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default App;
