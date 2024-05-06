
import MainSection from "../CoMainSection.js";
import {Navigate} from 'react-router-dom';
import Footer from "../CoFooterBoostrap.js";
import VerticalMenu from "../CoVerticalMenu.js";
import ContextApp from "../CoContext.js";
import { createContext, useContext, useEffect, useState } from "react";
import PlusSection from "../CoPlusSection.js";
import Contain from "../../Containers/bootstrapUI/Contain.js";
import im1 from "../../ImageCore/images/3454.jpg";
import im2 from "../../ImageCore/images/6457.jpg";

const titre ="Management consulting";
const contenu="La plateforme novatrice décrite vise à révolutionner le paysage commercial en regroupant les activités de petits commerces au sein d'un espace centralisé. Son objectif principal est d'offrir une visibilité accrue à ces commerces locaux, souvent méconnus, tout en simplifiant le processus de commercialisation de leurs produits. Grâce à cette consolidation, les consommateurs peuvent découvrir une variété de produits locaux en un seul endroit, favorisant ainsi l'achat local et renforçant les liens au sein de la communauté. Cette initiative prometteuse contribue non seulement à stimuler l'économie locale, mais elle offre également aux petits commerces une plateforme numérique"
+ "moderne pour prospérer dans un environnement de plus en plus numérisé. ";

const [message_, adherant_,  commande_]=["message","adherant","commande"];

const Admin =(props)=>{

    const {isConnected, login,logout}=useContext(ContextApp);
    const [valeurBtn, setValeurBtn]=useState("");
    
    const fonction=(valeur_)=>{
        if (valeur_===message_) {
            setValeurBtn(message_);
         } else if(valeur_===adherant_) {
            setValeurBtn(adherant_);
         }else if(valeur_===commande_){
            setValeurBtn(commande_);
         }
    };

    return(
        <>
            {
                (isConnected)? 
                    <div className="row flex-row vert_menu_footer"> 
                        <div className="col-lg-2">
                            <VerticalMenu  fonction={fonction} />
                        </div>
                        <div className="col-lg-10"> 

                            <div className="row">  
                                <div className="col-lg-5 me-0 fixed-static">
                                    <MainSection children={<PlusSection title={titre} image={im1} contenu={contenu}/>} />
                                </div>  
                                <div  className="col-lg-7 ms-0">    
                                    <MainSection children={<Contain image={im2} contenu={contenu}/>}/> 
                                </div> 
                            </div>
                            
                            
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