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
    <section className="pt-0  u-align-center u-clearfix u-container-align-center  u-section-4 " id="carousel_d430" style={{paddingTop:"0px", paddingLeft:"5px", paddingRight:"5px", marginDown:"0px", marginTop:"0px"}}>
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-align-center u-text u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750">Notre Travail</h2>
        <p className="u-align-center u-text u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1500"> Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Pellentesque habitant morbi tristique senectus et netus. </p>
        <div className="u-expanded-width u-list u-list-1">
          <div className="u-repeater u-repeater-1">
            {
                Data.map((data)=><Photopanel2 title={data[1]} image={data[0]}/>)
            }
          </div>
        </div>
      </div>
    </section>
    )}

    export default SectionU;