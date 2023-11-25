import im from "../accueil/Site1/images/3454.jpg";
import BtnSmt from "./buttonSubmit";

const cars = [
    {prod:1,  lab:'Ford',prix:'100', qual:'bon'},
    {prod:1,  lab:'Ford',prix:'100', qual:'bon'},
    {prod:1,  lab:'Ford',prix:'100', qual:'bon'},
    {prod:1,  lab:'Ford',prix:'100', qual:'bon'},
    {prod:1,  lab:'Ford',prix:'100', qual:'bon'},
    {prod:1,  lab:'Ford',prix:'100', qual:'bon'}
];

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
                                        
                                        <ul className="row p-2  u-container-layout u-valign-top u-container-layout-1" style={{textAlign:'center'}}>
                                            <h5 className="u-text u-text-1">Sélectionez vos produits.</h5>
                                            <div style={{width:'100%', padding:12}}>
                                                <tr>
                                                    <th className="p-3">produits</th>
                                                    <th className="p-3">Quantité</th>
                                                    <th className="p-3">Prix</th>
                                                    <th className="p-3">Qualité</th>
                                                    <th className="p-3"></th>
                                                </tr>
                                                {cars.map((car) =><tr><td className="spacing_d"> {car.prod} </td> <td className="spacing_d"> {car.lab} </td><td className="spacing_d"> {car.prix} </td> <td className="spacing_d"> {car.qual} </td><td className="spacing_d"> {<input type="checkbox"/>} </td></tr>)}
                                            </div>
                                        </ul>        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  " style={{backgroundColor:"white", marginLeft:"0px"}}>
                               
                                <div className="m-1 p-4 row" style={{backgroundColor:"", textAlign:'center', paddingTop:'15px', paddingBottom:'20px'}}>
                                    <h5> Enregistrer vos données pour valider l'opération.</h5>
                                    <form>
                                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1" style={{paddingLeft:'20%', paddingRight:'20%'}}>    
                                            <input type="text" id="fname" name="fname"  className="u-align-center u-input" maxlength="20" placeholder="numéro"/><br/>
                                        </div>
                                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1" style={{paddingLeft:'20%', paddingRight:'20%'}}>
                                            <input type="text" id="lname" name="lname" className="u-align-center u-input" maxlength="20" width={""} placeholder="nom" /><br/>
                                        </div>
                                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1" style={{paddingLeft:'20%', paddingRight:'20%'}}>
                                            <input type="text" id="lname" name="lname" className="u-align-center u-input" maxlength="20" placeholder="numéro"/><br/>
                                        </div>

                                        <div className="row" style={{backgroundColor:"grey", textAlign:'center', paddingTop:'12px'}}>
                                            <h6> Résumé de votre commande </h6>
                                            {cars.map((car) => <p key={car.id}>{car.brand} </p>)}
                                        </div>

                                        <BtnSmt/>
                                    </form> 
                                </div>
                         
                            </div>
                        </div>
            </section>
        </>
    )
}

export default Commande;