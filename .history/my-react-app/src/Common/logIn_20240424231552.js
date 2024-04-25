import BtnSmt from './buttonSubmit';
import './../style.css';
import {Link, Navigate } from 'react-router-dom';
import {useState,  useRef} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseUser/index.js';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axiosInstance from './axios';

function LogIn(props) {

  const [validated, setValidated] = useState(false);
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

 const handleSubmit=(event)=>{

    event.preventDefault();
    const fd= new FormData();

    fd.append("password",this.state.password);
    fd.append("email",this.state.user_email);

    if (this.state.user_email==="" ) {
        document.getElementById('monid').innerHTML="email non rempli<br/>";
    }else if(this.state.password===""){
       document.getElementById('monid').innerHTML="mot de passe non rempli<br/>";
    }else{
            axiosInstance.post('api/token/', fd).then((res)=>{
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token',res.data.refresh);
            localStorage.setItem('email',this.state.email);
            axiosInstance.defaults.headers['Authorization']='JWT'+ localStorage.getItem('acces_token'); 
            this.props.connecter(this.state.email,this.state.password,this.state.IsLogIn);

        }).catch(error => {
            console.log(console.log("erreur"));
            //alert('la connexion a échoué') 
            document.getElementById('monid').innerHTML="problème de connexion<br/>";
        })   ;
    }

};


  return (
    <div>
      <Form  style={{backgroundColor:'white', borderRadius:'6px', width:'30%', marginLeft:'35%', marginTop:'10%', paddingRight:'0px'}} validated={validated} onSubmit={handleSubmit} ref={formRef} className='u-align-center u-form-group u-form-submit u-label-none u-form-group-4'>
        <h4 className="u-alligne-center pt-2" >{passOublie?'Connexion!':"Mail de recupération"}</h4>
        {
          passOublie?
          <div className='u-alligne-center' style={{paddingLeft:'15%'}}>
            <Row className="u-alligne-center " >
              <Form.Group as={Col} md="10">
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
              <Form.Group as={Col} md="10">
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
                  maxLength="30"
                />
              </Form.Group>
            </Row>
          </div>
          :
          <Row style={{paddingLeft:'15%'}}>
            <Form.Group as={Col} md="10">
              <Form.Label>Votre mail</Form.Label>
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
          </Row>
          
          }
        <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4"> 
          <p style={{color:'red'}}>{validation}</p> 
          {passOublie?<p> <small  className='n_link btn' onClick={()=>setPasseOublie(false)}> Mot de passe oublier?</small><Link to={'/inscription'}> <small>S'inscrire.</small></Link>  </p>: <small></small>} 
          <p id='monid'>    </p>     
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