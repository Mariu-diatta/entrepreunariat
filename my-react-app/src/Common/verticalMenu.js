import { useState } from "react"
import { Link } from "react-router-dom"
import "./../style.css"
const couleurBlue = {backgroundColor:"", color:"blue"}
// const couleurBlack= {backgroundColor:"", color:"black"}
const couleurWhite = {backgroundColor:"", color:"black"}


const VerticalMenu=()=>{

    const [couleurCommande, setCouleurCommande]=useState(couleurWhite)
    const [couleurAdherant, setcouleurAdherant]=useState(couleurWhite)
    const [couleurMessage, setCouleurMessage]=useState(couleurWhite)
    const [commandeActivate, setCommandeActivate]=useState(false)
    const [adherantActivate, setAdherantActivate]=useState(false)
    const [messageActivate, setMessageActivate]=useState(false)

    return (
        <div className="style_css sticky-top  col-lg-2 u-grey-10" >  
            <nav className=" " style={{zIndex:"120", height:"100%"}}>
                <h5 className="p-4">Activités</h5>
                <ul className="  flex-row ">

                    <li>  <button className='btn' onClick={()=>messageActivate?setMessageActivate(false):setMessageActivate(true)} onMouseOver={()=>setCouleurMessage(couleurBlue)} onMouseOut={()=>setCouleurMessage(couleurWhite)} style={couleurMessage}>Messages</button></li>
                    { 
                        (messageActivate)?
                        <nav>
                        <ul >
                            <li> <Link to="/" className=" "><small>Nouveaux Messages</small></Link></li>
                            <li> <Link to="#" className=" "><small>Anciencs Messages</small></Link></li>
                        </ul>
                        </nav>: <nav> </nav>
                
                    }

                    <li > <button className='btn' onClick={()=>adherantActivate?setAdherantActivate(false):setAdherantActivate(true)}  onMouseOver={()=>setcouleurAdherant(couleurBlue)} onMouseOut={()=>setcouleurAdherant(couleurWhite)} style={couleurAdherant}>Adherants</button></li>
                    {  
                        (adherantActivate)?
                        <nav>
                            <ul >
                                <li> <Link to="#" className=" "><small>Nouveaux Adhérants</small></Link></li>
                                <li> <Link to="#" className=" "><small>Anciens Adhérants</small></Link></li>
                            </ul>
                        </nav>:<nav></nav>
                    }
                    
                    <li > <button className='btn' onClick={()=>commandeActivate?setCommandeActivate(false):setCommandeActivate(true)} onMouseOver={()=>setCouleurCommande(couleurBlue)} onMouseOut={()=>setCouleurCommande(couleurWhite)}  style={couleurCommande}>Commandes</button></li>
                    {                        
                        (commandeActivate)?
                        <nav>
                            <ul>
                                <li> <Link to="#" className=" "><small>Commandes réalisées</small></Link></li>
                                <li> <Link to="#" className=" "><small>Commandes programées</small></Link></li>
                                <li> <Link to="#" className=" "><small>Commandes en cours</small></Link></li>
                                <li> <Link to="#" className=" "><small>Commandes prêtes</small></Link></li>
                            </ul>
                        </nav>: <nav></nav>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default VerticalMenu;