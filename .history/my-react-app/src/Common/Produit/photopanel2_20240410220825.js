import { Link } from 'react-router-dom';
import { useState } from "react";
import  './../../style.css'

const couleur ="rgb(248,245,244)";
const couleurInit ="white";

const Photopanel2 = (props)=>{

    const [couleurImageActivate, setCouleurImage] =useState(false)

    return(
        <div className='Card-space card  ' onMouseOut={()=> setCouleurImage(false)} onMouseOver={()=> setCouleurImage(true)} style={{backgroundColor:couleurImageActivate?couleur:couleurInit, width:'310px', height:'350px', paddingBottom:""}}>
         <img src={props.image} className="card-img-top" alt="..." width={100} height={180}/>
         <div className="card-body">
            <h6>{props.title}</h6>
            <p className="price">{props.price}</p>
            <Link to='/aboutUser'><small>Savoir plus!</small>  </Link><Link to='/commande' style={{color:"black"}}><small>Passez une commade.</small> </Link>  
         </div>
         <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
        </div>
       </div> 
    )
}

export default Photopanel2;



