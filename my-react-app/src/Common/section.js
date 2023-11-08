import '../accueil/Site1/A-propos.css'
import '../accueil/Site1/Accueil.css'
import '../accueil/Site1/nicepage.css'
import '../accueil/Site1/LogIn.css'
import im1 from "../accueil/Site1/images/3454.jpg"
import im2 from "../accueil/Site1/images/6457.jpg"
import im3 from "../accueil/Site1/images/553566.jpg"
import PhotoPanel from "./photopanel.js"
import PhotoPanel1 from "./photopanel1.js"
const titre ="Management consulting"
const contenu="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum "

function Section(){
    return(
      <section className="u-clearfix u-section-5" id="carousel_ba86" >
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                  <PhotoPanel title={titre} image={im1} contenu={contenu} />
                  <PhotoPanel1 image={im2} contenu={contenu} />
                </div>
              </div>
            </div>
      </div>
    </section>
)}

export default Section;