
function Register(){
    return(
        <div className="container p-5 ">
            <h2 className="u-text u-text-1" >Inscrivez-vous!</h2>
            <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" source="email">
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Name</label>
                  <input type="text" placeholder="Nom" id="name-e4cc" name="name" maxlength="30" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" required="" wfd-id="id409" size="40"/>
                </div>
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Prénom</label>
                  <input type="text" placeholder="Prénom" id="name-e4cc1" name="pname" maxlength="30" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" required="" wfd-id="id409" size="40"/>
                </div>
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Téléphone</label>
                  <input type="tel" placeholder="tel" id="name-e4cc2" name="tel" maxlength="30"  className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" required="" wfd-id="id409" />
                </div>
                <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                  <label for="email-e4cc" className="u-label u-text-body-color u-label-2">Email</label>
                  <input type="email" placeholder="Enter a valid email address" id="email-e4cc" name="email" maxlength="30" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-2"  wfd-id="id410"/>
                </div>
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Mot de passe</label>
                  <input type="password" placeholder="Mot de passe" id="name-e4cc2" name="password" maxlength="30" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" required="" wfd-id="id409" size="2"/>
                </div>
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Téléphone</label>
                  <input type="password" placeholder="Confirmer mot de passe" size="2"  id="name-e4cc2" name="password1" maxlength="30" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" required="" wfd-id="id409" />
                </div>
                <div className="u-form-group u-form-message u-label-none u-form-group-3">
                  <label for="message-e4cc" className="u-label u-text-body-color u-label-3">Message</label>
                  <textarea placeholder="Description de votre métier" rows="4" cols="50" id="message-e4cc" maxlength="1000" minlength="500" name="message" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-3" required=""></textarea>
                </div>
                <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4">
                  <input type="submit" value="submit"  maxlength="30" className="u-form-control-hidden u-grey-5" wfd-id="id411"/>
                  <a href="#" className="u-active-palette-3-base u-black u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-base u-radius-50 u-btn-1">Valider</a>
                </div>
            </form>
        </div>
    )
}

export default Register;