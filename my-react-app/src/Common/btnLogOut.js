import {Navigate, Outlet, Link} from 'react-router-dom';
import { useState } from 'react';


const maCouleur=[
  {color:'blue'},
  {color:'black'}
]

const LogoutButton=(props)=>{

  const [change2, setChange2]=useState(false)

  const changeColor2=()=>{
  
    if (change2) {
        setChange2(false)
    }else  setChange2(true)
  }

  return (
    <Link to='#' className=' pe-4 '  style={change2?maCouleur[0]:maCouleur[1]} onMouseOver={changeColor2} onMouseOut={changeColor2} onClick={props.onClick}>
      Déconnexion
    </Link>
  );
}

export default LogoutButton;