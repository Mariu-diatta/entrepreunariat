import './ImageCore/A-propos.css';
import './ImageCore/Accueil.css';
import './ImageCore/nicepage.css';
import './ImageCore/LogIn.css';

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