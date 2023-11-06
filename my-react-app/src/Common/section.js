import '../accueil/Site1/A-propos.css'
import '../accueil/Site1/Accueil.css'
import '../accueil/Site1/nicepage.css'
import '../accueil/Site1/LogIn.css'
import im1 from "../accueil/Site1/images/3454.jpg"
import im2 from "../accueil/Site1/images/6457.jpg"
import im3 from "../accueil/Site1/images/553566.jpg"



function Section(){
    return(
      <section className="u-clearfix u-section-5" id="carousel_ba86">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                  <div className="u-size-30">
                    <div className="u-layout-col">
                      <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500">
                        <div className="u-container-layout u-container-layout-1">
                          <img src={im1} alt="" className="u-align-left u-expanded-width u-image u-image-1" data-image-width="966" data-image-height="920"/>
                        </div>
                      </div>
                      <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                        <div className="u-container-layout u-valign-top u-container-layout-2">
                          <h2 className="u-align-left u-text u-text-1">Management consulting</h2>
                          <p className="u-align-left u-text u-text-2">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                          <a href="https://nicepage.cloud" className="u-active-black u-align-left u-border-active-white u-border-hover-white u-border-none u-btn u-btn-round u-button-style u-hover-black u-palette-3-base u-radius-50 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="u-size-30">
                    <div className="u-layout-row">
                      <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-3">
                        <div className="u-container-layout u-container-layout-3">
                          <div className="u-align-left u-palette-3-base u-shape u-shape-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="250"></div>
                          <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-white u-group-1" data-animation-name="customAnimationIn" data-animation-duration="1500">
                            <div className="u-container-layout u-valign-middle u-container-layout-4">
                              <p className="u-text u-text-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
                              </p>
                            </div>
                          </div>
                          <img src={im2} alt="" className="u-align-left u-image u-image-2" data-image-width="900" data-image-height="601" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>
)}

export default Section;