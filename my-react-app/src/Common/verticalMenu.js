import { useState } from "react"

const couleurBlue = {backgroundColor:"", color:"blue"}
const couleurBlack= {backgroundColor:"", color:"black"}
const couleurWhite = {backgroundColor:"", color:"black"}

const VerticalMenu=()=>{

    const [couleurCommande, setCouleurCommande]=useState(couleurWhite)
    const [couleurAdherant, setcouleurAdherant]=useState(couleurWhite)
    const [couleurMessage, setCouleurMessage]=useState(couleurWhite)
    const [commandeActivate, setCommandeActivate]=useState(false)
    const [adherantActivate, setAdherantActivate]=useState(false)
    const [messageActivate, setMessageActivate]=useState(false)

    return (
        <div className="col-lg-2 u-grey-10">  
            <nav className=" sticky-top flex-row " style={{zIndex:0, paddingTop:"20px"}}>
                <h5 style={{paddingLeft:"30px", paddingTop:"10px"}}>Activité</h5>
                <ul className=" sticky-top flex-row ">

                    <li>  <a href="#" onClick={()=>messageActivate?setMessageActivate(false):setMessageActivate(true)} onMouseOver={()=>setCouleurMessage(couleurBlue)} onMouseOut={()=>setCouleurMessage(couleurWhite)} style={couleurMessage}>Messages</a></li>
                    { 
                        (messageActivate)?
                        <nav>
                        <ul >
                            <li> <a href="#" className="btn btn-primary btn-sm m-2" style={{backgroundColor:"yellow", color:"blue"}}>Nouveaux Messages</a></li>
                            <li> <a href="#" className="btn btn-primary btn-sm m-2">Anciencs Messages</a></li>
                        </ul>
                        </nav>: <nav> </nav>
                
                    }

                    <li > <a href="#" onClick={()=>adherantActivate?setAdherantActivate(false):setAdherantActivate(true)}  onMouseOver={()=>setcouleurAdherant(couleurBlue)} onMouseOut={()=>setcouleurAdherant(couleurWhite)} style={couleurAdherant}>Adherants</a></li>
                    {  
                        (adherantActivate)?
                        <nav>
                                <ul >
                                    <li> <a href="#" className="btn btn-primary btn-sm m-2" style={{backgroundColor:"yellow", color:"blue"}}>Nouveaux Adhérants</a></li>
                                    <li> <a href="#" className="btn btn-primary btn-sm m-2">Anciens Adhérants</a></li>
                                </ul>
                        </nav>:<nav></nav>
                    }
                    
                    <li > <a href="#" onClick={()=>commandeActivate?setCommandeActivate(false):setCommandeActivate(true)} onMouseOver={()=>setCouleurCommande(couleurBlue)} onMouseOut={()=>setCouleurCommande(couleurWhite)}  style={couleurCommande} >Commandes</a></li>
                    {                        
                        (commandeActivate)?
                        <nav>
                            <ul >
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
    )
}
export default VerticalMenu;