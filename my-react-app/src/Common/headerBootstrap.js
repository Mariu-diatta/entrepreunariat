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
import {Outlet, Link} from 'react-router-dom';
import LogoutButton from './btnLogOut'

const maCouleur=[
    {color:'blue'},
    {color:'black'}
]

function HeaderBoot(props) {

  const [change, setChange]=useState(maCouleur[1])
  const [change1, setChange1]=useState(maCouleur[1])
  const [change2, setChange2]=useState(maCouleur[1])
  const [change3, setChange3]=useState(maCouleur[1])

  const cancelConnect=()=>{
    if(window.confirm("Vouvez-vous vraiment vous déconnecter?")){
      if(props.valueHeaderState){
        props.changeHeaderState(false)
      }
    }
  }

  return (
    <>
      <Navbar key={'lg'} expand={'lg'} className="sticky-top bg-body-tertiary p-0">
        <Container fluid>
          <Navbar.Brand href="#">
          <img src={logo} alt="..." width={50} height={50}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
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
              <Nav className="justify-content-end flex-grow-1 " >
                <Link className='pe-4' to="/" style={change} onMouseOver={()=>setChange(maCouleur[0])} onMouseOut={()=>setChange(maCouleur[1])}><small>Accueil</small></Link>
                <Link className='pe-4' to="/a_propos" style={change3} onMouseOver={()=>setChange3(maCouleur[0])} onMouseOut={()=>setChange3(maCouleur[1])}><small>A propos</small></Link>
                  {
                      (props.valueHeaderState)?<Link style={change1} onMouseOver={()=>setChange1(maCouleur[0])} onMouseOut={()=>setChange1(maCouleur[1])} className='pe-4' to="/admin" ><small>Compte</small></Link>:<Link style={change1} onMouseOver={()=>setChange1(maCouleur[0])} onMouseOut={()=>setChange1(maCouleur[1])} className='pe-4' to="/inscription" ><small>Inscription  </small></Link> 
                  }
              
                  {       
                      (props.valueHeaderState)?<LogoutButton onClick={cancelConnect}/>:<Link style={change2} onMouseOver={()=>setChange2(maCouleur[0])} onMouseOut={()=>setChange2(maCouleur[1])} className='pe-4' to="/login" ><small>Connecter</small></Link>
                  }
              </Nav>
              <Form className="d-flex mr-2">
                <Form.Control
                  type="search"
                  placeholder="recherche"
                  className="pe-2 pr-3"
                  aria-label="Search"
                />
                <Button variant="" style={{backgroundColor:'grey', marginLeft:'0px'}}>Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default HeaderBoot;