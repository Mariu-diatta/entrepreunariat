import im from "../accueil/Site1/images/3q6.jpg"
import Photopanel2 from "./photopanel2.js"
import {Row,Col} from 'react-bootstrap'

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
      <section  className=" u-align-center u-clearfix u-container-align-center  u-section-4 " id="carousel_d430" >
          <h5 className="u-align-center u-text " data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750"><strong>Nos produits</strong></h5>
          <p className="u-align-center u-text " data-animation-name="customAnimationIn" data-animation-duration="1500"><small>Le Sénégal offre une richesse de produits locaux reflétant sa diversité culturelle et géographique. Voici un résumé de certains des produits locaux clés du Sénégal.</small></p>
            {/* <div className="pt-3 pb-5 u-repeater u-repeater-1"> */}
              {/* {
                  Data.map((data)=><Photopanel2 title={data[1]} image={data[0]}/>) 
              } */}

              <div className="container" style={{paddingLeft:'5%', paddingRight:'6%'}}>   
                <Row xs={1} md={3} className="g-3">
                    {
                        Data.map(data=>                                                               
                            <Col className="pt-2"> 
                                <Photopanel2
                                    title={data[1]} image={data[0]}
                                />
                            </Col>                                  
                        )
                    }
                </Row>
              </div>  

            {/* </div> */}
      </section>
      
  )
}




export default SectionU;