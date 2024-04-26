import { useEffect, useState } from "react";
import im from "../accueil/Site1/images/3454.jpg";
import BtnSmt from "./buttonSubmit";
import ProduitSelected from "./Produit/produitSelect";
import { useContext } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row.js';
import Table from 'react-bootstrap/Table';

const cars = [
    {prod:0,  lab:'Ford',prix:'100', qual:'bon'},
    {prod:1,  lab:'grey',prix:'100', qual:'bon'},
    {prod:2,  lab:'blue',prix:'100', qual:'bon'},
    {prod:3,  lab:'red',prix:'100', qual:'bon'},
    {prod:4,  lab:'Ford',prix:'100', qual:'bon'},
    {prod:5,  lab:'Ford',prix:'100', qual:'bon'}
];

const Commande =()=>{
    const [data, setData]=useState([]);
    const [valueIndex, setValueIndex]=useState(false);
    
    let index=2;
    
    let AllData = [];

    let value_=true;

    const addData=(e)=>{



        for (let index = 0; index < AllData.length; index++) {
            var element = AllData[index];
            if (element==cars[e.target.value]) {
                delete AllData[index];
                alert("suppression réussie");
                break;
                value_=false;
            }  
        }
        if (value_){
           AllData.push(cars[e.target.value]); 
          
        }  
        value_=true;  
    };

    useEffect(()=>{setData(AllData)},[1000]);

    const afficherTout=()=>{
        if(AllData.length>index){
            setData(AllData);
            ++index;
            setValueIndex(true);
        }

    };

    const deletData=(e)=>{
         for (let index = 0; index < AllData.length; index++) {
            const element = AllData[index];
            if (element==cars[e.target.value]) {
                delete AllData[index];
                alert("suppression réussie");
            }
            
         }
    };

    return(
        <section className="container p-4 m-4" style={{ paddingTop:"1%", paddingBottom:"5%"}} >

            <div className="row">

                <div className="col-lg-5">

                    <div className="row">

                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500">
                            <div className="u-container-layout u-container-layout-1">
                                <img src={im} alt="" className="u-align-left u-expanded-width u-image " width={200} height={300}/>
                            </div>
                        </div>

                        <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                            
                            <ul className="row  u-container-layout u-valign-top u-container-layout-1" style={{textAlign:'center'}}>
                                <h5 className="u-text u-text-1">Sélectionez vos produits.</h5>
                                <table style={{width:'100%', padding:12}}>
                                    <tr>
                                        <th className="p-3">produits</th>
                                        <th className="p-3">Quantité</th>
                                        <th className="p-3">Prix</th>
                                        <th className="p-3">Qualité</th>    
                                        <th className="p-3"></th>
                                    </tr>
                                    {cars.map((car) =><ProduitSelected prod={car.prod}  lab={car.lab} prix={car.prix} qual={car.qual}  onClick={addData} />)}
                                </table>
                            </ul> 

                        </div>
                    </div>

                </div>

                <div className="col-lg-6  " style={{backgroundColor:"white", marginLeft:"0px"}}>
                    
                    <div className="m-1 p-4 row" style={{backgroundColor:"", textAlign:'center', paddingTop:'15px', paddingBottom:'20px'}}>
                        
                        <h5> Enregistrer vos données pour valider l'opération.</h5>

                        <form>
                            <FloatingLabel controlId="floatingPassword2" label="Votre nom" className=' mb-3'>
                                <Form.Control  id="floatingPassword2" name="nom" value=""  type="nom" placeholder="Enter a valid email address"  maxLength="30" className="u-align-center u-input" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword2" label="Votre prénom" className=' mb-3'>
                                <Form.Control  id="floatingPassword2" name="prenom" value=""  type="text" placeholder="Enter a valid email address"  maxLength="30" className="u-align-center u-input" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword2" label="Votre numéro" className=' mb-3'>
                                <Form.Control  id="floatingPassword2" name="tel" value=""  type="text" placeholder="Enter a valid email address"  maxLength="30" className="u-align-center u-input" />
                            </FloatingLabel>

                            <div className="row" style={{backgroundColor:"grey", textAlign:'center', paddingTop:'12px'}}>
                                <h6 style={{color:'white'}}> Résumé de votre commande </h6>
                                
                                <Table >
                                    <tr >
                                        <th className="p-3">produits</th>
                                        <th className="p-3">Quantité</th>
                                        <th className="p-3">Prix</th>
                                        <th className="p-3">Qualité</th>    
                                    </tr>
                                    
                                    {
                                        data.map((elem)=>
                                            <tr>
                                                <td>{elem.prod}</td>
                                                <td>{elem.lab}</td>
                                                <td>{elem.prix}</td>
                                                <td>{elem.qual}</td>
                                            </tr>
                                        )
                                    }
                                    
                                </Table >
                                
                            </div>

                            <button className='btn btn-success p-2 m-2' type="button" onClick={afficherTout}>{valueIndex?'valider':'afficher'}</button >
                        
                        </form> 
                    
                    </div>
                
                </div>

            </div>

        </section>
    )
}

export default Commande;