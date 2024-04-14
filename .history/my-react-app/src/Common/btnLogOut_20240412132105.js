import { Link} from 'react-router-dom';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';


const maCouleur=[
  {color:'blue'},
  {color:'black'}
]

const LogoutButton=(props)=>{

  const [change4, setChange4]=useState(maCouleur[1])


  return (
    <>
      <Link to='#' className='p-2  '  style={change4} onMouseOver={()=>setChange4(maCouleur[0])} onMouseOut={()=>setChange4(maCouleur[1])} onClick={props.onClick}>
        <small>
          <i className="fa fa-lg" aria-hidden="true">
            Déconnexion
            <BorderExample/>
          </i>
        </small>
      </Link>
    </>
  );
}

function BorderExample() {
  return <Spinner animation="border" />;
}

export default LogoutButton;