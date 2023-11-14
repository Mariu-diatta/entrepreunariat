
import SectionU from './sectionU.js'
import Carrous from './carrouselBoostrap.js'
import Section from './section.js'


const Accueil =() => {
    return(
        <div className="" style={{paddingLeft:"80px", paddingRight:"80px"}}>
            <Carrous />
            <SectionU/>
            <Section/>
        </div>
    )
}

export default Accueil;