
function LogIn(){
    return(
        <div className="container p-4" >
            <h2 className="u-text u-text-1">Connectez-vous!</h2>
            <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" source="email">
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Name</label>
                  <input type="text" placeholder="Nom" id="name-e4cc" name="name" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" maxlength="30"  required="" wfd-id="id409"/>
                </div>
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Mot de passe</label>
                  <input type="password" placeholder="Mot de passe" id="name-e4cc2" name="password" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" maxlength="30" size="4"  required="" wfd-id="id409"/>
                </div>
                <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4">
                  <input type="submit" value="submit" className="u-form-control-hidden u-grey-5" wfd-id="id411"/>
                  <a href="#" className="u-active-palette-3-base u-black u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-base u-radius-50 u-btn-1">Valider</a>
                </div>
            </form>
        </div>
    )
}

export default LogIn;