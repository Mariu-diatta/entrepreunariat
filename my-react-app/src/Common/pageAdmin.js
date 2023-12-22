
import Section from "./section";
import {Navigate} from 'react-router-dom';
import Footer from "./footer";
import VerticalMenu from "./verticalMenu";

const Admin =(props)=>{

    return(
        <>
            {
                (props.valueHeaderState)? 

                <div className="row flex-row vert_menu_footer"> 
                    <VerticalMenu/>
                    <div className="col-lg-10 class_pad">
                        <div className="row">
                            <Section/>
                        </div>
                    </div>
                    <div className="pl-5 container class_footer">
                            <Footer/>
                    </div>  
                </div>

                :<Navigate to="/login"/>
            
            }
        </>
    )
     
}

export default Admin;