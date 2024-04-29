import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const ProduitSelected=(props)=>{

    
    return(
        <tr>
            <td className="spacing_d"> {props.prod} </td> 
            <td className="spacing_d"> {props.lab} </td>
            <td className="spacing_d"> {props.prix} </td> 
            <td className="spacing_d"> {props.qual} </td>
            <td className="spacing_d" >{props.codeColor?<Badge bg="secondary">v</Badge>:<Button value={props.prod}  onClick={props.onClick} >v</Button>}</td>
        </tr>
    )

}

export default ProduitSelected;