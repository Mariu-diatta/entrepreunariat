import { useEffect, useState } from "react";
import im from "../ImageCore/images/3454.jpg";
import ProduitSelected from "../Produit/CoProduitSelect";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import AlertBootstrap from "../CoAlertBootSrap";
import Footer from "../CoFooterBoostrap";
import suprim from './../ImageCore/images/supprimer.png';


   const Commande =()=>{
   // Tableaux d'origine et de destination
    const [sourceArray, setSourceArray] = useState( [
        {prod:0,  lab:'Ford',prix:'100', qual:'bon'},
        {prod:1,  lab:'grey',prix:'100', qual:'bon'},
        {prod:2,  lab:'blue',prix:'100', qual:'bon'},
        {prod:3,  lab:'red',prix:'100', qual:'bon'},
        {prod:4,  lab:'Ford',prix:'100', qual:'bon'},
        {prod:5,  lab:'Ford',prix:'100', qual:'bon'}
    ]);

    const [useData, setUseData]=useState({nom:'',prenom:'',numero:''});
    const [nom, setNom]=useState('');
    const [prenom, setPrenom]=useState('');
    const [numero, setNumero]=useState('');
    const [validerCommande, setValiderCommande]=useState(false);
    const [summettreCommande, setSummettreCommande]=useState(false);
    const [destinationArray, setDestinationArray] = useState([]);
    const [codeValidation,setCodeValidation]=useState(false);
    const [code,setCode]=useState(null);
    const [codeColor,setCodeColor]=useState(false);

    useEffect(()=>{
        setValiderCommande(validerCommande);
        setCodeColor(codeColor);
    }, [summettreCommande, validerCommande, codeColor])

    const commandeSumit=(e)=>{
        setCodeColor(true);
        setSummettreCommande(true);
    }

    // fonction annuler la commande
    const commandAnnuler=()=>{
        if(window.confirm("Voulez-vous vraiment annuler la commande?")){
        }
    };

    const entrerCodeValidation=()=>{
        setCodeValidation(true);
    }

    //validation commande
    const validate=(e)=>{
        if(window.confirm("Voulez-vous vraiment valider la commande?")){
            setValiderCommande(true);
        }
    };

    //submit post 
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUseData({nom:nom,prenom:prenom,numero:numero});
        if (useData.nom==='' || useData.nom==='' || useData.nom==='') {
            console.log(" Données utilisateurs incomplètes ");
        }
    };

    // Fonction pour sélectionner un élément de la source et l'ajouter à la destination
    const selectAndAddToDestination = (index) => {
        // Copie de l'élément sélectionné depuis la source
        if(!summettreCommande){
            const selectedElement = sourceArray[index];
            // Copie de la sourceArray sans l'élément sélectionné
            const updatedSourceArray = sourceArray.filter((_, i) => i !== index);
            // Mise à jour des tableaux
            setSourceArray(updatedSourceArray);
            setDestinationArray(prevArray => [...prevArray, selectedElement]);
            destinationArray.sort((a,b)=>a.prod-b.prod);
            sourceArray.sort((a,b)=>a.prod-b.prod);
        }
    };

    const supprimerElement= (index) => {
        const selectedElementToDelete=destinationArray[index];
        const updateDestinationArray=destinationArray.filter((_,i)=>i!==index);
        setDestinationArray(updateDestinationArray);
        setSourceArray(prevArray => [...prevArray, selectedElementToDelete]);
        destinationArray.sort((a,b)=>a.prod-b.prod);
        sourceArray.sort((a,b)=>a.prod-b.prod);
        
    };

    return(

        <div className="row" >
            <div className="container mb-5 pb-5" >
            { 
                validerCommande?

                <AlertBootstrap/>
                :
                <div className="row ms-1 ps-1 me-1 pe-1">

                    <div className="col-lg-6">

                        <div className="row">

                            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500">
                                
                                <div className="u-container-layout u-container-layout-1">
                                    <Image src={im} alt="" className="u-align-left u-expanded-width u-image " width={200} height={300} rounded/>
                                </div>

                            </div>

                            <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                                
                                <ul className="row  u-container-layout u-valign-top u-container-layout-1" style={{textAlign:'center'}}>
                                    
                                    <h5 className="u-text u-text-1" style={{color:'grey'}}>Sélectionez vos produits.</h5>

                                    <Table >

                                        <thead>
                                            <tr>
                                                <th className="p-3">Produits</th>
                                                <th className="p-3">Quantité</th>
                                                <th className="p-3">Prix</th>
                                                <th className="p-3">Qualité</th>    
                                                <th className="p-3">Choix</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                sourceArray.map((car, index) =><ProduitSelected prod={car.prod}  lab={car.lab} prix={car.prix} qual={car.qual} onClick={() => selectAndAddToDestination(index)} codeColor={codeColor} />)
                                            }  
                                        </tbody>

                                    </Table>

                                </ul> 

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6" >
                        
                        <div className="m-1 p-4 row" style={{textAlign:'center'}}>
                            
                            <h5 style={{color:'grey'}}> Enregistrer vos données pour valider l'opération.</h5>

                            <form onSubmit={handleSubmit}>
                                <FloatingLabel controlId="floatingPassword2" label="Votre nom" className=' mb-3'>
                                    <Form.Control  onChange={(e)=>setNom(e.target.value)} name={nom} value={nom}  type="text" placeholder="Enter a valid nom address"  maxLength="30" className="u-align-center u-input" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword2" label="Votre prénom" className=' mb-3'>
                                    <Form.Control   onChange={(e)=>setPrenom(e.target.value)} name={prenom} value={prenom}  type="text" placeholder="Enter a valid prenom address"  maxLength="30" className="u-align-center u-input" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword2" label="Votre numéro" className=' mb-3'>
                                    <Form.Control  onChange={(e)=>setNumero(e.target.value)}  name={numero} value={numero} type="text" placeholder="Enter a valid numéro address"  maxLength="30" className="u-align-center u-input" />
                                </FloatingLabel>

                                <div className="row" style={{textAlign:'center', paddingTop:'12px'}}>
                                
                                    <h6 style={{color:'grey'}}> Résumé de votre commande </h6>
                                    
                                    <Table>

                                        <thead>
                                            <tr>
                                                <th className="p-3">Produits</th>
                                                <th className="p-3">Quantité</th>
                                                <th className="p-3">Prix</th>
                                                <th className="p-3">Qualité</th> 
                                                <th className="p-3">Supprimer</th> 
                                            </tr>   
                                        </thead>

                                        <tbody>
                                            {
                                                destinationArray.map((el,index)=>

                                                    <tr key={index}>
                                                        <td>{el.prod}</td>
                                                        <td>{el.lab}</td>
                                                        <td>{el.prix}</td>
                                                        <td>{el.qual}</td>
                                                        <td>{summettreCommande?<Badge bg="secondary">Success</Badge>:<img src={suprim} alt='' className="btn m-0 p-0" style={{backgroundColor:'red', borderRadius:'30px'}} onClick={() =>supprimerElement(index)}/>}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>  
                                    </Table >
                                    
                                </div>
                                    {
                                        (summettreCommande) && !codeValidation?

                                        <div style={{fontFamily:'system-ui', textAlign:'center', color:'green'}}>
                                            Bravo!!! Vous avez fait des choix.<br/> 
                                            Veullez vérifier votre portable pour renseigner le code.<br/>
                                            <input type='number' name={code} value={code} onChange={(e)=>setCode(e.target.value)} />
                                        </div>
                                        :
                                        <p id="mon_id" style={{color:'red'}}></p>
                                    }

                                    {   
                                        (destinationArray.length!==0)?
                                        <div>
                                            {  
                                                summettreCommande && codeValidation?                             
                                                    <nav>
                                                        <button type="submit" className='btn btn-success p-2 m-2' onClick={validate}> Valider</button >
                                                        <button type="submit" className='btn btn-danger p-2 m-2' onClick={commandAnnuler}> Supprimer</button >
                                                    </nav>
                                                    :
                                                    <nav></nav >
                                            }                                        
                                        </div> 
                                        :
                                        <nav> 
                                        </nav>     
                                    }    

                            </form> 
                            {
                                (destinationArray.length!==0) && !summettreCommande?
                                <nav> 
                                    <button  className='btn btn-success p-2 m-2' onClick={commandeSumit}> Soumettre</button>
                                </nav>
                                :
                                <nav>
                                    {   summettreCommande && !codeValidation?
                                        <nav>
                                            <button  className='btn btn-success p-2 m-2' onClick={entrerCodeValidation}> Valider le code</button >
                                            <button  className='btn btn-danger p-2 m-2' onClick={commandAnnuler}> Supprimer</button >
                                        </nav>
                                        :
                                        <nav></nav>
                                    }
                                </nav>
                            }
                        
                        </div>
                    
                    </div>

                </div>
            }
            </div>
            <Footer/>
        </div>
    )
}

export default Commande;