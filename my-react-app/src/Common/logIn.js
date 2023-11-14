import {useEffect, useState} from 'react'
import Admin  from './pageAdmin.js';
import Aderant from './pageAderant.js';
import {Navigate} from 'react-router-dom';

function LogIn(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isConected, setIsConected] = useState(false);

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
          ).then(response =>
            {
              console.log(response);
              setIsConected(response['ok']);
              console.log(response['ok']);
          });
        };

    return(
        <div className="container u-align-center u-clearfix  u-section-6">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h2 className="u-text u-text-1 p-3">Connectez-vous!</h2>
                <div className="u-form u-form-1">
                    <form onSubmit = {handleSubmit}   className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form " source="email">
                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                          <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Name</label>
                          <input type="text" placeholder="Nom" id="name-e4cc" name={name} value={name} onChange={(e)=>setName(e.target.value)}  className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" maxlength="30"  required="" wfd-id="id409"/>
                        </div>
                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                          <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Mot de passe</label>
                          <input type="password" placeholder="Mot de passe" id="name-e4cc2" name={password}  value={password} onChange={(e)=>setPassword(e.target.value)}   className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" maxlength="30" size="4"  required="" wfd-id="id409"/>
                        </div>
                        <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4">
                          <button type="submit" value="submit" className="u-active-palette-3-base u-black u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-base u-radius-50 u-btn-1">Valider</button>
                        </div>
                    </form>
                </div>
            </div>
            {    
              isConected?<Navigate to="/admin"/>:console.log("Je suis pas redirigé")
            }
        </div>
    )
}

export default LogIn;