
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './Compponents/contact.js';
import Accueil from './Compponents/accueil.js';
import LogIn from './Compponents/logIn.js';
import SignUp from './Compponents/registered.js';
import About from './Compponents/about.js';
import Admin  from './Compponents/Admin/pageAdmin.js';
import Aderant from './Compponents/User/pageAderant.js';
import Commande from './Compponents/commande.js';
import AboutUser from './Compponents/aboutUser.js';
import ZeroPage from './Compponents/zero.js';
import HeaderBoot from './Compponents/headerBootstrap.js';
import { Component} from 'react';
import ContextApp from './Compponents/context.js';

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
