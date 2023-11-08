import {useState} from "react"

const Photopanel2 = (props)=>{
    return(
        <div className="card m-0" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default Photopanel2;