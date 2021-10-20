import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer_img from '../../images/logo.jpg'

const Footer = () => {
    return (
       <footer className="bg-light py-4">
           <div className="top-footer ">
               <Container>
                   <Row>
                       <Col lg={3} md={3} sm={12} xs={12}>
                          <div className="footer-1 m-sm-auto m-md-auto text-lg-start text-md-start">
                              <img src ={footer_img} alt=""></img>
                              <p className="text-secondary text-align-justify mt-3">The concept of expertise is widely embraced but poorly defined in surgery. Dictionary trusted charity providing a variety of support services to pharmacists.</p>
                          </div>
                        </Col>

                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div className="footer-2 m-sm-auto m-md-auto text-lg-start text-md-start">
                                <h2>Our Services</h2>
                                <p>Blood Bank</p>
                                <p>Emergency Ambulance</p>
                                <p>Cancer Care</p>
                                <p>Old Care</p>
                                <p>Sergury Expert</p>
                            </div>
                        </Col>

                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div className="footer-3 m-sm-auto m-md-auto text-lg-start text-md-start">
                                <h2>Our Doctors</h2>
                                <p>Dr.Golam Hakkani</p>
                                <p>Dr.Rakib Hasan</p>
                                <p>Dr.Rashdual Alom</p>
                                <p>Dr.Tanjuma Farhan</p>
                                <p>Dr.Tasnia Alom</p>
                            </div>
                        </Col>
                       
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div className="footer-4 m-sm-auto m-md-auto text-lg-start text-md-start">
                                <h2>Opens Time</h2>
                                <p>Sat:10.00 am - 4.00pm</p>
                                <p>Fri: 10.00 am - 2.00 pm</p>
                                <h2>Closed Hours</h2>
                                <p>Sun : 4.00 - 8.00</p>
                                
                            </div>
                        </Col>
                       
              
                   </Row>
               </Container>
           </div>
           <hr/>
        <Container>
            <Row>
                <Col>
                    <div className="main-footer text-center py-2 text-secondary">
                       <p>All Right Reserved @ copy by Golam Hakkani Mim</p>
                    </div>
                </Col>
            </Row>
        </Container>



       </footer>
    );
};

export default Footer;