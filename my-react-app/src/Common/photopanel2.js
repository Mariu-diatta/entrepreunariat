import {useState} from "react"

const Photopanel2 = (props)=>{
    return(
       <div className="u-align-left u-container-style u-image u-list-item u-repeater-item u-shading u-image-9" src={props.image} data-image-width="740" data-image-height="943" data-animation-name="customAnimationIn" data-animation-duration="1500">
          <div className="u-container-layout u-similar-container u-container-layout-17">
            <div className="u-align-center u-container-style u-expanded-width u-group u-opacity u-opacity-85 u-white u-group-9" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
              <div className="u-container-layout u-valign-middle u-container-layout-18">
                <h6 className="u-text u-text-11"> props.subject</h6>
              </div>
            </div>
          </div>
       </div>
    )
}