import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import DonationSection from './Components/DonationSection';
import NewsSection from './Components/NewsSection';
import Footer from './Components/Footer';
import Donation from './Components/page/Donation'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <HomeSection />
            <AboutSection />
            <DonationSection />
            <NewsSection />
            <Footer />
          </>
        }/>

        <Route path='/donation' element={ 
          <>
            <Navbar />
            <Donation/>
          </>
          }/> 

      </Routes>
    </Router>
  );
};

export default App;
