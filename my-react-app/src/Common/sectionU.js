import im from "../accueil/Site1/images/3q6.jpg"
import Photopanel2 from "./photopanel2.js"

const Data=[
    [im, "Automation Projects"],
    [im, "Automation Projects"],
    [im, "Automation Projects"],
    [im, "Automation Projects"],
    [im, "Automation Projects"],
    [im, "Automation Projects"],
    [im, "Automation Projects"],
    [im, "Automation Projects"],
    [im, "Automation Projects"],
]

function SectionU(){
  return(
      <section  className="container  u-align-center u-clearfix u-container-align-center  " id="carousel_d430" style={{ paddingTop:"20px", paddingLeft:"40px", paddingRight:"40px", marginDown:"0px", marginTop:"0px"}}>
        <div className="u-clearfix u-sheet u-sheet-1">
          <h5 className="u-align-center u-text u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750"><small>Nos produits</small></h5>
          <p className="u-align-center u-text u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1500"><small>Le Sénégal offre une richesse de produits locaux reflétant sa diversité culturelle et géographique. Voici un résumé de certains des produits locaux clés du Sénégal</small></p>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              {
                  Data.map((data)=><Photopanel2 title={data[1]} image={data[0]} price='$19.99'/>)
                  
              }
            </div>
          </div>
        </div>
      </section>
  )
}

export default SectionU;