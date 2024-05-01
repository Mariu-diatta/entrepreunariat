
import MainSection from "../mainSection";
import {Navigate} from 'react-router-dom';
import Footer from "../footerBoostrap";
import VerticalMenu from "../verticalMenu";
import ContextApp from "../context.js";
import { createContext, useContext } from "react";



const Admin =(props)=>{

    const {isConnected, login,logout}=useContext(ContextApp);

    return(
        <>
            {
                (isConnected)? 
                    <div className="row flex-row vert_menu_footer"> 
                        <div className="col-lg-2">
                            <VerticalMenu/>
                        </div>
                        <div className="col-lg-10">

                            <div className="row me-5">  
                                <MainSection/>
                            </div> 

                            <div className=" ms-0 me-1 nav-footer ">
                                <Footer/>
                            </div>
                            
                        </div> 
                    </div>
                :
                    <Navigate to="/login"/>
            } 
        </>
    )
     
}

export default Admin;