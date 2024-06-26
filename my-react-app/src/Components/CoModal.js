import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import "./../style.css";
const couleurBlue = {backgroundColor:"", color:"blue"};
//const couleurBlack= {backgroundColor:"", color:"black"};
const couleurWhite = {backgroundColor:"", color:"black"};

function ModalPop() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);    
  const [couleurCommande, setCouleurCommande]=useState(couleurWhite);   
  const [couleurAdherant, setcouleurAdherant]=useState(couleurWhite);
  const [couleurMessage, setCouleurMessage]=useState(couleurWhite);
  const [commandeActivate, setCommandeActivate]=useState(false);
  const [adherantActivate, setAdherantActivate]=useState(false);
  const [messageActivate, setMessageActivate]=useState(false);


  return (
    <>
      <Button variant="" onClick={handleShow}>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>

          <Modal.Title>Activités Compte</Modal.Title>

        </Modal.Header>

        <Modal.Body>

            <nav className='.off_test sticky-top u-align-center   col-lg-2'>

                <ul>
                    <li>  <button className='code_u btn' onClick={()=>messageActivate?setMessageActivate(false):setMessageActivate(true)} onMouseOver={()=>setCouleurMessage(couleurBlue)} onMouseOut={()=>setCouleurMessage(couleurWhite)} style={couleurMessage}><small>Messages</small></button></li>
                    { 
                        (messageActivate)?
                            <nav style={{backgroundColor:'white'}}>
                                <ul >
                                    <li> <Link to="/" ><small>Nouveaux Messages</small></Link></li>
                                    <li> <Link to="#" ><small>Anciencs Messages</small></Link></li>
                                </ul>
                            </nav>
                            : 
                            <nav> </nav>
                
                    }

                </ul>

                <ul>
                    <li > <button className='code_u btn' onClick={()=>adherantActivate?setAdherantActivate(false):setAdherantActivate(true)}  onMouseOver={()=>setcouleurAdherant(couleurBlue)} onMouseOut={()=>setcouleurAdherant(couleurWhite)} style={couleurAdherant}><small>Adherants</small></button></li>
                    {  
                        (adherantActivate)?
                            <nav style={{backgroundColor:'white'}}>
                                <ul >
                                    <li> <Link to="#" ><small>Nouveaux Adhérants</small></Link></li>
                                    <li> <Link to="#" ><small>Anciens Adhérants</small></Link></li>
                                </ul>
                            </nav>
                            :
                            <nav></nav>
                    }
                </ul>

                <ul>
                    <li > <button className='code_u btn' onClick={()=>commandeActivate?setCommandeActivate(false):setCommandeActivate(true)} onMouseOver={()=>setCouleurCommande(couleurBlue)} onMouseOut={()=>setCouleurCommande(couleurWhite)}  style={couleurCommande}><small>Commandes</small></button></li>
                    {                        
                        (commandeActivate)?
                            <nav style={{backgroundColor:'white'}}>
                                <ul>
                                    <li> <Link to="#" ><small>Commandes réalisées</small></Link></li>
                                    <li> <Link to="#" ><small>Commandes programées</small></Link></li>
                                    <li> <Link to="#" ><small>Commandes en cours</small></Link></li>
                                    <li> <Link to="#" ><small>Commandes prêtes</small></Link></li>
                                </ul>
                            </nav>
                            : 
                            <nav></nav>
                    } 
                </ul>

            </nav>

        </Modal.Body>

      </Modal>
    </>
  );
}

export default ModalPop;