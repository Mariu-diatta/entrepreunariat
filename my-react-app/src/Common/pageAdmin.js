import {  useState } from "react";
import Section from "./section";
import {Navigate} from 'react-router-dom';
import Footer from "./footer";
import VerticalMenu from "./verticalMenu";

const Admin =(props)=>{

    return(
        <>
            {
                (props.valueHeaderState)? 

                <div className="row flex-row"> 
                    <VerticalMenu/>
                    <div className="col-lg-10 ">
                        <Section/>
                        <Footer/>
                    </div>  
                </div>

                :<Navigate to="/login"/>
            
            }
        </>
    )
     
}

export default Admin;