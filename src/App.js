
import './App.css';
import AboutSection from './Components/AboutSection';
import Contact from './Components/Contact';
import Experiance from './Components/Experiance';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import ProjectSection from './Components/ProjectSection';
import SocialLinks from './Components/SocialLinks';
import EducationSection from './Components/EducationSection';



function App() {
  return (
   <div>
     <NavBar/>
     <HomePage/>
     <SocialLinks/>
     <ProjectSection/>
     <AboutSection/>
     <Experiance/>
     <EducationSection/>
     <Contact/>
     
     <Footer/>
    
   </div>
  );
}

export default App;
