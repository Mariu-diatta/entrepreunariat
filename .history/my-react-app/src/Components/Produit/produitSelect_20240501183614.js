import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import oui from './../../accueil/Site1/images/oui.png';

const ProduitSelected=(props)=>{

    
    return(
        <tr>
            <td className="spacing_d"> {props.prod} </td> 
            <td className="spacing_d"> {props.lab} </td>
            <td className="spacing_d"> {props.prix} </td> 
            <td className="spacing_d"> {props.qual} </td>
            <td className="spacing_d" >{props.codeColor?<Badge bg="secondary">/</Badge>:<img className='btn' value={props.prod}  onClick={props.onClick} src={oui} alt='cool' style={{borderRadius:'50%', border:'0px'}} />}</td>
        </tr>
    )

}

export default ProduitSelected;