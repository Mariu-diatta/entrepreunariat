
import SectionU from './sectionU.js'
import Carrous from './carrouselBoostrap.js'
import Section from './section.js'

const Accueil =() => {
    return(
        <div className="p-4" style={{paddingLeft:"30px", paddingRight:"30px"}}>
            <Carrous />
            <SectionU/>
            <Section/>
        </div>
    )
}

export default Accueil;