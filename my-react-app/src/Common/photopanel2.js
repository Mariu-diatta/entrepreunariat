import { Link } from 'react-router-dom';
import { useState } from "react";

const couleur ="rgb(248,245,244)";
const couleurInit ="white";

const Photopanel2 = (props)=>{

    const [couleurImageActivate, setCouleurImage] =useState(false)

    return(
        <div onMouseOut={()=> setCouleurImage(false)} onMouseOver={()=> setCouleurImage(true)} style={{backgroundColor:couleurImageActivate?couleur:couleurInit}}>
            <img src={props.image} className="card-img-top" alt="..." width={100} height={250}/>
            <div className="card-body">
            <h6 className="card-title">{props.title}</h6>
             <Link to='/aboutUser'><small>Savoir plus!</small>  </Link><Link to='/commande' style={{color:"black"}}><small>Passez une commade.</small> </Link>  
            </div>
        </div>
    )
}

export default Photopanel2;



