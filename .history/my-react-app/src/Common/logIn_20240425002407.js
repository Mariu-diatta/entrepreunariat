import BtnSmt from './buttonSubmit';
import './../style.css';
import {Link, Navigate } from 'react-router-dom';
import {useState,  useRef} from 'react';
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

    fd.append("password",password);
    fd.append("email",email);

    if (email==="" ) {
        document.getElementById('monid').innerHTML="email non rempli<br/>";
    }else if(password===""){
       document.getElementById('monid').innerHTML="mot de passe non rempli<br/>";
    }else{
            axiosInstance.post('api/token/', fd).then((res)=>{
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token',res.data.refresh);
            localStorage.setItem('email',email);
            axiosInstance.defaults.headers['Authorization']='JWT'+ localStorage.getItem('acces_token'); 
            this.props.connecter(email,password);
            console.log(localStorage.getItem('access_token'));
        }).catch(error => {
            document.getElementById('monid').innerHTML="problème de connexion<br/>";
        })   ;
    }

};


  return (


    <div className=''>
      <form onSubmit={handleSubmit} className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" source="email">
      <h4 className="u-alligne-center pt-2 pb-2" >Connexion!</h4>
        {
          passOublie?
          <div className='u-alligne-center' style={{paddingLeft:'15%'}}>
            <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
              <label htmlFor="email-e4cc" className="u-label u-text-body-color u-label-2">Email</label>
              <input ref={addInputs}  name={email} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter a valid email address" id="email-e4cc"  maxLength="30" className="u-align-center u-input"  wfd-id="id410"/>
            </div>
            <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
              <label htmlFor="name-e4cc" className="u-label u-text-body-color u-label-1">Mot de passe</label>
              <input ref={addInputs} name={password} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe" id="name-e4cc2"  maxLength="30" className="u-align-center u-input" required="" wfd-id="id409" size="2"/>
            </div>
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
          <p id='monid' style={{color:'red'}}> </p>     
          <BtnSmt/>      
          <br/> <br/>            
        </div>
      </form>
      {
        (props.valueHeaderState)?<Navigate to="/admin"/>:<Navigate to="/login"/> 
      }
      </div>
  );
}

export default LogIn;