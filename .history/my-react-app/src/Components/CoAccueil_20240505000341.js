
import SectionProduct from './CoSectionProductContain.js';
import Carrous from '../Containers/bootstrapUI/ConTBootsCarrousel.js';
import MainSection from './CoMainSection.js';
import Footer from './CoFooterBoostrap.js';
import AboutUser from './CoAboutUser.js';

const Accueil =() => {
    return(
        <div className='container-fluid'>
            <div>
                <Carrous />
            </div>
            <div className='container'>
                <SectionProduct/>
                <MainSection><AboutUser/></MainSection>
            </div>
            <Footer/>
        </div>
    )
}

export default Accueil;