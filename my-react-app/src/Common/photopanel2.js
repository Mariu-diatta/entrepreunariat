import { Link } from 'react-router-dom';
import { useState } from "react";

const Photopanel2 = (props)=>{
    const [col, setCol] =useState(false)
    return(
        <div className="card m-0" onMouseOut={()=> setCol(false)} onMouseOver={()=> setCol(true)} style={{backgroundColor:col?"rgb(248,245,244)":""}}>
            <img src={props.image} className="card-img-top" alt="..." style={{width:"100%",height:"70%"}} />
            <div className="card-body">
            <h6 className="card-title">{props.title}</h6>
                <p><Link to={'/aboutUser'}>Savoir plus! </Link><Link to={'/commande'} style={{color:"green"}}>Passez une commade.</Link></p>
            </div>
        </div>
    )
}

export default Photopanel2;