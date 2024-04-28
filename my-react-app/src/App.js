
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Contact from './Common/contact.js';
import Accueil from './Common/accueil.js';
import LogIn from './Common/logIn.js';
import SignUp from './Common/registered.js';
import About from './Common/about.js';
import Admin  from './Common/Admin/pageAdmin.js';
import Aderant from './Common/User/pageAderant.js';
import Commande from './Common/commande.js';
import AboutUser from './Common/aboutUser.js';
import ZeroPage from './Common/zero.js';
import HeaderBoot from './Common/headerBootstrap.js';
import { Component} from 'react';
import ContextApp from './Common/context.js';


class  App extends Component{

   constructor(props){

      super(props);
      this.state={
        isConnected:false
      };
      this.login=this.login.bind(this);
      this.logout=this.logout.bind(this);
   }

  login (){
    this.setState({ isConnected:true});
  }

  logout(){
    try {
      if(window.confirm("Vouvez-vous vraiment vous déconnecter?")){
       this.setState({ isConnected:false});
       <Navigate to="/admin"/>
      } 
    } catch (error) {
      console.log(error);
    }
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
