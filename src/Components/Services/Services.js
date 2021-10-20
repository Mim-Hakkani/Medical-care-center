import React, { useState, useEffect } from 'react';
import { Container,Row,Col, CardGroup, Card,Button } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <h1 className="text-center my-5">Services</h1>
                    </Col>
                </Row>
                <Row>
                    

                        {
                           services.map(service=><Service key={service.id} service={service}></Service>)
                        }

                        {/* <Card className="m-2">
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                           
                              <Button className="btn btn-info">Read More,,</Button>
                            
                        </Card> */}

                        
                
            </Row>
        </Container>
        </div>
    );
};

export default Services;