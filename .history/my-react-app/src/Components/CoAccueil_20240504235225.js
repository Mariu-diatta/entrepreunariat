
import SectionProduc from './CoSectionProductContain.js';
import Carrous from '../Containers/bootstrapUI/ConTBootsCarrousel.js';
import MainSection from './CoMainSection.js';
import Footer from './CoFooterBoostrap.js';

const Accueil =() => {
    return(
        <div className='container-fluid'>
            <div>
                <Carrous />
            </div>
            <div className='container'>
                <SectionProduc/>
                <MainSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default Accueil;