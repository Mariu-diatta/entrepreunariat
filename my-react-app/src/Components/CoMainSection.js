import '../ImageCore/A-propos.css';
import '../ImageCore/Accueil.css';
import '../ImageCore/nicepage.css';
import '../ImageCore/LogIn.css';


function MainSection({children}){

  return(

    <section className="u-clearfix u-section-5">
      
      <div className="row ">

        {children}

      </div>

    </section>
  ) 
}

export default MainSection;