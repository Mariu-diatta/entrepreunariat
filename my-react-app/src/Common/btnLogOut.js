import {Navigate, Outlet, Link} from 'react-router-dom';
import { useState } from 'react';


const maCouleur=[
  {color:'blue'},
  {color:'black'}
]

const LogoutButton=(props)=>{

  const [change4, setChange4]=useState(false)

  const changeColor4=()=>{
    if (change4) {
        setChange4(false)
    }else  setChange4(true)
  }

  return (
    <Link to='#' className=' pe-4 '  style={change4?maCouleur[0]:maCouleur[1]} onMouseOver={changeColor4} onMouseOut={changeColor4} onClick={props.onClick}>
      Déconnexion
    </Link>
  );
}

export default LogoutButton;