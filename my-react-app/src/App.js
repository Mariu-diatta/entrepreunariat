
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Common/contact.js'
import Accueil from './Common/accueil.js'
import LogIn from './Common/logIn.js'
import Register from './Common/registered.js'
import About from './Common/about.js'
import Admin  from './Common/pageAdmin.js';
import Aderant from './Common/pageAderant.js';
import Commande from './Common/commande.js';
import AboutUser from './Common/aboutUser.js';
import ZeroPage from './Common/zero.js';
import HeaderBoot from './Common/headerBootstrap.js';
import { Component, useEffect, useState } from 'react';

class  App extends Component{
   constructor(props){
    super(props);
    this.state={
      valueHeaderState:false
    };
    this.changeHeaderState=this.changeHeaderState.bind(this)
   }

   changeHeaderState(param){
    this.setState({valueHeaderState:param})
   }


  render(){
    const valueHeaderState=this.state.valueHeaderState
    const changeHeaderState=this.changeHeaderState
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HeaderBoot changeHeaderState={changeHeaderState} valueHeaderState={valueHeaderState} />}>
                <Route index element={<Accueil/>}/>
                <Route path="/a_propos" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/inscription" element={<Register/>} />
                <Route path="/login" element={<LogIn  changeHeaderState={changeHeaderState} valueHeaderState={valueHeaderState} />} />
                <Route path="/adherant" element={<Aderant/>}/>
                <Route path="/admin" element={<Admin changeHeaderState={changeHeaderState} valueHeaderState={valueHeaderState}/>}/>
                <Route path="/commande" element={<Commande/>}/>
                <Route path="/aboutUser" element={<AboutUser/>}/> 
                <Route path="/zero" element={<ZeroPage/>}/>
              </Route>
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    );
        
  }

}

export default App;
