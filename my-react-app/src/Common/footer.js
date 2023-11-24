
import React from 'react'
import {Link } from "react-router-dom";

function Footer(){
  return(
    <nav className='m-0'>	
      <footer className="text-center text-lg-start bg-light text-muted  flex-row u-align-center u-clearfix u-grey-5 u-footer  mb-0 mt-3">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom " style={{color:"grey", fontSize:"small"}}>
          
          <div className="me-5 d-none d-lg-block">
            <span>Nous choisir c'est trouver un logement descent:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f ml-2"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter ml-2"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google ml-2"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram ml-2"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin ml-2"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github ml-2"></i>
            </a>
          </div>
          
        </section>
        
        <section className='me-5' style={{color:"grey", fontSize:"medium"}}>

          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>KeurTier
                </h6>

                <p >
                  Nous avons comme objectifs  de faciliter la mise en relation entre locataires et propriétaires de biens  immobiliers d'une part et d'autre part
                  l'accompagnement de ces derniers. Notre but est aussi de permettre à la population d'avoir accès à un logements sein et de contrer les fraudes autour du logement.
                </p>

              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                Services
              </h6>

              <p>
                <Link href="#!" className="text-reset">Proposez vos services immobiliers en quelques minutes</Link>
              </p>
              <p>
                <Link href="#!" className="text-reset">Trouvez du logement sans frais et en quelques secondes</Link>
              </p>

              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Liens utils
                </h6>

                <p>
                  <Link href="#!" className="text-reset">code du logements</Link>
                </p>

                <p>
                  <Link href="#!" className="text-reset">Settings</Link>
                </p>

                <p>
                  <Link href="#!" className="text-reset">Orders</Link>
                </p>

                <p>
                  <Link href="#!" className="text-reset">Help</Link>
                </p>

              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Nous contacter</h6>

                <p><i className="fas fa-home me-3 mr-2"></i>Campus Esp, Dk vdn, SN</p>
                <p><i className="fas fa-envelope me-3 mr-2"></i>keurtiercome@esp.sn</p>

                <p><i className="fas fa-phone me-3"></i>+221 770515417</p>
                <p><i className="fas fa-print me-3"></i>+221 770515417</p>

              </div>

            </div>

          </div>

        </section>

        <div className="text-center p-4 " style={{backgroundColor: "rgba(0, 0, 0, 0.05"}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="#">KeurTier.com</a>
        </div>
      </footer>	
    </nav>
  );
}
export default Footer;