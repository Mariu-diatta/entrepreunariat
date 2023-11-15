import { Link } from "react-router-dom";

const ZeroPage =()=>{

    return(
        <>
            <p>Ve venew de vous déconnecter </p>
            <Link to='/'> page accueil</Link>
            {
                localStorage.setItem("etatConection",false )
            }
        </>
    )
}

export default  ZeroPage;