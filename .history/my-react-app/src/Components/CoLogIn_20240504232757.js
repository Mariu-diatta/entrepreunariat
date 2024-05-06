import BtnSmt from './CoButtonSubmit';
import CoButton from './CoBtnBootstrap';
import './../style.css';
import {Link, Navigate} from 'react-router-dom';
import {useState,useContext} from 'react';
import axiosInstance from './axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ContextApp from './CoContext';

function LogIn() {

  const [Email, setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [passOublie, setPasseOublie]=useState(true);
  const {isConnected,login}= useContext(ContextApp);

  const handleSubmitPassForget=(e)=>{
    e.preventDefault();
  }

  const handleSubmit=(event)=>{
      
      event.preventDefault();

      //data for user
      const data= new FormData();
      data.append("Email",Email);
      data.append("password",password);

      if (Email==="" ) {
          document.getElementById('monid').innerHTML="email non rempli<br/>";
      }else if(password===""){
        document.getElementById('monid').innerHTML="mot de passe non rempli<br/>";
      }else{
              axiosInstance.post('api/token/', data).then((res)=>{
              sessionStorage.setItem('access_token',res.data.access);
              sessionStorage.setItem('refresh_token',res.data.refresh);
              sessionStorage.setItem('Email',Email);
              sessionStorage.setItem('password',password);
              axiosInstance.defaults.headers.Authorization='JWT'+ sessionStorage.getItem('acces_token'); 
              login();
              <Navigate to="/admin"/>

          }).catch(error => {
              console.log(error);
              document.getElementById('monid').innerHTML="problème de connexion<br/>";
          })   ;
      }

  };

  return (

    <>
      <Row className='pt-4'>

        <div className='col-lg-2'>
        </div>

        <div className='col-lg-8'>
          {
            passOublie?
              <div className='u-align-center u-form-group u-form-submit u-label-none u-form-group-4'>

                <form onSubmit={handleSubmit}>

                  <div className="row u-align-center u-form-group u-form-submit u-label-none u-form-group-4" style={{paddingTop:'10%'}}>

                    <strong style={{textAlign:'center'}}><h4>Connexion!</h4></strong >

                    <div className='col-lg-4'>
                    </div>

                    <div className='col-lg-4'>

                      <div className='form-floating md-form p-1'>
                        <FloatingLabel controlId="floatingInput"  label="Votre email"  className="mb-3"  >
                          <Form.Control  name={Email} value={Email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Votre email" maxLength="30" className="u-align-center u-input" />
                        </FloatingLabel>
                      </div>

                      <div className='form-floating md-form p-1'>
                        <FloatingLabel controlId="floatingPassword1" label="Votre mot de pass" className='mb-3'>
                          <Form.Control   name={password} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Votre mot de pass"  maxLength="30" className="  u-align-center u-input" />
                        </FloatingLabel>
                      </div>

                    </div>
                    
                    <div className='col-lg-4'>
                    </div>

                  </div> 

                  <p> <small className=' btn' onClick={()=>setPasseOublie(false)}> Mot de passe oublier?</small><Link to={'/inscription'}> <small>S'inscrire.</small></Link></p> 
                  <p id='monid' style={{color:'red'}}> </p>     
                  <BtnSmt/>      
                  <br/> 

                </form>  

              </div>
            :
            <div className='row'>

              <form onSubmit={handleSubmitPassForget}>
              
                <div className="row u-align-center u-form-group u-form-submit u-label-none u-form-group-4" style={{paddingTop:'10%'}}>
                
                <strong > <h4 style={{textAlign:'center'}}>Mot de pass oublié!</h4></strong >

                    <div className='col-lg-4'>
                    </div>

                    <div className='col-lg-4 form-floating md-form p-2'>

                      <FloatingLabel controlId="floatingPassword2" label="Votre mot de pass" className=' mb-3'>
                        <Form.Control   name={Email} value={Email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter a valid email address"  maxLength="30" className="u-align-center u-input" />
                      </FloatingLabel>
                      <BtnSmt label='Connecter' />  

                    </div>

                    <div className='col-lg-4'>
                    </div>

                </div>

              </form>

            </div>
          }

        </div>

        <div className='col-lg-2'>
        </div>

      </Row>
      {
        (isConnected && sessionStorage.getItem('access_token'))?<Navigate to="/admin"/>:<Navigate to="/login"/> 
      }
      
    </>
  );
  
}

export default LogIn;