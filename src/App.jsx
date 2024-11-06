import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/homesection/HomeSection';
import AboutSection from './components/aboutsection/AboutSection';
import NumbersSections from './components/numberssection/NumbersSection';
import NewsSection from './components/newssection/NewsSection';
import Footer from './components/footer/Footer';
import MainSection from './components/pages/careers/MainSection';
import FirstSection from './components/pages/breadforgood/firstsection/FirstSection';
import SecondSection from './components/pages/breadforgood/secondsection/SecondSection';
import ThirdSection from './components/pages/breadforgood/thirdsection/ThirdSection';
import DonationPage from './components/pages/donation/DonationPage';

const App = () => {
  return (
    <Router>
      <Routes>s
        <Route path='/' element={
          <>
            <Navbar />
            <HomeSection />
            <AboutSection />
            <NumbersSections />
            <NewsSection />
            <Footer />
          </>
        }/>

        <Route path='/donation' element={ 
          <>
            <Navbar />
            <DonationPage /> 
            {/* <Footer /> */}
          </>
        }/> 

        <Route path='/careers' element={
          <>
            <Navbar />
            <MainSection />
            <Footer />
          </>
        }/>

        <Route path='/bfg' element={
          <>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <Footer />
          </>
        }/>

      </Routes>
    </Router>
  );
};

export default App;