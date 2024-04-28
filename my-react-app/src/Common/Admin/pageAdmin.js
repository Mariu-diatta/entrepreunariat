
import MainSection from "../mainSection";
import {Navigate} from 'react-router-dom';
import Footer from "../footerBoostrap";
import VerticalMenu from "../verticalMenu";
import ContextApp from "../context.js";
import { useContext } from "react";

const Admin =(props)=>{

    const {isConnected, login,logout}=useContext(ContextApp);

    return(
        <>
            {
                (isConnected)? 

                <div className="row flex-row vert_menu_footer"> 
                    <VerticalMenu/>
                    <div className="col-lg-10 class_pad">
                        <div className="row">
                            <MainSection/>
                        </div>
                    </div> 
                </div>

                :<Navigate to="/login"/>
            
            }
            <div className=" nav-footer ">
                <Footer/>
            </div> 
        </>
    )
     
}

export default Admin;