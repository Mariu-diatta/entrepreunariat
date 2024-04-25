import BtnSmt from './buttonSubmit';
import './../style.css'
import {Link, Navigate } from 'react-router-dom';
import {useState,  useRef} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../FirebaseUser/index.js';

function LogIn(props){

    const signIn=(email, pwd)=>signInWithEmailAndPassword(auth, email, pwd)

    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [passOublie, setPasseOublie]=useState(true)
    const [validation, setValidation]=useState("")

    const inputs=useRef([])

    const addInputs= el=>{ 
      if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
      }
    }

    const formRef=useRef();

    const handleSubmit = async (e)=>{
      e.preventDefault();

      if ((inputs.current[1].value.length || inputs.current[2].value.length)< 6){
        setValidation("6 character min")
        return;
      }
      try{
        const cred =  await signIn(
          inputs.current[0].value,
          inputs.current[1].value,
        )
        formRef.current.reset();
        setValidation("")
        setPassword("");
        setEmail("");
        props.changeHeaderState((cred['user'])['accessToken'])
      }catch(error){
        alert("Erreur de login: vos données sont invalides")
      }
    };

    return(
      <> 
        <div className="u-align-center u-section-6 u-grey-10 " style={{width:'100%'}}>
            <div className="u-form u-form-1 logInStye" >
               
                <form onSubmit = {handleSubmit} ref={formRef}  className="u-clearfix u-form-spacing-40  u-inner-form " source="email" style={{paddingLeft:'20%', paddingRight:'20%'}}>
                    <h4 className="u-alligne-center pt-2" >{passOublie?'Connexion!':"Mail de recupération"}</h4>
                    {
                      passOublie?
                      <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                        <input ref={addInputs}  type="email" placeholder="email" id="name-e4cc" name={email} value={email} onChange={(e)=>setEmail(e.target.value)}  className="u-align-center u-input m-3" maxlength="30"  required="" wfd-id="id409"  height="48" />
                        <input ref={addInputs}   type="password" placeholder="Mot de passe" id="name-e4cc2" name={password}  value={password} onChange={(e)=>setPassword(e.target.value)}   className="u-align-center u-input m-3" maxlength="30"  required="" wfd-id="id409"/>
                      </div>  
                      :
                      <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                      < input type="email" placeholder="email" id="name-e4cc" name={email} value={email} onChange={(e)=>setEmail(e.target.value)}  className="u-align-center u-input m-3" maxlength="30"  required="" wfd-id="id409"  height="48" />
                      </div>  
                      }  
                     
                    <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4"> 
                    <p style={{color:'red'}}>{validation}</p> 
                    {passOublie?<p> <small  className='n_link btn' onClick={()=>setPasseOublie(false)}> Mot de passe oublier?</small><Link to={'/inscription'}> <small>S'inscrire.</small></Link>  </p>: <small></small>} 
                      <BtnSmt/>      
                      <br/>   <br/>            
                    </div>
                </form>
            </div>
            {
               (props.valueHeaderState)?<Navigate to="/admin"/>:<Navigate to="/login"/> 
            }
        </div>  
      </>
    )
}

export default LogIn;






import './../style.css';
import {useState,  useRef} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseUser/index.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function LogIn(props) {

  const [validated, setValidated] = useState(false);

  const signIn=(email, pwd)=>signInWithEmailAndPassword(auth, email, pwd);

  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [passOublie, setPasseOublie]=useState(true);
  const [validation, setValidation]=useState("");

  const inputs=useRef([]);

  const addInputs= el=>{ 
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el);
    }
  };

  const formRef=useRef();

  const handleSubmit = async (e)=>{
    e.preventDefault();

    if ((inputs.current[1].value.length || inputs.current[2].value.length)< 6){
      setValidation("6 character min");
      return;
    }
    try{
      const cred =  await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      setPassword("");
      setEmail("");
      props.changeHeaderState(cred.user.accessToken);
    }catch(error){
      alert("Erreur de login: vos données sont invalides");
    }
  };


  return (
    <div>
    <Form  validated={validated} onSubmit={handleSubmit} ref={formRef}  >
      <h4 className="u-alligne-center pt-2" >{passOublie?'Connexion!':"Mail de recupération"}</h4>
      {
        passOublie?
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Votre Email</Form.Label>
          <Form.Control
            required
            type="email" 
            placeholder="email" 
            id="name-e4cc" 
            name={email} 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            required
            type="password" 
            placeholder="Mot de passe" 
            id="name-e4cc2" 
            name={password}  
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}   
            className="" 
            maxlength="30"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        :
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Votre mail</Form.Label>
            <Form.Control
            required
            defaultValue="Mark"
            type="email" 
            placeholder="email" 
            id="name-e4cc" 
            name={email} 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
          />
          </Form.Group>
          </Row>
        }
      <Button type="submit" >Submit form</Button>
      <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4"> 
      <p style={{color:'red'}}>{validation}</p> 
      {passOublie?<p> <small  className='n_link btn' onClick={()=>setPasseOublie(false)}> Mot de passe oublier?</small><Link to={'/inscription'}> <small>S'inscrire.</small></Link>  </p>: <small></small>} 
        <BtnSmt/>      
        <br/>   <br/>            
      </div>
    </Form>

      {
               (props.valueHeaderState)?<Navigate to="/admin"/>:<Navigate to="/login"/> 
            }
       </div>
  );
}

export default LogIn;