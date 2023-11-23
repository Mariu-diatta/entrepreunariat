import {Navigate, Outlet, Link} from 'react-router-dom';
const LogoutButton=(props)=>{
    return (
      <button  className="btn" onClick={props.onClick}>
        <h6><Link>Déconnexion</Link></h6>
      </button>
    );
  }

  export default LogoutButton;