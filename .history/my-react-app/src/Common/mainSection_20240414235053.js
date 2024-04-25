import '../accueil/Site1/A-propos.css'
import '../accueil/Site1/Accueil.css'
import '../accueil/Site1/nicepage.css'
import '../accueil/Site1/LogIn.css'
import im1 from "../accueil/Site1/images/3454.jpg"
import im2 from "../accueil/Site1/images/6457.jpg"
import PhotoPanel from "./photopanel.js"
import PhotoPanel1 from "./Produit/photopanel1.js"
const titre ="Management consulting"
const contenu="La plateforme novatrice décrite vise à révolutionner le paysage commercial en regroupant les activités de petits commerces au sein d'un espace centralisé. Son objectif principal est d'offrir une visibilité accrue à ces commerces locaux, souvent méconnus, tout en simplifiant le processus de commercialisation de leurs produits. Grâce à cette consolidation, les consommateurs peuvent découvrir une variété de produits locaux en un seul endroit, favorisant ainsi l'achat local et renforçant les liens au sein de la communauté. Cette initiative prometteuse contribue non seulement à stimuler l'économie locale, mais elle offre également aux petits commerces une plateforme numérique"
+ "moderne pour prospérer dans un environnement de plus en plus numérisé. "

function Section(){
    return(
      <section className="  u-clearfix u-section-5  " id="carousel_ba86" style={{paddingLeft:"10%", paddingRight:"10%"}}>
                <div className="row">
                    <div className="col-lg-6 p-0 m-0">
                      <PhotoPanel title={titre} image={im1} contenu={contenu}/>
                    </div>
                    <div className="col-lg-6 p-0 m-0">
                      {/** Page fixe à droite dans admin */}
                    < PhotoPanel1 image={im2} contenu={contenu}/>
                    </div>
                </div>
      </section>
)}

export default Section;