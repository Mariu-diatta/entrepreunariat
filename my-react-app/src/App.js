import logo from './logo.svg';
import './App.css';
import Test from './test.js'
import './accueil/Site1/A-propos.css'
import './accueil/Site1/Accueil.css'
import './accueil/Site1/nicepage.css'
import './accueil/Site1/LogIn.css'
import './accueil/Site1/Post-Template.css'
import './accueil/Site1/Blog-Template.css'


import Footer from './Common/footer.js'
import Header from './Common/header.js'
import Contact from './Common/contact.js'
import Section from './Common/section.js'
import SectionU from './Common/sectionU.js'
import SectionCarr from './Common/sectionCarr.js'
import LogIn from './Common/logIn.js'
import Register from './Common/registered.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionCarr/>
      <SectionU/>
      <LogIn/>
      <Register/>
      <Section/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
