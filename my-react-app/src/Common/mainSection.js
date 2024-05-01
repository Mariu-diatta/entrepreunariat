import '../accueil/Site1/A-propos.css';
import '../accueil/Site1/Accueil.css';
import '../accueil/Site1/nicepage.css';
import '../accueil/Site1/LogIn.css';

import createContext, { useState } from 'react'



// **const ContextAdmin = createContext();

function MainSection({children,...props}){
  const [messageAdmin, setMessageAdmin]=useState(false);
  const [commandeAdmin, setCommandeAdmin]=useState(false);

  
  return(

    <section className="u-clearfix u-section-5">
      
      <div className="row">

        {children}

      </div>

    </section>
  ) 
}

export default MainSection;