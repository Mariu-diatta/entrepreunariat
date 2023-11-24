import {Navigate, Outlet, Link} from 'react-router-dom';
import { useState } from 'react';


const maCouleur=[
  {color:'blue'},
  {color:'black'}
]

const LogoutButton=(props)=>{

  const [change4, setChange4]=useState(maCouleur[1])


  return (
    <Link to='#' className=' pe-4 '  style={change4} onMouseOver={()=>setChange4(maCouleur[0])} onMouseOut={()=>setChange4(maCouleur[1])} onClick={props.onClick}>
      <small>Déconnexion</small>
    </Link>
  );
}

export default LogoutButton;