import BtnSmt from './buttonSubmit';
import './../style.css';
import {Link, Navigate } from 'react-router-dom';
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
    <div style={{paddingLeft:'12px'}}>
      <Form  style={{backgroundColor:'blue', width:'30%', marginLeft:'35%', marginTop:'10%', paddingRight:'0px'}} validated={validated} onSubmit={handleSubmit} ref={formRef} className='u-align-center u-form-group u-form-submit u-label-none u-form-group-4'>
        <h4 className="u-alligne-center pt-2" >{passOublie?'Connexion!':"Mail de recupération"}</h4>
        {
          passOublie?
          <div className='u-alligne-center'>
            <Row className="u-alligne-center " >
              <Form.Group as={Col} md="10" controlId="validationCustom01">
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
              <Form.Group as={Col} md="10" controlId="validationCustom02">
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
              </Form.Group>
            </Row>
          </div>
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
      
        <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4"> 
          <p style={{color:'red'}}>{validation}</p> 
          {passOublie?<p> <small  className='n_link btn' onClick={()=>setPasseOublie(false)}> Mot de passe oublier?</small><Link to={'/inscription'}> <small>S'inscrire.</small></Link>  </p>: <small></small>} 
          <BtnSmt/>      
          <br/> <br/>            
        </div>
      </Form>
      {
        (props.valueHeaderState)?<Navigate to="/admin"/>:<Navigate to="/login"/> 
      }
    </div>
  );
}

export default LogIn;