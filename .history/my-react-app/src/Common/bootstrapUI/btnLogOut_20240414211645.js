import { Link} from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const maCouleur=[
  {color:'blue'},
  {color:'black'}
];

const LogoutButton=(props)=>{

  const [change4, setChange4]=useState(maCouleur[1]);


  return (
    <>
      <Link to='#' className='p-2  '  style={change4} onMouseOver={()=>setChange4(maCouleur[0])} onMouseOut={()=>setChange4(maCouleur[1])} onClick={props.onClick}>
        <i className="fa fa-lg" aria-hidden="true"><Button variant='light'> Déconnexion </Button></i>
      </Link>
    </>
  );
}

export default LogoutButton;