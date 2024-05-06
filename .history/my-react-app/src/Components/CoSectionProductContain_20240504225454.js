import im from "../ImageCore/images/3q6.jpg";
import ContainerRignt from "./Produit/CoContainerRight.js";
import {Row,Col} from 'react-bootstrap';

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
];

function SectionU(){
  return(
      <section className="pb-0 mb-0">
          <h5 className="u-align-center u-text " data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="750"><strong>Nos produits</strong></h5>
          <p className="u-align-center u-text " data-animation-name="customAnimationIn" data-animation-duration="1500"><small>Le Sénégal offre une richesse de produits locaux reflétant sa diversité culturelle et géographique. Voici un résumé de certains des produits locaux clés du Sénégal.</small></p>
              <div className="container" style={{paddingLeft:'5%', paddingRight:'6%'}}>   
                <Row xs={1} md={3} className="g-3">
                    {
                        Data.map(data=>                                                               
                            <Col className="pt-2"> 
                                <ContainerRignt
                                    title={data[1]} image={data[0]}
                                />
                            </Col>                                  
                        )
                    }
                </Row>
              </div>  
      </section>
      
  )
}




export default SectionU;