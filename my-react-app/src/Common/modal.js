import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom"
import "./../style.css"
const couleurBlue = {backgroundColor:"", color:"blue"}
const couleurBlack= {backgroundColor:"", color:"black"}
const couleurWhite = {backgroundColor:"", color:"black"}

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
        Activités
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Activités Compte</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className='u-align-center off_classe' style={{position:'sticky'}}>
                <ul>
                    <li><small>Messages</small></li>

                        <nav style={{backgroundColor:'white'}}>
                        <ul >
                            <li> <Link to="/" ><small>Nouveaux Messages</small></Link></li>
                            <li> <Link to="#" ><small>Anciencs Messages</small></Link></li>
                        </ul>
                        </nav>
                </ul>
                <ul>
                    <li ><small>Adherants</small></li>

                        <nav style={{backgroundColor:'white'}}>
                            <ul >
                                <li> <Link to="#" ><small>Nouveaux Adhérants</small></Link></li>
                                <li> <Link to="#" ><small>Anciens Adhérants</small></Link></li>
                            </ul>
                        </nav>
                </ul>
                <ul>
                    <li ><small>Commandes</small></li>

                        <nav style={{backgroundColor:'white'}}>
                            <ul>
                                <li> <Link to="#" ><small>Commandes réalisées</small></Link></li>
                                <li> <Link to="#" ><small>Commandes programées</small></Link></li>
                                <li> <Link to="#" ><small>Commandes en cours</small></Link></li>
                                <li> <Link to="#" ><small>Commandes prêtes</small></Link></li>
                            </ul>
                        </nav>
                </ul>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPop;