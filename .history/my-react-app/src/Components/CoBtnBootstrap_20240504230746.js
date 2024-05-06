import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const CoButton=(props)=>{
    return (
        <Link to='#' className='' onClick={props.onClick} >
            <Button  variant={props.variant} style={{margin:'4px'}}>
            <small>{props.name}</small>
            </Button>
        </Link>
    );
  }

export default CoButton;