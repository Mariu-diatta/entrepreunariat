import logo from './logo.svg';
import './App.css';
import Test from './test.js'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Common/footer.js'
import Header from './Common/header.js'
import Contact from './Common/contact.js'
import Section from './Common/section.js'
import Accueil from './Common/accueil.js'
import SectionCarr from './Common/sectionCarr.js'
import LogIn from './Common/logIn.js'
import Register from './Common/registered.js'
import About from './Common/about.js'
import Admin  from './Common/pageAdmin.js';
import Aderant from './Common/pageAderant.js';
import Commande from './Common/commande.js';
import AboutUser from './Common/aboutUser.js';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<Accueil/>}/>
              <Route path="/a_propos" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/inscription" element={<Register/>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/adherant" element={<Aderant/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/commande" element={<Commande/>}/>
              <Route path="/aboutUser" element={<AboutUser/>}/>
            </Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
