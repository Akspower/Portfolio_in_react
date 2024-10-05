import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
     
      <Navbar />
      <ProgressBar/>
      <Profile />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
