import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../accueil/Site1/A-propos.css';
import '../accueil/Site1/Accueil.css';
import '../accueil/Site1/nicepage.css';
import '../accueil/Site1/LogIn.css';
import logo from "../accueil/Site1/images/logo_3.PNG";
import {useState} from "react";
import {Outlet, Link, useNavigate} from 'react-router-dom';
import LogoutButton from './bootstrapUI/btnLogOut.js';
import './../style.css';
import { signOut } from 'firebase/auth';
import { auth } from '../FirebaseUser/index.js';
import ModalPop from './modal.js';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';

const maCouleur=[
    {color:'white', backgroundColor:'rgb(220, 215, 215)', textAlign:'center', borderRadius:'5%', padding:'20px'},
    {color:'white', textAlign:'center'}
];

function HeaderBoot(props) {

  const [change, setChange]=useState(maCouleur[1]);
  const [change1, setChange1]=useState(maCouleur[1]);
  const [change2, setChange2]=useState(maCouleur[1]);
  const [change3, setChange3]=useState(maCouleur[1]);
  const [pageCompte, setPageCompte]=useState(false);

  const navigate=useNavigate();

  const logOut = ()=>{
    try {
      if(window.confirm("Vouvez-vous vraiment vous déconnecter?")){
        signOut(auth);
        props.changeHeaderState(null);
        navigate("/");
      }
    } catch (error) {
      alert("erreur de déconnexion");
    }
  };

  const privatepage=()=>{
      setPageCompte(true);
  };

  const notprivatepage=()=>{
    setPageCompte(false);
  };

  return (
    <div className='row ' style={{maxWidth:window.widt}}>
      <Navbar key={'lg'} expand={'lg'} className="header_ sticky-top " style={{backgroundColor:'rgb(8,8,8)'}}>
        <Container fluid>

          <Navbar.Brand href="#" className='d-flex flex-row'>
            <strong  className=' ' style={{color:'white', paddingLeft:'20px'}}>VirtualB</strong>
          </Navbar.Brand>

          <Navbar className='off_classe'> 
            {(props.valueHeaderState!==null) && pageCompte?<ModalPop/>:<nav></nav>}
          </Navbar>

          <Navbar.Toggle style={{backgroundColor:'white'}}  aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
          
          <Navbar.Brand className='row' style={{paddingLeft:'40px'}}>
              <div className='d-flex flex-row col-md-2' style={{color:'white', marginRight:'100px'}}>
                <Button variant='outline-primary' style={{border:'0px', color:'white'}}> Commerçants</Button>
              
                <Button variant='outline-primary' style={{border:'0px' , color:'white'}}> Acheteurs</Button>
                </div> 
          </Navbar.Brand>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'lg'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
            placement="end"
          > 
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
              <img src={logo} alt="..." width={100}/>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

              <Nav style={{paddingLeft:'100px', backgroundColor:'black'}}>
                  <Link className='p-2 ' to="/" style={change} onMouseOver={()=>setChange(maCouleur[0])} onMouseOut={()=>setChange(maCouleur[1])} onClick={notprivatepage}><small style={{color:''}} ><i className="p-2 d-flex flex-row fa fa-home fa-lg" aria-hidden="true" style={{color:'white'}}>Accueil</i> </small></Link>
                  
                  <Dropdown >
                    <Dropdown.Toggle variant="" id="dropdown-basic" style={{color:'blue'}}>
                      <Button variant='outline-primary' style={{border:'0px'}}>À propos</Button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{backgroundColor:'black'}}>
                      <Dropdown.Item href="/a_propos" style={{color:'grey'}}>Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" style={{color:'grey'}}>Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{color:'grey'}}>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {
                      (props.valueHeaderState!==null)?<Link  className='p-2 ' to="/admin" onClick={privatepage} ><small><i className="fa fa-user fa-lg " aria-hidden="true"></i> </small></Link>:<Link  className='p-2 ' to="/inscription" ><small><Button variant='outline-primary' style={{border:'0px', color:'white'}}>S'inscrire</Button></small></Link> 
                  }
                  {       
                      (props.valueHeaderState!==null) ?<LogoutButton onClick={logOut}/>:<Link  onMouseOver={()=>setChange2(maCouleur[0])} onMouseOut={()=>setChange2(maCouleur[1])} className='p-2' to="/login" ><Button variant='outline-primary' style={{color:'white'}}>Connexion</Button></Link>
                  }
              </Nav>

              <Form className="d-flex  flex-row " >
                <Form.Control
                  type="search"
                  placeholder="recherche"
                  className="mt-1 mb-1 p-2"
                  left
                  aria-label="Search"
                  maxLength={"45"}
                  style={{textAlign:'center', border:'opx'}}
                />
                <Button variant="success" className='mt-1 m-1  ' style={{backgroundColor:'rgba(123, 147, 201, 0.40)'}}><small>Search</small></Button>
              </Form>

            </Offcanvas.Body>

          </Navbar.Offcanvas>:''

        </Container>
        
      </Navbar>
      <Outlet />
    </div>
  );
}

export default HeaderBoot;