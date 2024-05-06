import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const CoButton=(props)=>{
    return (
        <Link to='#' className='' onClick={props.onClick} >
            <Button  className="btn" variant={props.variant} onClick={props.onClick}>
            <small>{props.name}</small>
            </Button>
        </Link>
    );
  }

export default CoButton;