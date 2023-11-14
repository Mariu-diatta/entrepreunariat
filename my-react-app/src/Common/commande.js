import PhotoPanel from "./photopanel";
import PhotoPanel1 from "./photopanel1";
import im from "../accueil/Site1/images/3454.jpg"
import im1 from "../accueil/Site1/images/3q6.jpg"
const Commande =()=>{
    return(
        <>
            <section className="row" style={{paddingLeft:"12%"}} >
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="row">
                                    <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500">
                                        <div className="u-container-layout u-container-layout-1">
                                            <img src={im} alt="" className="u-align-left u-expanded-width u-image u-image-1" data-image-width="966" data-image-height="920" style={{height:"500px"}}/>
                                        </div>
                                    </div>
                                    <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                                        <div className="u-container-layout u-valign-top u-container-layout-1">
                                            <h2 className="u-align-left u-text u-text-1">Disponible</h2>
                                            <p className="u-align-left u-text u-text-2">Thiré lalo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  " style={{backgroundColor:"grey", marginLeft:"0px"}}>
                               
                                <div className="row" style={{backgroundColor:"white"}}>
                                    Jule, jule, Jule, jule;Jule, jule<br/>
                                    <img src={im} alt="..." style={{height:"200px", width:'200px'}}/>
                                </div>
                                <div className="row" style={{backgroundColor:"white"}}>
                                    gdggdg dddddddddddddddddddd ddddddddddddddddddd ddddddddddddddddddddddddd ddddddddddddddddddd ddddddd
                                </div>
                         
                            </div>
                        </div>
            </section>
        </>
    )
}

export default Commande;