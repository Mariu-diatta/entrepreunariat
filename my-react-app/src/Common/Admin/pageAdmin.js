
import MainSection from "../mainSection";
import {Navigate} from 'react-router-dom';
import Footer from "../footerBoostrap";
import VerticalMenu from "../verticalMenu";
import ContextApp from "../context.js";
import { createContext, useContext } from "react";
import PlusSection from "../plusSection.js";
import Contain from "../Produit/Contain.js";
import im1 from "../../accueil/Site1/images/3454.jpg";
import im2 from "../../accueil/Site1/images/6457.jpg";

const titre ="Management consulting";
const contenu="La plateforme novatrice décrite vise à révolutionner le paysage commercial en regroupant les activités de petits commerces au sein d'un espace centralisé. Son objectif principal est d'offrir une visibilité accrue à ces commerces locaux, souvent méconnus, tout en simplifiant le processus de commercialisation de leurs produits. Grâce à cette consolidation, les consommateurs peuvent découvrir une variété de produits locaux en un seul endroit, favorisant ainsi l'achat local et renforçant les liens au sein de la communauté. Cette initiative prometteuse contribue non seulement à stimuler l'économie locale, mais elle offre également aux petits commerces une plateforme numérique"
+ "moderne pour prospérer dans un environnement de plus en plus numérisé. ";



const Admin =(props)=>{

    const {isConnected, login,logout}=useContext(ContextApp);

    return(
        <>
            {
                (isConnected)? 
                    <div className="row flex-row vert_menu_footer"> 
                        <div className="col-lg-2">
                            <VerticalMenu/>
                        </div>
                        <div className="col-lg-10">

                            <MainSection>
                                <div className="col-lg-6 ps-0">
                                    <PlusSection title={titre} image={im1} contenu={contenu}/>
                                </div>
                                <div className="col-lg-6 ps-0">
                                    <MainSection children={<Contain image={im2} contenu={contenu}/>}/>  
                                </div>
                            </MainSection>
                             
                            <div className=" ms-0 me-1 nav-footer ">
                                <Footer/>
                            </div>

                        </div> 
                    </div>
                :
                    <Navigate to="/login"/>
            } 
        </>
    )
     
}

export default Admin;