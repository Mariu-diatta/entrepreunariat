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
import {useState, useContext, useEffect} from "react";
import {Outlet, Link, Navigate, NavLink} from 'react-router-dom';
import LogoutButton from './bootstrapUI/btnLogOut.js';
import './../style.css';
import ModalPop from './modal.js';
import Dropdown from 'react-bootstrap/Dropdown';
import ContextApp from './context.js'; 
import Accordion from 'react-bootstrap/Accordion';
import TooltipLayer from './overLayer';
const MessageCommerçants="Clicker pour vous inscrirenpm install en tant que commerçant et avoir des informations";
const MessageAcheteurs="Clicker pour vous inscrire en tant que acheteurs et avoir des informations";


const maCouleur=[
    {color:'white', backgroundColor:'grey'},
    {color:'white', backgroundColor:'black', borderRadius:'0px', padding:'10px !important'}
];

function HeaderBoot(props) {

  const [change, setChange]=useState(maCouleur[1]);
  const [change1, setChange1]=useState(maCouleur[1]);
  const [change2, setChange2]=useState(maCouleur[1]);

  const [pageCompte, setPageCompte]=useState(false);
  const {isConnected,login, logout}=useContext(ContextApp);

  //That part of the code is always rendering because it is in the header which is in evry page
  useEffect(()=>{
    if(sessionStorage.getItem('access_token')){
      console.log('header: Je suis en refresh login')
      login();
      <Navigate to="/admin" />
    }else  {
      console.log('Header: Je suis en refresh logout')
      logout();
      <Navigate to="/login"/> 
    }
  }, [isConnected]);

  const notprivatepage=()=>{
    setPageCompte(false);
  };

  const privatepage=()=>{
    setPageCompte(true);
  };

  const logOut=()=>{
    try {
      if(window.confirm("Vouvez-vous vraiment vous déconnecter?")){
      logout();
      } 
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className='container-fluid p-0 m-0'>
      <Navbar variant="underline"  defaultActiveKey="/" key={'lg'} expand={'lg'} className="header_ sticky-top m-0 p-0 " style={{backgroundColor:'rgb(8,8,8)', borderRadius:'5px'}}>
        <Container fluid>

          <Navbar.Brand href="#" className='d-flex justify-content-start'>
            <strong  className='me-3' style={{color:'white', paddingLeft:'20px', margin:'0px'}}>VirtualB</strong>
          </Navbar.Brand>

          <Navbar className='off_classe'> 
            {
                (isConnected) && pageCompte?
                  <ModalPop/>
                :
                  <nav>
                  </nav>
            }
          </Navbar>

          <Navbar.Toggle   aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
          
          {   
            (isConnected)?

              <Nav> 
              </Nav>
              :
              <div  className='m-0 p-0'>

                <NavLink to='/a_propos' className=''>
                  <TooltipLayer message={ MessageCommerçants} >
                    <i className=" fa fa-lg" aria-hidden="true">
                      <Button  className=' mb-0'  variant='outline-primary' style={{border:'0px', color:'grey'}}>
                        Commerçants
                      </Button>
                    </i>
                  </TooltipLayer>
                </NavLink>

                <NavLink to='/login'  className=''>
                  <TooltipLayer message={MessageAcheteurs}>
                  <i className=" fa fa-lg" aria-hidden="true">
                    <Button className=' mb-0'  variant='outline-primary' style={{border:'0px' , color:'grey'}}>
                     Acheteurs
                    </Button>
                  </i>
                  </TooltipLayer>
                </NavLink>

              </div>
          }

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'lg'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
            placement="end"
            className='navOf'
          > 
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
              <img src={logo} alt="..." width={100}/>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className='d-flex justify-content-end'>

              <Nav className='nav_style'>

                  <NavLink className=' ' to="/" style={change} onMouseOver={()=>setChange(maCouleur[0])} onMouseOut={()=>setChange(maCouleur[1])} onClick={notprivatepage}>
                   
                    <TooltipLayer message={"Accueil"}> 
                        <small>
                          <i className=" pe-3 ps-3 pt-3 fa fa-home fa-lg" aria-hidden="true"></i>
                        </small>
                    </TooltipLayer> 

                  </NavLink>
                  
                  <Dropdown >
                
                    <Dropdown.Toggle variant="" id="dropdown-basic" >
                  
                        <Accordion  className='  u-align align-center'>
                          <Accordion.Header style={{margin:'0px', height:'auto' }}>
                          
                            <small className='pb-3'>À propos</small>
                            
                          </Accordion.Header>
                        </Accordion >
                      
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu style={{backgroundColor:'black'}}>
                      <Dropdown.Item href="/a_propos" style={{color:'grey'}}>Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" style={{color:'grey'}}>Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{color:'grey'}}>Something else</Dropdown.Item>
                    </Dropdown.Menu>

                  </Dropdown>

                  {
                    (isConnected)?

                      <nav className='d-flex flex-row'>
                        <Nav.Link  className='home_d mb-0 mt-0' href="/admin"  style={change1} onMouseOver={()=>setChange1(maCouleur[0])} onMouseOut={()=>setChange1(maCouleur[1])}  onClick={privatepage}>
                          
                          <TooltipLayer message={"Compte de "+ sessionStorage.getItem('Email')}> 
                            
                            <small className='pb-3'><i className="ms-3 me-3  fa fa-user fa-lg" aria-hidden="true"></i></small>
                            
                          </TooltipLayer>

                        </Nav.Link>

                        <LogoutButton className='ms-3 me-3 logInOut' onClick={()=>logOut()}/>
                      </nav>
                    :
                      <nav className='pt-2 ms-2  me-3  mt-0 row'>
                        <NavLink className='style_navlink col-6 ' to="/inscription" > 
                            <small>
                              S'inscrir
                            </small>
                        </NavLink> 
                        <NavLink className='style_navlink col-6 ' to="/login" >
                            <small>
                              Connexion
                            </small>
                        </NavLink>
                      </nav>
                  }

                <Form className="d-flex search_class flex-row" style={{paddingRight:'5px', paddingLeft:'10px'}}>

                  <Form.Control
                    type="search"
                    placeholder="recherche"
                    className="mt-1 mb-1"
                    left
                    aria-label="Search"
                    maxLength={"45"}
                    style={{textAlign:'center', border:'opx'}}
                  />
                  
                  <Button variant="success" className='mt-1 m-1  ' style={{backgroundColor:'rgba(123, 147, 201, 0.40)'}}><small>Search</small></Button>
                  
                </Form>
              
              </Nav>

            </Offcanvas.Body>

          </Navbar.Offcanvas>

        </Container>
        
      </Navbar>

      <Outlet />
    </div>
  );
}

export default HeaderBoot;