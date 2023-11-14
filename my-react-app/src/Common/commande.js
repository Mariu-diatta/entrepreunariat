import PhotoPanel from "./photopanel";
import PhotoPanel1 from "./photopanel1";
import im from "../accueil/Site1/images/3454.jpg"
const Commande =()=>{
    return(
        <>
            <section className=" u-clearfix u-section-5" id="carousel_ba86" style={{paddingLeft:"5%", paddingRight:"5%"}} >
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <div className="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
                    <div className="u-gutter-0 u-layout">
                        <div className="u-layout-row">
                            <div className="u-size-30">
                                <div className="u-layout-col">
                                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500">
                                    <div className="u-container-layout u-container-layout-1">
                                    <img src={im} alt="" className="u-align-left u-expanded-width u-image u-image-1" data-image-width="966" data-image-height="920"/>
                                    </div>
                                </div>
                                <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                                    <div className="u-container-layout u-valign-top u-container-layout-2">
                                    <h2 className="u-align-left u-text u-text-1">Disponible</h2>
                                    <p className="u-align-left u-text u-text-2">Thiré lalo</p> 
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="u-size-30" style={{backgroundColor:"#faebd7"}}>
                                <div className="u-layout-row">
                                <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-3">
                                    <div className="u-container-layout u-container-layout-3">
                                    <div className="u-align-left  u-shape u-shape-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="250"></div>
                                    <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-white u-group-1" data-animation-name="customAnimationIn" data-animation-duration="1500">
                                        <div className="u-container-layout u-valign-middle u-container-layout-4">
                                        {/* <p className="u-text u-text-3">{props.contenu}<br/> */}
                                        {/* </p> */}
                                        </div>
                                    </div>
                                    {/* <img src={props.image} alt="" className="u-align-left u-image u-image-2" data-image-width="900" data-image-height="601" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="0" /> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Commande;