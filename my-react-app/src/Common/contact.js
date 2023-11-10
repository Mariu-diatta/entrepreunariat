import {useState} from "react"

function Contact(){
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [textarea, setTextarea] = useState("");

   const handleSubmit = (e)=>{
        e.preventDefault();
          console.log([name,email,textarea]);
   };
   return(
        <section className="u-align-center u-clearfix  u-section-6" id="sec-b06d">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h2 className="u-text u-text-1">Contactez nous!</h2>
            <div className="u-form u-form-1">
              <form onSubmit={handleSubmit}  className="u-clearfix u-form-spacing-40 u-form-vertical u-inner-form" source="email">
                <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-none u-form-group-1">
                  <label htmlFor="name-e4cc" className="u-label u-text-body-color u-label-1">Name</label>
                  <input type="text" placeholder="Name" id="name-e4cc" name={name} value={name} onChange={(e)=>setName(e.target.value)}  className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-1" required="" wfd-id="id409"/>
                </div>
                <div className="u-form-email u-form-group u-form-partition-factor-2 u-label-none u-form-group-2">
                  <label htmlFor="email-e4cc" className="u-label u-text-body-color u-label-2">Email</label>
                  <input type="email" placeholder="Enter a valid email address" id="email-e4cc" name={email} value={email} onChange={(e)=>setEmail(e.target.value)} className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-2" required="" wfd-id="id410"/>
                </div>
                <div className="u-form-group u-form-message u-label-none u-form-group-3">
                  <label htmlFor="message-e4cc" className="u-label u-text-body-color u-label-3">Message</label>
                  <textarea name={textarea} value={textarea} onChange={(e)=>setTextarea(e.target.value)} placeholder="Enter your message" rows="4" cols="50" id="message-e4cc"  className="u-border-palette-3-base u-input u-input-rectangle u-text-body-color u-input-3" required=""></textarea>
                </div>
                <div className="u-align-center u-form-group u-form-submit u-label-none u-form-group-4">
                  <button type="submit" value="submit" className="u-active-palette-3-base u-black u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-base u-radius-50 u-btn-1">Valider</button>
                </div>
                <div className="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                <div className="u-form-send-error u-form-send-message">Unable to send your message. Please fix errors then try again.</div>
                <input type="hidden" value="" name="recaptchaResponse" wfd-id="id412"/>
                <input type="hidden" name="formServices" value="07f310ba1624bad464ca70695831d5d8"/>
              </form>
            </div>
          </div>
        </section>
    )
}
export default Contact;