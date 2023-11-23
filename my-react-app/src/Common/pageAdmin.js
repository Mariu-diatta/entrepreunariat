import { useEffect, useState } from "react";
import Section from "./section";
import {Navigate, Outlet, Link} from 'react-router-dom';



const Admin =(props)=>{
    const [col1, setCol1]=useState({backgroundColor:"", color:"white"})
    const [col2, setCol2]=useState({backgroundColor:"", color:"white"})
    const [col, setCol]=useState({backgroundColor:"", color:"white"})
    const [col3, setCol3]=useState({backgroundColor:"", color:"white"})
    const [commande, setCommande]=useState(false)
    const [adh, setAdh]=useState(false)
    const [mess, setMess]=useState(false)


    return(
        <>
            {
                (props.valueHeaderState)? 

                <div className="row flex-row"> 
                    <div className="col-lg-2 u-grey-80" style={{zIndex:0, backgroundColor:"", marginLeft:"0px"}}>
                        
                            <nav className=" sticky-top flex-row " style={{zIndex:0, paddingTop:"20px"}}>
                                <p className="" style={{paddingLeft:"30px", paddingTop:"30px"}}>Activité</p>
                                <ul style={{listStyleType:"none"}}>
                                    <li>  <a href="#" onClick={()=>mess?setMess(false):setMess(true)} onMouseOver={()=>setCol({backgroundColor:"", color:"blue"})} onMouseOut={()=>setCol({backgroundColor:"", color:"white"})} style={col}><i className="fas fa-address-book" style={{fontSize:"24px"}}>Messages</i></a></li>
                                { 
                                (mess)?
                                    <nav>
                                    <ul style={{listStyleType:"none"}}>
                                        <li> <a href="#" className="btn btn-primary btn-sm m-2" style={{backgroundColor:"yellow", color:"blue"}}>Nouveaux Messages</a></li>
                                        <li> <a href="#" className="btn btn-primary btn-sm m-2">Anciencs Messages</a></li>
                                    </ul>
                                    </nav>: <nav> </nav>

                                
                                }
                                    <li > <a href="#" onClick={()=>adh?setAdh(false):setAdh(true)}  onMouseOver={()=>setCol1({backgroundColor:"", color:"blue"})} onMouseOut={()=>setCol1({backgroundColor:"", color:"white"})} style={col1}><i className="fas fa-home" style={{fontSize:"24px"}}>Adherants </i></a></li>
                                {  
                                    (adh)?
                                        <nav>
                                                <ul style={{listStyleType:"none"}}>
                                                    <li> <a href="#" className="btn btn-primary btn-sm m-2" style={{backgroundColor:"yellow", color:"blue"}}>Nouveaux Adhérants</a></li>
                                                    <li> <a href="#" className="btn btn-primary btn-sm m-2">Anciens Adhérants</a></li>
                                                </ul>
                                        </nav>:<nav></nav>
                                    }
                                    <li > <a href="#" onClick={()=>commande?setCommande(false):setCommande(true)}  style={col3} onMouseOver={()=>setCol3({backgroundColor:"", color:"blue"})} onMouseOut={()=>setCol3({backgroundColor:"", color:"white"})}><i className="fas fa-address-book" style={{fontSize:"24px"}}>Commandes</i></a></li>
                                    {                        
                                        (commande)?
                                            <nav>
                                                <ul style={{listStyleType:"none"}}>
                                                    <li> <a href="#" className="btn btn-primary btn-sm m-2" style={{backgroundColor:"yellow", color:"blue"}}>Commandes réalisées</a></li>
                                                    <li> <a href="#" className="btn btn-primary btn-sm m-2" >Commandes programées</a></li>
                                                    <li> <a href="#" className="btn btn-primary btn-sm m-2" style={{backgroundColor:"red", color:"blue"}}>Commandes en cours</a></li>
                                                    <li> <a href="#" className="btn btn-primary btn-sm m-2" style={{backgroundColor:"green"}}>Commandes prêtes</a></li>
                                                </ul>
                                            </nav>: <nav></nav>
                                    }
                                </ul>
                            </nav>
                    </div>
                    <div className="col-lg-8 m-4 ">
                            <Section />
                    </div>  
                </div>

                :<Navigate to="/login"/>
            
            }
        </>
    )
     
}

export default Admin;