import { useState } from "react";
import Section from "./section";


const Admin =()=>{
    const [col1, setCol1]=useState({backgroundColor:"", color:"white"})
    const [col2, setCol2]=useState({backgroundColor:"", color:"white"})
    const [col, setCol]=useState({backgroundColor:"", color:"white"})
    return(
        <>
            <div className="row p-4"> 
               <div className="col-lg-2 p-4" style={{backgroundColor:"grey"}}>
                <nav>
                    <ul style={{listStyleType:"none"}}>
                        <li>  <a href="#" className="btn btn-primary btn-sm m-2" onMouseOver={()=>setCol({backgroundColor:"grey", color:"white"})} onMouseOut={()=>setCol({backgroundColor:"", color:"white"})} style={col}>Messages</a></li>
                        <li > <a href="#" className="btn btn-primary btn-sm m-2" onMouseOver={()=>setCol1({backgroundColor:"grey", color:"white"})} onMouseOut={()=>setCol1({backgroundColor:"", color:"white"})} style={col1}>Adherants</a></li>
                        <li > <a href="#" className="btn btn-primary btn-sm m-2" onMouseOver={()=>setCol2({backgroundColor:"grey", color:"white"})} onMouseOut={()=>setCol2({backgroundColor:"", color:"white"})} style={col2}>Commandes</a></li>
                        
                    </ul>
                </nav>
               </div>
               <div className="col-lg-8 m-4">
                    <Section />
               </div>  
            </div>
        </>
    )
}

export default Admin;