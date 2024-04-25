import BtnSmt from './buttonSubmit';
import './../style.css';
import {React,useState,  useRef} from 'react';
import {
createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db_} from '../FirebaseUser/index.js';
import {collection, addDoc} from 'firebase/firestore';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row.js';




function SignUp(props){
    const null_string="";
    const [photo, setPhoto] = useState(null);   
    const [name, setName] = useState( null_string);
    const [pname, setPname] = useState( null_string);
    const [genre, setGenre]= useState( null_string);
    const [ville, setVille]= useState( null_string);
    const [tel, setTel]= useState( null_string);
    const [mail, setEmail] = useState( null_string);
    const [password, setPassword] = useState( null_string);
    const [password1, setPassword1] = useState( null_string);
    const [message, setMessage]=useState( null_string);
    const [validation, setValidation]=useState( null_string);
   

    const singnUp=(email, pwd)=> createUserWithEmailAndPassword(auth, email, pwd);

    const inputs=useRef([]);


    const handleImageChange=(e)=>{
      const file = e.target.value;
      setPhoto(file);

    };

    const formRef=useRef();

    const handleSubmit = async (e)=>{
      
      e.preventDefault();
 
      if ((inputs.current[0].value.length || inputs.current[1].value.length)< 6){
        setValidation("6 character min");
        return;
      }
      
      if ((inputs.current[1].value.length!==inputs.current[2].value.length)){
        setValidation("Les mots de passe ne sont pas identiques");
        return;
      }

      try{
        const cred =  await singnUp(
          inputs.current[0].value,
          inputs.current[1].value,
          inputs.current[3].value

        );

      await addDoc(collection(db_, "users"), {
          user:{name, pname, genre, ville, tel, mail, password, message, photo},
          completed: false,
      });

        formRef.current.reset();
        setPassword("");
        setPassword1("");
        setEmail("");
        setGenre("");
        setMessage("");
        setPname("");
        setName("");
        setTel("");
        setVille("");

      }catch(error){

      }
      console.log(inputs);
    };

    return(
    
      <div >
        <div className="row">
          <div className='col-lg-4'>
          </div>
          <div className='col-lg-4'>
            <h4 style={{textAlign:'center'}}>Inscription!</h4>
          </div>
          <div className='col-lg-4'>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" >
          <div className="row u-align-center u-form-group u-form-submit u-label-none u-form-group-4 " >
            <div className='col-lg-3'>
            </div>

            <div className='col-lg-6'>

              <Row>
                <FloatingLabel controlId="name-e4cc" label=" Vore nom"  className="form-floating md-form p-1 col-lg-6 mb-3 ">
                  <Form.Control id="name-e4cc" name={name} value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder="Votre nom"  maxLength="30" className="u-align-center u-input" required/>
                </FloatingLabel>
                <FloatingLabel controlId="name-e4cc1" label="Votre prénom" className="form-floating md-form p-1 col-lg-6 mb-3  ">
                  <Form.Control id="name-e4cc1" name={pname} value={pname} onChange={(e)=>setPname(e.target.value)} type="text" placeholder="Prénom"  maxLength="30" className="u-align-center u-input" required/>
                </FloatingLabel>
              </Row>

              <Row>
                <FloatingLabel controlId="name-e4cc2" label="Votre genre" className="form-floating md-form p-1 col-lg-6 mb-3 ">
                    <Form.Select  aria-label="Choix du genre" name={genre} defaultValue={genre} onChange={(e)=>setGenre(e.target.value)} >
                      <option>Selectionnez</option>
                      <option value="Homme">Homme</option>
                      <option value="Femme" >Femme</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel controlId="name-e4cc3" label="Votre ville"  className="form-floating md-form p-1 col-lg-6 mb-3 ">
                    <Form.Select aria-label="Choix de la ville" name={ville} defaultValue={ville} onChange={(e)=>setVille(e.target.value)} >
                      <option>Selectionnez</option>
                      <option value="Thies">Thies</option>
                      <option value="Ziguinchor" >Ziguinchor</option>
                    </Form.Select>
                </FloatingLabel>
              </Row>

              <Row>
                <FloatingLabel controlId="name-e4cc4"  label="numéro de tel" className="form-floating md-form p-1 col-lg-6 mb-3 ">
                  <Form.Control id="name-e4cc4" name={tel} value={tel} onChange={(e)=>setTel(e.target.value)} type="tel" placeholder="Tel"  maxLength="30"  className="form-floating md-form p-1 col-lg-6 mb-3 " required/>
                </FloatingLabel>
                <FloatingLabel controlId="name-e4cc5"  label="Votre email" className="form-floating md-form p-1 col-lg-6 mb-3 ">
                  <Form.Control   name={mail} value={mail} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter a valid email address" id="email-e4cc"  maxLength="30" className="form-floating md-form p-1 col-lg-6 mb-3 " required/>
                </FloatingLabel>
              </Row>
              
              <Row>
                <FloatingLabel controlId="name-e4cc6" label="Votre mot de passe" className="form-floating md-form p-1 col-lg-6 mb-3 ">
                  <Form.Control  name={password} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe" id="name-e4cc2"  maxLength="30" className="u-align-center u-input" required="" wfd-id="id409" size="2"/>
                </FloatingLabel>
                <FloatingLabel controlId="name-e4cc7" label="Confirmez votre mot de passe" className="form-floating md-form p-1 col-lg-6 mb-3 ">
                  <Form.Control  name={password1} value={password1} onChange={(e)=>setPassword1(e.target.value)} type="password" placeholder="Confirmer mot de passe" size="2"  id="name-e4cc2"  maxLength="30" className="u-align-center u-input" required="" wfd-id="id409" />
                </FloatingLabel>
              </Row>

              <Row>
                <FloatingLabel controlId="name-e4cc8" label="Votre description" className="form-floating md-form p-1 mb-3 ">
                  <Form.Control as="textarea" name={message} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Description de votre activité" rows="4" cols="50" id="message-e4cc" maxLength="1000" minLength="100"  className="u-align-center u-input" style={{ height: '100px' }} required />
                </FloatingLabel>
              </Row>
              
              <Row>
                <FloatingLabel controlId="name-e4cc8" label="Votre photo " className="form-floating md-form p-1 mb-3 ">
                  <Form.Control  type="file" accept="image/*"   placeholder='profile' name={photo} value={photo} onChange={handleImageChange} />
                </FloatingLabel>
              </Row>

              <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4 pb-3">  
                <p style={{color:'red'}}>{validation}</p>
                <BtnSmt/><br/> 
              </div> 

            </div>
            <div className='col-lg-3'>
            </div>
          </div>
        </form>  
      </div>  
    )
}

export default SignUp;

