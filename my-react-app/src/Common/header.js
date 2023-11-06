    import '../accueil/Site1/A-propos.css'
    import '../accueil/Site1/Accueil.css'
    import '../accueil/Site1/nicepage.css'
    import '../accueil/Site1/LogIn.css'
    import '../accueil/Site1/Post-Template.css'
    import '../accueil/Site1/Blog-Template.css'
    import logo from "../accueil/Site1/images/logo_3.PNG"

  function Header(){
    return(
      <header className="u-clearfix u-header u-header" id="sec-d5e0" >
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <a href="#" className="u-image u-logo u-image-1">
          <img src={logo} className="u-logo-image"  style={{  height: "50px", width: "50px" }}/>
        </a>
        <nav className=" u-menu-1">
          <div className="menu-collapse" style={{fontSize: "1rem", letterSpacing: "0px"}}>
            <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-text-shadow u-custom-text-shadow-blur u-custom-text-shadow-color u-custom-text-shadow-transparency u-custom-text-shadow-x u-custom-text-shadow-y u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">

            </a>
          </div>
          <div className="u-custom-menu u-nav-container" >
            <ul className="u-nav u-unstyled u-nav-1">
                <li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" href="Accueil.html" style={{padding: '10px 20px'}}>Accueil</a>
                </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" href="A-propos.html" style={{padding: "10px 20px"}}>A propos</a>
                </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" href="A-propos.html#sec-2062" style={{padding: "10px 20px", color:"green"}}>Contact</a>
                </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" href="A-propos.html#sec-2062" style={{padding: "10px 20px", color:"green"}}>Inscription</a>
                </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-4-light-1 u-text-palette-1-base" href="LogIn.html" style={{padding:"10px 20px" }}><button className="button-sucess btn"> LogIn </button></a>
                </li>
            </ul>
          </div>
        </nav>
          </div>
      </header>
    );
  }
  export default Header;