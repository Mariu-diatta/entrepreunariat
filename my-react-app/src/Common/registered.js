import BtnSmt from './buttonSubmit';
import './../style.css'
import {React,useState,  useRef} from 'react';
import {
createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../FirebaseUser/index.js';


function SignUp(props){
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_, setPassword_] = useState("");
    const [validation, setValidation]=useState("")

    const singnUp=(email, pwd)=> createUserWithEmailAndPassword(auth, email, pwd)

    const inputs=useRef([])

    const addInputs= el=>{ 
      if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
      }
    }

    const formRef=useRef();

    const handleSubmit = async (e)=>{
      
      e.preventDefault();
 
      if ((inputs.current[0].value.length || inputs.current[1].value.length)< 6){
        setValidation("6 character min")
        return;
      }
      
      if ((inputs.current[1].value.length!==inputs.current[2].value.length)){
        setValidation("Les mots de passe ne sont pas identiques")
        return;
      }

      try{
        const cred =  await singnUp(
          inputs.current[0].value,
          inputs.current[1].value,

        )
        formRef.current.reset();
        setPassword("");
        setPassword_("");
        setEmail("")

      }catch(error){

      }
      console.log(inputs);
    };

    return(
      <> 
        <div className="u-align-center u-section-6 u-grey-10 " style={{paddingBottom:'100%', paddingTop:'1%' , width:'100%'}}>
            <div className="u-form u-form-1 logInStye" >
               
                <form onSubmit = {handleSubmit} ref={formRef}  className="u-form-spacing-40  u-inner-form" source="email" style={{paddingLeft:'20%', paddingRight:'20%'}}>
                    <div className="u-form-group u-allign-center u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                     <h4 className="u-align-center  pt-3 " >Inscription!</h4>
                      <input ref={addInputs}  type="email" placeholder="email" id="name-e4cc" name={email} value={email} onChange={(e)=>setEmail(e.target.value)}  className="u-align-center u-input m-3" maxlength="30"  required="" wfd-id="id409"  height="48" />
 
                      <input ref={addInputs}   type="password" placeholder="Mot de passe" id="name-e4cc2" name={password}  value={password} onChange={(e)=>setPassword(e.target.value)}   className="u-align-center u-input m-3"  maxlength="30"  required="" wfd-id="id409"/>
   
                      <input ref={addInputs}   type="password" placeholder="confirmer mot de passe" id="name-e4cc2" name={password_}  value={password_} onChange={(e)=>setPassword_(e.target.value)}   className="u-align-center u-input m-3" maxlength="30"  required="" wfd-id="id409"/>
                    </div>
                    <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4 pb-3">  
                    <p style={{color:'red'}}>{validation}</p>
                      <BtnSmt/>     
                      <br/>            
                    </div>
                </form>
            </div>
        </div>  
      </>
    )
}

export default SignUp;