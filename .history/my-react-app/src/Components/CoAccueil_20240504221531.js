
import SectionU from './sectionU.js';
import Carrous from '../Containers/bootstrapUI/CoBootsCarrousel.js';
import MainSection from './mainSection.js';
import Footer from './footerBoostrap.js';

const Accueil =() => {
    return(
        <div className='container-fluid'>
            <div>
                <Carrous />
            </div>
            <div className='container'>
                <SectionU/>
                <MainSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default Accueil;