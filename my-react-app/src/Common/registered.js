import {useState} from 'react'
import {Navigate} from 'react-router-dom';

const Register =()=>{

        const [name, setName] = useState("");
        const [pname, setPname] = useState("");
        const [genre, setGenre]= useState("Homme");
        const [ville, setVille]= useState("");
        const [tel, setTel]= useState("");
        const [mail, setMail]= useState("");
        const [password, setPassword]= useState("");
        const [password1, setPassword1]= useState("");
        const [message, setMessage]= useState("");
        const [isRegistered, setIsRegistered] = useState(false)



        const handleSubmit = (e) => {
          e.preventDefault();
            // Call your API with the form data
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              'Nom_user':name, 
              'Prenom_user':pname,
              'Ville_user':ville, 
              'Genre_user':genre,
              'Tel_user':tel,
              'Mail_user':mail,
              'Passe_user':password,
              'Message_user':message,
            })
          };

          fetch(
            'http://127.0.0.1:5000//registered',
            requestOptions
          ).then(Response=>{
            console.log(Response)
           // Response['ok']?setIsRegistered(true): console.log("erreur") 
          }
           );
        };

        return(
        <div className="p-4 u-align-center u-section-6 u-grey-10" >
            {/* <div className="u-clearfix u-sheet u-valign-middle u-sheet-1 "> */}
                <h4 className="u-text u-text-1 p-2" >Inscrivez-vous!</h4>
                <div className="u-form u-form-1 ">
                    <form onSubmit={handleSubmit} className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" source="email">
                        
                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                          <label htmlFor="name-e4cc" className="u-label u-text-body-color u-label-1">Name</label>
                          <input name={name} value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder="Nom" id="name-e4cc" maxLength="30" className="u-input" required="" wfd-id="id409" size="40"/>
                        </div>

                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                          <label htmlFor="name-e4cc" className="u-label u-text-body-color u-label-1">Prénom</label>
                          <input name={pname} value={pname} onChange={(e)=>setPname(e.target.value)} type="text" placeholder="Prénom" id="name-e4cc1"  maxLength="30" className="u-input" required="" wfd-id="id409" size="40"/>
                        </div>

                        <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                            <select name={genre} defaultValue={genre} onChange={(e)=>setGenre(e.target.value)} >
                              <option value="Homme">Homme</option>
                              <option value="Femme" >Femme</option>
                            </select>
                        </div>

                        <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                            <select name={ville} defaultValue={ville} onChange={(e)=>setVille(e.target.value)} >
                              <option value="Thies">Thies</option>
                              <option value="Ziguinchor" >Ziguinchor</option>
                            </select>
                        </div>

                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                          <label htmlFor="name-e4cc" className="u-label u-text-body-color u-label-1">Téléphone</label>
                          <input name={tel} value={tel} onChange={(e)=>setTel(e.target.value)} type="tel" placeholder="Tel" id="name-e4cc2"  maxLength="30"  className="u-input" required="" wfd-id="id409" />
                        </div>

                        <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                          <label htmlFor="email-e4cc" className="u-label u-text-body-color u-label-2">Email</label>
                          <input name={mail} value={mail} onChange={(e)=>setMail(e.target.value)} type="email" placeholder="Enter a valid email address" id="email-e4cc"  maxLength="30" className="u-input"  wfd-id="id410"/>
                        </div>

                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                          <label htmlFor="name-e4cc" className="u-label u-text-body-color u-label-1">Mot de passe</label>
                          <input name={password} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Mot de passe" id="name-e4cc2"  maxLength="30" className="u-input" required="" wfd-id="id409" size="2"/>
                        </div>

                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                          <label htmlFor="name-e4cc" className="u-label u-text-body-color u-label-1">Téléphone</label>
                          <input name={password1} value={password1} onChange={(e)=>setPassword1(e.target.value)} type="password" placeholder="Confirmer mot de passe" size="2"  id="name-e4cc2"  maxLength="30" className="u-input" required="" wfd-id="id409" />
                        </div>

                        <div className="u-form-group u-form-message u-label-none u-form-group-3">
                          <label htmlFor="message-e4cc" className="u-label u-text-body-color u-label-3">Message</label>
                          <textarea name={message} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Description de votre activité" rows="4" cols="50" id="message-e4cc" maxLength="1000" minLength="500"  className="u-input" required=""></textarea>
                        </div>

                        <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4">
                          <button type="submit" value="submit" maxLength="30"   className="u-active-palette-3-base u-grey-80 u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-base u-radius-50 ">Valider</button >
                        </div>

                    </form>
                </div>
            {/* </div> */}
            {    
              isRegistered?<Navigate to="/login"/>:console.log("Je suis pas redirigé")
            }
        </div>
    )
}

export default Register;