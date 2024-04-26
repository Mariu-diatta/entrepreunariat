const ProduitSelected=(props)=>{
    
    return(
        <tr>
            <td className="spacing_d"> {props.prod} </td> 
            <td className="spacing_d"> {props.lab} </td>
            <td className="spacing_d"> {props.prix} </td> 
            <td className="spacing_d"> {props.qual} </td>
            <td className="spacing_d">{<input value={props.prod}  onClick={props.onClick} type="checkbox"/>} </td>
        </tr>
    )

}

export default ProduitSelected;