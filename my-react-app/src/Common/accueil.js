
import SectionU from './sectionU.js'
import Carrous from './carrouselBoostrap.js'
import Section from './section.js'
import Footer from './footer.js'

const Accueil =() => {
    return(
        <>
            <div  className=" " style={{}}>
                <Carrous />
            </div>
            <div  style={{paddingLeft:"10%", paddingRight:"10%"}}>
                <SectionU/>
                <Section/>
            </div>
            <Footer/>
        </>
    )
}

export default Accueil;