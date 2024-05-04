
import React from 'react';
import {Link } from "react-router-dom";

function Footer(){
  return(
    <nav className='m-0 nav-footer ' style={{}} >	
      <footer className="text-center text-lg-start bg-light text-muted  flex-row u-align-center u-clearfix u-grey-5 u-footer  mb-0 mt-3" >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom " style={{color:"grey", fontSize:"small"}}>
          
          <div className="me-5 d-none d-lg-block">
            <span>Faire passer votre business en ligne :</span>
          </div>

          <div>
            <a Link="#" className="me-4 text-reset">
              <i className="fa fa-facebook-f ml-2"></i>
            </a>
            <a Link="" className="me-4 text-reset">
              <i className="fa fa-twitter ml-2"></i>
            </a>
            <a Link="" className="me-4 text-reset">
              <i className="fa fa-google ml-2"></i>
            </a>
            <a Link="" className="me-4 text-reset">
              <i className="fa fa-instagram ml-2"></i>
            </a>
            <a Link="" className="me-4 text-reset">
              <i className="fa fa-linkedin ml-2"></i>
            </a>
            <a Link="/home" className="me-4 text-reset">
              <i className="fa fa-github ml-2"></i>
            </a>
          </div>
          
        </section>
        
        <section className='' style={{color:"grey", fontSize:"medium", backgroundColor:'black'}}>

          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fa fa-gem me-3"><small>VirtualB</small></i>
                </h6>

                <small>
                La plateforme novatrice décrite vise à révolutionner le paysage commercial en regroupant les activités de petits 
                commerces au sein d'un espace centralisé. Son objectif principal est d'offrir une visibilité accrue à ces commerces 
                locaux, souvent méconnus, tout en simplifiant le processus de commercialisation de leurs produits..                </small>

              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">
                    <small>Services</small>
                  </h6>

                  <p>
                    <Link href="#!" className="text-reset"><small>Vous permettre de commercialiser vos marchandises.</small></Link>
                  </p>
                  <p>
                    <Link href="#!" className="text-reset"><small>Trouvez des clients plus facilement et en toute sécurité.</small></Link>
                  </p>

                  <p>
                    <Link href="#!" className="text-reset"><small>Placer vos marchandises dans nos différentes boutiques. </small></Link>
                  </p>
               
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                <small>Liens utils</small>
                </h6>

                <p>
                  <Link href="#!" className="text-reset"><small>code du logements</small></Link>
                </p>

                <p>
                  <Link href="#!" className="text-reset"><small>Settings</small></Link>
                </p>

                <p>
                  <Link href="#!" className="text-reset"><small>Orders</small></Link>
                </p>

                <p>
                  <Link href="#!" className="text-reset"><small>Help</small></Link>
                </p>

              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4"><small>Nous contacter</small></h6>

                <p><i className="fa fa-home me-3 mr-2"></i><small>Campus Esp, Dk vdn, SN</small></p>
                <p><i className="fa fa-envelope me-3 mr-2"></i><small>SenBusness@esp.sn</small></p>

                <p><i className="fa fa-phone me-3"></i><small>+221 770515417</small></p>
                <p><i className="fa fa-print me-3"></i><small>+221 770515417</small></p>

              </div>

            </div>

          </div>

        </section>

        <div className="text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.05"}}>
          <small>© 2021 Copyright:</small>
          <a className="text-reset fw-bold  footerBottom" href="/hom"><small>VirtualB.com</small></a>
        </div>
      </footer>	
    </nav>
  );
}
export default Footer;