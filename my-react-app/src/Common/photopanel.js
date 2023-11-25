import {useState} from 'react'

const Photopanel=(props)=>{

  const [readmore, setReadmore]=useState(false)

  return(
    
    <div className="u-size-30">
      <div className="u-layout-col">
        <div  data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="500">
          <div className="u-container-layout">
            <img src={props.image} alt="" className="u-align-left u-expanded-width u-image u-image-1" data-image-width="966" data-image-height="950"/>
          </div>
        </div>
        <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
          <div className="u-container-layout u-valign-top u-container-layout-2">
            <h4 className="u-align-left u-text u-text-1">{props.title}</h4>
            <aside  className="u-align-left u-text u-text-2"><small>{props.contenu}</small></aside>
            <button onClick={(e)=>!readmore?setReadmore(true):setReadmore(false)} className="u-active-black u-align-left u-border-active-white u-border-hover-white u-border-none u-btn u-btn-round u-button-style u-hover-black u-palette-3-base u-radius-50 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">{readmore?<div>réduire</div>:<div>Lire plus</div>}</button>
            {readmore?<p><small>Je suis le contenue à lire de plus </small></p>:<p></p> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photopanel;