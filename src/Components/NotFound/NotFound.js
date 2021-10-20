import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import nfound from '../../images/404.png'

const NotFound = () => {
    return (
        <Container >
            <Row>
                <Col>
                <div className="m-auto d-block py-5">
                   <img src={nfound} alt ="page not founf" className="img-fluid "></img>
                </div>
                </Col>
            </Row>
        </Container>
       
    );
};

export default NotFound;