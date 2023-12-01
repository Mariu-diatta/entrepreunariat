import im from "../accueil/Site1/images/3q6.jpg"
import Carousel from 'react-bootstrap/Carousel';

const Carrous =() =>{
    return(
    <Carousel className="u-align-center">
      <Carousel.Item interval={1010} style={{border:"0px"}}>
        <img src={im} width={window.innerWidth} height={window.innerHeight/2}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{border:"0px"}}>
        <img src={im} width={window.innerWidth}  height={window.innerHeight/2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{border:"0px"}}>
        <img src={im}  width={window.innerWidth}  height={window.innerHeight/2}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
 }

 export default Carrous;