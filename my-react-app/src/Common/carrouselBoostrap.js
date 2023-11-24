import im from "../accueil/Site1/images/3q6.jpg"
import Carousel from 'react-bootstrap/Carousel';

const Carrous =() =>{
    return(
    <Carousel>
      <Carousel.Item interval={1000} >
        <img src={im} style={{height:"300px", weight:"100%"}}/>
        <img src={im} style={{height:"300px", weight:"100%"}}/>
        <img src={im} style={{height:"300px", weight:"100%"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={im} style={{height:"300px", weight:"100%"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={im}  style={{height:"300px", weight:"100%"}}/>
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