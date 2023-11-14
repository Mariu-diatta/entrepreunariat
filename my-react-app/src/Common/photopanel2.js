import { Link } from 'react-router-dom';


const Photopanel2 = (props)=>{
    return(
        <div className="card m-0" >
            <img src={props.image} className="card-img-top" alt="..." style={{width:"100%",height:"70%"}} />
            <div className="card-body">
            <h6 className="card-title">{props.title}</h6>
                <p><Link to={'/aboutUser'}>Savoir plus! </Link><Link to={'/commande'} style={{color:"green"}}>Passez une commade.</Link></p>
            </div>
        </div>
    )
}

export default Photopanel2;