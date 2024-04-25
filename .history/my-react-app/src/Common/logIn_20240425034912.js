import BtnSmt from './buttonSubmit';
import './../style.css';
import {Link, Navigate } from 'react-router-dom';
import {useState,  useRef} from 'react';
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


    <div className=" u-align-center u-form-email u-form-group  u-label-none u-form-group-5" style={{paddingTop:'5%'}}>
      <form onSubmit={handleSubmit} className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" >
        {
          passOublie?
          <div className="row u-align-center u-form-group u-form-submit u-label-none u-form-group-4">

            <div className='col-lg-4'>
            </div>

            <div className='col-lg-4'>
              <div className='p-3'>
                <input style={{width:'300px'}}  name={email} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter a valid email address" maxLength="30" className="u-align-center u-input" />
              </div>
              <div className='p-3'>
                <input style={{width:'300px'}} name={password} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe"  maxLength="30" className="u-align-center u-input" />
              </div>
            </div>

            <div className='col-lg-4'>
            </div>
          </div>
          :
          <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4" >
              <input   name={email} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter a valid email address"  maxLength="30" className="u-align-center u-input" />
          </div>
          
          }
        <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4"> 
          <p style={{color:'red'}}>{validation}</p> 
          {passOublie?<p> <small  className='n_link btn' onClick={()=>setPasseOublie(false)}> Mot de passe oublier?</small><Link to={'/inscription'}> <small>S'inscrire.</small></Link>  </p>: <small></small>} 
          <p id='monid' style={{color:'red'}}> </p>     
          <BtnSmt/>      
          <br/>            
        </div>
      </form>
      {
        (props.valueHeaderState)?<Navigate to="/admin"/>:<Navigate to="/login"/> 
      }
      </div>
  );
}

export default LogIn;