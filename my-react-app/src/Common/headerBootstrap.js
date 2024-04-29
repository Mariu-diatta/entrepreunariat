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
import {Outlet, Link, Navigate} from 'react-router-dom';
import LogoutButton from './bootstrapUI/btnLogOut.js';
import './../style.css';
import ModalPop from './modal.js';
import Dropdown from 'react-bootstrap/Dropdown';
import ContextApp from './context.js'; 


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
      console.log("Deconnecter: valeur de mon eta: "+this.initState());
      } 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='row' style={{maxWidth:window.widt}}>

      <Navbar key={'lg'} expand={'lg'} className="header_ sticky-top " style={{backgroundColor:'rgb(8,8,8)'}}>
       
        <Container fluid>

          <Navbar.Brand href="#" className='d-flex justify-content-start'>
            <strong  className=' ' style={{color:'white', paddingLeft:'20px'}}>VirtualB</strong>
          </Navbar.Brand>

          <Navbar className='off_classe'> 
            {
              (isConnected) && pageCompte?
                <ModalPop/>
                :
                <nav></nav>
            }
          </Navbar>

          <Navbar.Toggle   aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
          
          {   
            (isConnected)?

              <Navbar.Brand> 
              </Navbar.Brand>
              :
              <Navbar.Brand className='row' style={{paddingLeft:'40px'}}>

                  <div className='d-flex flex-row col-md-2' style={{color:'white', marginRight:'100px'}}>
                    <Button variant='outline-primary' style={{border:'0px', color:'grey'}}> Commerçants</Button>
                    <Button variant='outline-primary' style={{border:'0px' , color:'grey'}}> Acheteurs</Button>
                  </div> 

              </Navbar.Brand>
          }

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

            <Offcanvas.Body className='d-flex justify-content-end'>

              <Nav style={{ backgroundColor:'black'}}>
                  <Link className='p-2 ' to="/" style={change} onMouseOver={()=>setChange(maCouleur[0])} onMouseOut={()=>setChange(maCouleur[1])} onClick={notprivatepage}><nav className='d-flex flex-row p-1' ><small><i className=" fa fa-home fa-lg" aria-hidden="true" style={{color:'white'}}></i> Accueil</small> </nav></Link>
                  
                  <Dropdown >

                    <Dropdown.Toggle variant="" id="dropdown-basic" style={{color:'grey'}}>
                      <Button variant='outline-primary p-1' style={{borderColor:'grey', color:'grey'}}><small>À propos</small></Button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{backgroundColor:'black'}}>
                      <Dropdown.Item href="/a_propos" style={{color:'grey'}}>Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" style={{color:'grey'}}>Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" style={{color:'grey'}}>Something else</Dropdown.Item>
                    </Dropdown.Menu>

                  </Dropdown>

                  {
                      (isConnected)?<Link  className='p-2 ' to="/admin" onClick={privatepage} ><small><i className="fa fa-user fa-lg " aria-hidden="true"></i><small>  {sessionStorage.getItem('Email')}</small> </small></Link>:<Link  className='p-1' to="/inscription" ><small><Button variant='outline-primary' style={{border:'0px', color:'white'}}><small>S'inscrire</small></Button></small></Link> 
                  }
                  {       
                      (isConnected) ?<LogoutButton onClick={()=>logOut()}/>:<Link  onMouseOver={()=>setChange2(maCouleur[0])} onMouseOut={()=>setChange2(maCouleur[1])} className='p-1' to="/login" ><Button variant='outline-primary' style={{color:'white'}}><small>Connexion</small></Button></Link>
                  }
                <small>
                  <Form className="d-flex flex-row" style={{paddingRight:'5px', paddingLeft:'10px'}}>

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
                </small>

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