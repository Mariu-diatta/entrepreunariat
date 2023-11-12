
import SectionU from './sectionU.js'
import Carrous from './carrouselBoostrap.js'
import Section from './section.js'

const Accueil =() => {
    return(
        <div className="" style={{paddingLeft:"100px", paddingRight:"100px"}}>
            <Carrous />
            <SectionU/>
            <Section/>
        </div>
    )
}

export default Accueil;