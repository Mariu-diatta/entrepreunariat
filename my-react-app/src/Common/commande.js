import im from "../accueil/Site1/images/3454.jpg";
import BtnSmt from "./buttonSubmit";

const Commande =()=>{
    return(
        <>
            <section className="row " style={{paddingLeft:"10%", paddingTop:"1%", paddingBottom:"5%"}} >
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="row">
                                    <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500">
                                        <div className="u-container-layout u-container-layout-1">
                                            <img src={im} alt="" className="u-align-left u-expanded-width u-image " width={200} height={300}/>
                                        </div>
                                    </div>
                                    <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                                        <div className="u-container-layout u-valign-top u-container-layout-1">
                                            <h5 className="u-align-left u-text u-text-1">Disponible</h5>
                                            <p className="u-align-left u-text u-text-2">Thiré lalo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  " style={{backgroundColor:"grey", marginLeft:"0px"}}>
                               
                                <div className="row" style={{backgroundColor:"white", textAlign:'center', paddingTop:'15px', paddingBottom:'20px'}}>
                                    <h5> Enregistrer vos données pour valider l'opération</h5>
                                    <form>
                                        <label for="fname">Nom:</label><br/>
                                        <input type="text" id="fname" name="fname"/><br/>
                                        <label for="lname">Prénom:</label><br/>
                                        <input type="text" id="lname" name="lname"/><br/>
                                        <label for="lname">Number:</label><br/>
                                        <input type="text" id="lname" name="lname"/><br/>
                                        <BtnSmt/>
                                    </form> 
                                </div>
                                <div className="row" style={{backgroundColor:"white", textAlign:'center', paddingTop:'12px'}}>
                                    <h6> Résumé de votre commande </h6>
                                </div>
                         
                            </div>
                        </div>
            </section>
        </>
    )
}

export default Commande;