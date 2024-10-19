import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomeSection from './Components/HomeSection/HomeSection';
import AboutSection from './Components/AboutSection/AboutSection';
import NumbersSections from './Components/NumbersSection/NumbersSection'
import NewsSection from './Components/NewsSection/NewsSection';
import Footer from './Components/Footer/Footer';
import MainSection from './Components/pages/careers/MainSection';
import FirstSection from './Components/pages/breadforgood/FirstSection';


const App = () => {
  return (
    <Router>
      <Routes>
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
          </>
          }/> 

        <Route path='/careers' element={
          <>
            <Navbar />
            <MainSection />
          </>
        }/>

        <Route path='/bfg' element={
          <>
            <Navbar />
            <FirstSection />
          </>
        }/>

      </Routes>
    </Router>
  );
};

export default App;