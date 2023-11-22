import '../accueil/Site1/A-propos.css'
import '../accueil/Site1/Accueil.css'
import '../accueil/Site1/nicepage.css'
import '../accueil/Site1/LogIn.css'
import logo from "../accueil/Site1/images/logo_3.PNG"
import { Outlet, Link } from "react-router-dom";
import {useEffect, useState} from "react"

function  Header({valueHeaderState, changeHeaderState}){
    const [col, setCol]=useState({color:'black', 'statu':false})
    const [col1, setCol1]=useState({color:'black', 'statu':false})
    const [col2, setCol2]=useState({color:'black', 'statu':false})

    return(
      <>
          <nav className='sticky-top flex-row u-grey-25' style={{position:"", backgroundColor:"", width:"100%", paddingTop:"0px", marginTop:"0px",zIndex:120}}>
              <header className="u-clearfix u-header u-header" id="sec-d5e0" >
                <div className="row  p-0 " style={{marginLeft:"12px"}}>
                  <nav className='col-lg-2 '>
                    <a href="#" className="" style={{paddingDown:"0px"}}>
                      <img src={logo} className="m-3"  style={{  height: "auto", width: "40%" }}/>
                    </a>
                  </nav>
                  <nav className="col-lg-6 u-menu-1 " style={{paddingTop:"20px", marginBottom:"0px"}}>  
                    <div className="u-custom-menu u-nav-container" >
                      <ul className="u-nav u-unstyled u-nav-1">
                        <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" style={{padding: '10px 20px'}}><Link to="/" onMouseOut={()=>setCol({'color':"black", 'statut': false})} onMouseOver={()=>setCol({'color':"blue", 'statut': false})} style={col}><h6>Accueil</h6></Link></a>
                        </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" style={{padding: "10px 20px"}}><Link to="/a_propos" onMouseOut={()=>setCol1({'color':"black", 'statut': false})} onMouseOver={()=>setCol1({'color':"blue", 'statut': false})} style={col1}><h6>A propos</h6></Link></a>
                        </li>
                          <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" style={{padding: "10px 20px", color:"green"}}><Link to="/contact" onMouseOut={()=>setCol2({'color':"black", 'statut': false})} onMouseOver={()=>setCol2({'color':"blue", 'statut': false})} style={col2}>{valueHeaderState?<a></a>:<h6>Contact</h6>}</Link></a>
                        </li>
                        <li className="u-nav-item">
                          <a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" style={{padding: "10px 20px", color:"green"}}>
                          {
                          valueHeaderState?<Link to="/admin"><h6>Compte</h6> </Link>:<Link to="/inscription"><h6>Inscription</h6></Link>   
                          }
                          </a>
                        </li>                    
                        <li className="u-nav-item">
                          <a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" style={{padding:"10px 20px" }}>
                            <button className="button-sucess btn">
                              {
                                valueHeaderState? <Link to="/login" onClick={()=>changeHeaderState(false)}><h6>Deconnecter</h6></Link>:<Link to="/login"><h6>Connecter</h6></Link>
                              }
                            </button>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </header>
          </nav>
          <Outlet />
      </>
    );
  }
  export default Header;