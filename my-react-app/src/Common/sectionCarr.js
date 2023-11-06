import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import im1 from "../accueil/Site1/images/789.png";
import im2 from "../accueil/Site1/images/6457.jpg";
import im3 from "../accueil/Site1/images/553566.jpg";

function  SectionCarr() {
        return(
            <Carousel>
                <div style={{height: "500px", width: "100%"}} >
                    <img src={im3} />
                    <p className="">Je suis le fou de fou</p>
                </div>
                <div style={{height: "500px", width: "100%"}} >
                    <img src={im1}  />
                    <p className="">Legend 2</p>
                </div>
                <div style={{height: "500px", width: "100%"}} >
                    <img src={im3}  />
                    <p className="">Legend 3</p>
                </div>
                <div style={{height: "500px", width: "100%"}}>
                    <img src={im2} />
                    <p className="">Legend 3</p>
                </div>
            </Carousel>
        );
 }

 export default SectionCarr;