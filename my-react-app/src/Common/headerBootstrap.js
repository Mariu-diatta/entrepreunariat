import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../accueil/Site1/A-propos.css'
import '../accueil/Site1/Accueil.css'
import '../accueil/Site1/nicepage.css'
import '../accueil/Site1/LogIn.css'
import logo from "../accueil/Site1/images/logo_3.PNG"
import {useState} from "react"
import {Outlet, Link, useNavigate} from 'react-router-dom';
import LogoutButton from './btnLogOut'
import './../style.css'
import { signOut } from 'firebase/auth';
import { auth } from '../FirebaseUser/index.js';
import ModalPop from './modal.js';

const maCouleur=[
    {color:'white', backgroundColor:'rgb(220, 215, 215)', textAlign:'center', borderRadius:'30%'},
    {color:'black', textAlign:'center'}
]

function HeaderBoot(props) {

  const [change, setChange]=useState(maCouleur[1])
  const [change1, setChange1]=useState(maCouleur[1])
  const [change2, setChange2]=useState(maCouleur[1])
  const [change3, setChange3]=useState(maCouleur[1])
  const [pageCompte, setPageCompte]=useState(false)

  const navigate=useNavigate()

  const logOut = async()=>{
    try {
      if(window.confirm("Vouvez-vous vraiment vous déconnecter?")){
        await signOut(auth)
        props.changeHeaderState(null)
        navigate("/")
      }
    } catch (error) {
      alert("erreur de déconnexion")
    }
  }

  const privatepage=()=>{
      setPageCompte(true)
  }

  const notprivatepage=()=>{
    setPageCompte(false)
  }

  return (
    <div className='row style_head'>
      <Navbar key={'lg'} expand={'lg'} className="header_ sticky-top bg-body-tertiary p-0">
        <Container fluid>
          <Navbar.Brand href="#">
          <strong  style={{color:'black', paddingLeft:'20px'} }>Deal</strong>
          </Navbar.Brand>
          <Navbar className='off_classe'> 
            {(props.valueHeaderState!==null) && pageCompte?<ModalPop/>:<nav></nav>}
          </Navbar>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'lg'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
              <img src={logo} alt="..." width={100}/>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 " style={{textAlign:'center'}}>
                <Link className='p-2  ' to="/" style={change} onMouseOver={()=>setChange(maCouleur[0])} onMouseOut={()=>setChange(maCouleur[1])} onClick={notprivatepage}><small>Accueil</small></Link>
                <Link className='p-2 ' to="/a_propos" style={change3} onMouseOver={()=>setChange3(maCouleur[0])} onMouseOut={()=>setChange3(maCouleur[1])} onClick={notprivatepage}><small>A propos</small></Link>
                  {
                      (props.valueHeaderState!==null)?<Link style={change1} onMouseOver={()=>setChange1(maCouleur[0])} onMouseOut={()=>setChange1(maCouleur[1])} className='p-2 ' to="/admin" onClick={privatepage} ><small>Compte</small></Link>:<Link style={change1} onMouseOver={()=>setChange1(maCouleur[0])} onMouseOut={()=>setChange1(maCouleur[1])} className='p-2 ' to="/inscription" ><small>S'inscrire</small></Link> 
                  }
              
                  {       
                      (props.valueHeaderState!==null) ?<LogoutButton onClick={logOut}/>:<Link style={change2} onMouseOver={()=>setChange2(maCouleur[0])} onMouseOut={()=>setChange2(maCouleur[1])} className='p-2' to="/login" ><small>Connexion</small></Link>
                  }
              </Nav>
              <Form className="d-flex " >
                <Form.Control
                  type="search"
                  placeholder="recherche"
                  className="mt-1 mb-1 pr-3 pl-3"
                  aria-label="Search"
                  maxLength={"45"}
                  style={{textAlign:'center', border:'opx'}}
                />
                <Button variant="" className='mt-1 mb-1 ' style={{backgroundColor:'rgba(123, 147, 201, 0.40)', marginRight:'10px'}}><small>Search</small></Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default HeaderBoot;