import {useState} from 'react'
import {Navigate} from 'react-router-dom';
import BtnSmt from './buttonSubmit';
import './../style.css'

function LogIn(props){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=>{
          e.preventDefault();

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              'Nom_user':name, 
              'Passe_user':password,
            })
          };

          fetch(
            'http://127.0.0.1:5000/login',
            requestOptions
          ).then(res => res.json()). then (response =>
            {
              if(response['RESULTAT']){
                localStorage.setItem("etatConection",true);
                props.changeHeaderState(true);
                <Navigate to="/admin"/>
              }else {localStorage.setItem("etatConection",false); <Navigate to="/login"/>}
          });
    };

    return(
      <>
        <div className="u-align-center u-section-6 u-grey-10  " style={{paddingBottom:'10%', paddingTop:'5%'}}>
            <div className="u-form u-form-1 logInStye">
                <h4 className="u-text u-text-1 " style={{paddingBottom:'5%', paddingTop:'3%'}}>Connectez-vous!</h4>
                <form onSubmit = {handleSubmit}   className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form " source="email">
                    <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                    <input  type="text" placeholder="Nom" id="name-e4cc" name={name} value={name} onChange={(e)=>setName(e.target.value)}  className="u-align-center u-input " maxlength="30"  required="" wfd-id="id409"/>
                    </div>
                    <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                      <input type="password" placeholder="Mot de passe" id="name-e4cc2" name={password}  value={password} onChange={(e)=>setPassword(e.target.value)}   className="u-align-center u-input" maxlength="30"  required="" wfd-id="id409"/>
                    </div>
                    <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4">
                      <BtnSmt/>
                    </div>
                </form>
            </div>
            {
               props.valueHeaderState?<Navigate to="/admin"/>:<Navigate to="/login"/>
            }
        </div>  
      </>
    )
}

export default LogIn;