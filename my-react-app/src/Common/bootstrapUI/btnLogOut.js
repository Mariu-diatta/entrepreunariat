import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const LogoutButton=(props)=>{

  return (
    <>
      <Link to='#' className='' onClick={props.onClick} >
        <Button variant='outline-danger' style={{margin:'4px'}}><small> Déconnexion </small></Button> 
      </Link>
    </>
  );
}

export default LogoutButton;