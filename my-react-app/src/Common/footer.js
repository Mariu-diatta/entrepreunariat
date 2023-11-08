import '../accueil/Site1/A-propos.css'
import '../accueil/Site1/Accueil.css'
import '../accueil/Site1/LogIn.css'
function Footer(){
    return(
        <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-e160">
            <div className="u-clearfix u-sheet u-sheet-1">
                    <p className="u-small-text u-text u-text-variant u-text-1">Notre Company se trouve à Almadil'élément de texte.</p>
            </div>
            <section className="u-backlink u-clearfix u-grey-80">
              <a className="u-link" href="#" target="_blank">
                <span>© 2020 Copyright:</span>
              </a>
              <p className="u-text">
                <span> Company</span>
              </p>
              <a className="u-link" href="" target="_blank">
                <span>LFood</span>
              </a>

            </section>
        </footer>
    );
}
export default Footer;