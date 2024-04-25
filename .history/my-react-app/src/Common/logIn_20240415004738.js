
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h4 className="u-alligne-center pt-2" >{passOublie?'Connexion!':"Mail de recupération"}</h4>
      {
        passOublie?
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Votre Email</Form.Label>
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            required
            defaultValue="Otto"
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
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              required
              defaultValue="Otto"
              type="password" 
              id="name-e4cc2" 
              name={password}  
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}   
              className="" 
              maxlength="30"
              type="email" 
              placeholder="email" 
              id="name-e4cc" name={email} 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}  
              className="" 
              maxlength="30" 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>
        }
      <Button type="submit"  onSubmit={handleSubmit}>Submit form</Button>
  
    </Form>
  );
}

export default LogIn;