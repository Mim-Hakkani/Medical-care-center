import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{}}>

        <Carousel fade >
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://image.freepik.com/free-photo/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg"
            alt="First slide"
            style={{height:'700px',width:'100%'}}
            
          />
          <Carousel.Caption className="text-dark">
            <h3>We Care Of Your Health</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  img-fluid"
            src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
            alt="Second slide"
            style={{height:'700px',width:'100%'}}
           
          />
      
          <Carousel.Caption className="text-dark">
            <h3>Lots of Doctor is Here</h3>
            <p>we have very careful of our patients</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  img-fluid"
            src="https://image.freepik.com/free-photo/young-female-surgeon-with-medical-team-back-before-surgery_329181-9257.jpg"
            alt="Third slide"
            style={{height:'700px',width:'100%'}}
            
          />
      
          <Carousel.Caption className="text-dark">
            <h3>Operational Specalist </h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></div>
    );
};

export default Banner;