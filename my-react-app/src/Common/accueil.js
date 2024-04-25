
import SectionU from './sectionU.js'
import Carrous from './carrouselBoostrap.js'
import Section from './section.js'
import Footer from './footer.js'

const Accueil =() => {
    return(
        <div className='container-fluid'>
            <div>
                <Carrous />
            </div>
            <div className='container'>
                <SectionU/>
                <Section/>
            </div>
            <Footer/>
        </div>
    )
}

export default Accueil;