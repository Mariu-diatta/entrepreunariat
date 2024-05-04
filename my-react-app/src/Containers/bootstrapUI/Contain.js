const Contain=(props)=>{
    return(
      <div className="u-size-30"  >
       
        <div className="u-layout-row">
          <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-3">
            <div className="u-container-layout u-container-layout-3">
              <div className="u-align-left u-palette-3-base u-shape u-shape-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="250"></div>
              <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-white u-group-1" data-animation-name="customAnimationIn" data-animation-duration="1500">
                <div className="u-container-layout u-valign-middle u-container-layout-4">
                 <h4>Nos activités</h4>
                  <aside className="u-text u-text-3"><small>{props.contenu}</small>
                  </aside>
                </div>
              </div>
              <img  src={props.image} alt="" className="u-align-left u-image u-image-2" data-image-width="900" data-image-height="601" data-animation-name="customAnimationIn" data-animation-duration="1250" data-animation-delay="0" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contain;
