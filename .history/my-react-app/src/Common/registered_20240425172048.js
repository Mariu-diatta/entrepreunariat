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




function SignUp(props){
    const [photo, setPhoto] = useState(null);   
    const [name, setName] = useState("");
    const [pname, setPname] = useState("");
    const [genre, setGenre]= useState("Homme");
    const [ville, setVille]= useState("Dakar");
    const [tel, setTel]= useState("");
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [message, setMessage]=useState("");
    const [validation, setValidation]=useState("");
   

    const singnUp=(email, pwd)=> createUserWithEmailAndPassword(auth, email, pwd);

    const inputs=useRef([]);

    const addInputs= e=>{ 
      if(e && !inputs.current.includes(e)){
        inputs.current.push(e);
      }
    };

    const handleImageChange=(e)=>{
     // alert('done')
      const file = e.target.value;
      setPhoto(file);
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
  
      // reader.onload = () => {
      //   setPreview(reader.result);
      // };

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
      <> 
        <div className="u-align-center u-section-6 u-grey-10 " style={{ paddingTop:'1%' , width:'100%'}}>
        <FloatingLabel controlId="floatingInput"  label="Votre email"  className="mb-3"  >
                  <Form.Control id="floatingInput" name={mail} value={mail} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Votre email" maxLength="30" className="  u-align-center u-input" />
                </FloatingLabel>
            
            <div className="u-form u-form-1 " >
                  <h4 className="u-alligne-center pt-2 pb-2" >Inscription!</h4>
                  <form onSubmit={handleSubmit} className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" source="email">
                      <FloatingLabel controlId="name-e4cc" className="mb-3 u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                        <Form.Control id="name-e4cc" name={name} value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder="Nom" id="name-e4cc" maxLength="30" className="u-align-center u-input" required="" wfd-id="id409" size="40"/>
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc1" className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                        <Form.Control id="name-e4cc1" name={pname} value={pname} onChange={(e)=>setPname(e.target.value)} type="text" placeholder="Prénom" id="name-e4cc1"  maxLength="30" className="u-align-center u-input" required="" wfd-id="id409" size="40"/>
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc2" className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                          <select name={genre} defaultValue={genre} onChange={(e)=>setGenre(e.target.value)} >
                            <option value="Homme">Homme</option>
                            <option value="Femme" >Femme</option>
                          </select>
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc3"  className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                          <select name={ville} defaultValue={ville} onChange={(e)=>setVille(e.target.value)} >
                            <option value="Thies">Thies</option>
                            <option value="Ziguinchor" >Ziguinchor</option>
                          </select>
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc4"  className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                        <Form.Control id="name-e4cc4" name={tel} value={tel} onChange={(e)=>setTel(e.target.value)} type="tel" placeholder="Tel" id="name-e4cc2"  maxLength="30"  className="u-align-center u-input" required="" wfd-id="id409" />
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc5"  className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                        <Form.Control   name={mail} value={mail} onChange={(e)=>setMail(e.target.value)} type="email" placeholder="Enter a valid email address" id="email-e4cc"  maxLength="30" className="u-align-center u-input"  wfd-id="id410"/>
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc6" className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                        <Form.Control  name={password} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe" id="name-e4cc2"  maxLength="30" className="u-align-center u-input" required="" wfd-id="id409" size="2"/>
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc7" className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                        <Form.Control  name={password1} value={password1} onChange={(e)=>setPassword1(e.target.value)} type="password" placeholder="Confirmer mot de passe" size="2"  id="name-e4cc2"  maxLength="30" className="u-align-center u-input" required="" wfd-id="id409" />
                      </FloatingLabel>
                      <FloatingLabel controlId="name-e4cc8" className="u-form-group u-form-message u-label-none u-form-group-3">
                        <textarea name={message} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Description de votre activité" rows="4" cols="50" id="message-e4cc" maxLength="1000" minLength="100"  className="u-align-center u-input" required=""></textarea>
                      <Form.Control  accept="image/*"   placeholder='profile' name={photo} value={photo} onChange={handleImageChange} type="file"  className='pt-2 ' style={{border:'0px'}}/>

                      </FloatingLabel>
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

