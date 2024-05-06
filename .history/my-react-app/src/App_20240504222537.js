
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './Components/CoContact.js';
import Accueil from './Components/CoAccueil.js';
import LogIn from './Components/CoLogIn.js';
import SignUp from './Components/CoRegistered.js';
import About from './Components/CoAbout.js';
import Admin  from './Components/Admin/CoAdmin.js';
import Aderant from './Components/User/CoPageAderant.js';
import Commande from './Components/Commande/CoCommande.js';
import AboutUser from './Components/CoAboutUser.js';
import ZeroPage from './Components/zero.js';
import HeaderBoot from './Components/CoHeaderBootstrap.js';
import { Component} from 'react';
import ContextApp from './Components/CoContext.js';

class  App extends Component{

   constructor(props){
      super(props);
      this.state={
        isConnected:false
      };
      this.login=this.login.bind(this);
      this.logout=this.logout.bind(this);
      this.logout=this.logout.bind(this);
   }

  login (){
    this.setState({ isConnected:true});
  }

  logout(){
    this.setState({ isConnected:false});
    sessionStorage.clear();
  }

  render(){

    const logout=  this.logout;
    const login=  this.login;
    const isConnected=  this.state.isConnected;

    return (

      <ContextApp.Provider value={{isConnected, login,logout}}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HeaderBoot />}>
                <Route index element={<Accueil/>}/>
                <Route path="/a_propos" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/inscription" element={<SignUp/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/adherant" element={<Aderant/>}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/commande" element={<Commande/>}/>
                <Route path="/aboutUser" element={<AboutUser/>}/> 
                <Route path="/zero" element={<ZeroPage/>}/>
              </Route>
            </Routes>
        </BrowserRouter>

      </ContextApp.Provider>
    );
        
  }

}

export default App;
