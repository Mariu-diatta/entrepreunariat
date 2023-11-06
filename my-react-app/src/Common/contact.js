function Contact(){
    return(
        <section className="u-align-center u-clearfix u-palette-3-base u-section-6" id="sec-b06d">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h2 className="u-text u-text-1">Contactez nous!</h2>
            <div className="u-form u-form-1">
              <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" source="email">
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label for="name-e4cc" className="u-label u-text-body-color u-label-1">Name</label>
                  <input type="text" placeholder="Name" id="name-e4cc" name="name" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" required="" wfd-id="id409"/>
                </div>
                <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                  <label for="email-e4cc" className="u-label u-text-body-color u-label-2">Email</label>
                  <input type="email" placeholder="Enter a valid email address" id="email-e4cc" name="email" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-2" required="" wfd-id="id410"/>
                </div>
                <div className="u-form-group u-form-message u-label-none u-form-group-3">
                  <label for="message-e4cc" className="u-label u-text-body-color u-label-3">Message</label>
                  <textarea placeholder="Enter your message" rows="4" cols="50" id="message-e4cc" name="message" className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-3" required=""></textarea>
                </div>
                <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4">
                  <input type="submit" value="submit" className="u-form-control-hidden u-grey-5" wfd-id="id411"/>
                  <a href="#" className="u-active-palette-3-base u-black u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-base u-radius-50 u-btn-1">Valider</a>
                </div>
                <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                <div class="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-id="id412"/>
                <input type="hidden" name="formServices" value="07f310ba1624bad464ca70695831d5d8"/>
              </form>
            </div>
          </div>
        </section>
    )
}

export default Contact;