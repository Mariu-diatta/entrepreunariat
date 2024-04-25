import BtnSmt from './buttonSubmit';
import './../style.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axiosInstance from './axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function LogIn(props) {

  const [Email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [passOublie, setPasseOublie]=useState(true);


 const handleSubmit=(event)=>{

    event.preventDefault();
    const data= new FormData();

    data.append("Email",Email);
    data.append("password",password);

    if (Email==="" ) {
        document.getElementById('monid').innerHTML="email non rempli<br/>";
    }else if(password===""){
       document.getElementById('monid').innerHTML="mot de passe non rempli<br/>";
    }else{
            axiosInstance.post('api/token/', data).then((res)=>{
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token',res.data.refresh);
            localStorage.setItem('Email',Email);
            localStorage.setItem('password',password);
            axiosInstance.defaults.headers.Authorization='JWT'+ localStorage.getItem('acces_token'); 
            console.log({'access_token':res.data.access, 'refresh_token':res.data.refresh});
        }).catch(error => {
            console.log(error);
            document.getElementById('monid').innerHTML="problème de connexion<br/>";
        })   ;
    }

};


  return (


    <div  style={{paddingTop:'5%', minWidth:'300px'}}>
      <div className='row'>
        <div className='col-lg-4'>
        </div>
        <div className='col-lg-4'>
          <h4 style={{textAlign:'center'}}>Connexion!</h4>
        </div>
        <div className='col-lg-4'>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" >
        {
          passOublie?
          <div className="row u-align-center u-form-group u-form-submit u-label-none u-form-group-4 " >

            <div className='col-lg-4'>
            </div>

            <div className='col-lg-4'>
              <FloatingLabel controlId="floatingInput"  label="Votre email"  className="mb-3">
                <Form.Control id="floatingInput" name={Email} value={Email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Votre email" maxLength="30" className="  u-align-center u-input" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword1" label="Votre mot de pass" className='md-form p-3'>
                <Form.Control  id="floatingPassword1" name={password} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Votre mot de pass"  maxLength="30" className="  u-align-center u-input" />
              </FloatingLabel>
            </div>

            <div className='col-lg-4'>
            </div>
          </div>
          :
          <div className="row u-align-center u-form-group u-form-submit u-label-none u-form-group-4" >
              <div className='col-lg-4'>
              </div>
              <div className='col-lg-4'>
              <input   name={Email} value={Email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter a valid email address"  maxLength="30" className="u-align-center u-input" />
              </div>
              <div className='col-lg-4'>
              </div>
          </div>
          
          }
        <div className="row u-align-center u-form-group u-form-submit u-label-none u-form-group-4"> 
          <div className='col-lg-4'>
          </div>
          <div className='col-lg-4 '>
            {passOublie?<p> <small  className='n_link btn' onClick={()=>setPasseOublie(false)}> Mot de passe oublier?</small><Link to={'/inscription'}> <small>S'inscrire.</small></Link>  </p>: <small></small>} 
            <p id='monid' style={{color:'red'}}> </p>     
            <BtnSmt/>      
            <br/>     
          </div> 
          <div className='col-lg-4'>
          </div>      
        </div>
      </form>
      {
        //(props.valueHeaderState)?<Navigate to="/admin"/>:<Navigate to="/login"/> 
      }
      </div>
  );
}

export default LogIn;