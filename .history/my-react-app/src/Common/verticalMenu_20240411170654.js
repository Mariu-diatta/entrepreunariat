import { useState } from "react"
import { Link } from "react-router-dom"
import "./../style.css"
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

        <nav className=' sticky-top u-align-center style_css  col-lg-2'>
            <strong  style={{color:'black', paddingLeft:'20px'} }>Deal</strong>
            <ul>
                <li>  <button className='code_u btn' onClick={()=>messageActivate?setMessageActivate(false):setMessageActivate(true)} onMouseOver={()=>setCouleurMessage(couleurBlue)} onMouseOut={()=>setCouleurMessage(couleurWhite)} style={couleurMessage}><small><i className="fa fa-commenting fa-4x" aria-hidden="true"> Messages</i></small></button></li>
                { 
                    (messageActivate)?
                    <nav style={{backgroundColor:'white'}}>
                    <ul >
                        <li> <Link to="/" ><small><i className="fa" aria-hidden="true">Nouveaux Messages</i></small></Link></li>
                        <li> <Link to="#" ><small><i className="fa" aria-hidden="true"> Messages</i></small></Link></li>
                    </ul>
                    </nav>: <nav> </nav>
            
                }
            </ul>
            <ul>
                <li > <button className='code_u btn' onClick={()=>adherantActivate?setAdherantActivate(false):setAdherantActivate(true)}  onMouseOver={()=>setcouleurAdherant(couleurBlue)} onMouseOut={()=>setcouleurAdherant(couleurWhite)} style={couleurAdherant}><small><i className="fa fa-users fa-4x" aria-hidden="true"> Adherants</i></small></button></li>
                {  
                    (adherantActivate)?
                    <nav style={{backgroundColor:'white'}}>
                        <ul >
                            <li> <Link to="#" ><small><i className="fa" aria-hidden="true"> Nouveaux Adhérants</i></small></Link></li>
                            <li> <Link to="#" ><small><i className="fa " aria-hidden="true"> Adhérants</i></small></Link></li>
                        </ul>
                    </nav>:<nav></nav>
                }
            </ul>
            <ul>
                <li > <button className='code_u btn' onClick={()=>commandeActivate?setCommandeActivate(false):setCommandeActivate(true)} onMouseOver={()=>setCouleurCommande(couleurBlue)} onMouseOut={()=>setCouleurCommande(couleurWhite)}  style={couleurCommande}><small><i className="fa fa-coffee fa-4x" aria-hidden="true"> Commandes</i></small></button></li>
                {                        
                    (commandeActivate)?
                    <nav style={{backgroundColor:'white'}}>
                        <ul className="p-0 m-0">
                            <li> <Link to="#" ><small><i className="fa" aria-hidden="true">Commandes réalisées</i></small></Link></li>
                            <li> <Link to="#" ><small><i className="fa" aria-hidden="true">Commandes programées</i></small></Link></li>
                            <li> <Link to="#" ><small><i className="fa" aria-hidden="true">Commandes en cours</i></small></Link></li>
                            <li> <Link to="#" ><small><i className="fa" aria-hidden="true">Commandes prêtes</i></small></Link></li>
                        </ul>
                    </nav>: <nav></nav>
                } 
            </ul>
        </nav>
        
    )
}

export default VerticalMenu;