
import SectionU from './sectionU.js'
import Carrous from './carrouselBoostrap.js'
import Section from './section.js'


const Accueil =() => {
    return(
        <div style={{paddingLeft:"", paddingRight:""}}>
            <div  className="u-grey-30 " style={{paddingLeft:"80px", paddingRight:"80px", paddingTop:"40px",  paddingBottom:"10px"}}>
                <Carrous />
            </div>
            <div  style={{paddingLeft:"80px", paddingRight:"80px"}}>
                <SectionU/>
                <Section/>
            </div>
        </div>
    )
}

export default Accueil;