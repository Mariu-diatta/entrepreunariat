
import SectionU from './sectionU.js'
import Carrous from './carrouselBoostrap.js'
import Section from './section.js'
import Footer from './footer.js'

const Accueil =() => {
    return(
        <>
            <div>
                <Carrous />
            </div>
            <div className='container-fluid p-3'>
                <SectionU/>
                <Section/>
            </div>
            <Footer/>
        </>
    )
}

export default Accueil;