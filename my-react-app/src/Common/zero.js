import { useState } from "react";
import { Link } from "react-router-dom";

const ZeroPage =()=>{
    return(
        <>
            <p>Ve venew de vous déconnecter </p>
            <Link to='/'> page accueil</Link>
            <p>Ve venew de vous déconnecter </p>    
        </>
    )
}

export default  ZeroPage;