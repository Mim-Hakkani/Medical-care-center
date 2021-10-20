import React from 'react';
import { Card,Button, Col, CardGroup } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Service = (props) => {
    const {name,desc,img,id}=props.service
    return (
     
        <Col md={4} lg={4} sm={12}> 
           <div className="pb-5">
            <CardGroup >
                <Card className="m-2" style={{height:'450px'}}>
                    <Card.Img variant="top" src={img} style={{height:'200px'}} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    </Card.Body>
                
                    <NavLink to={`/service/${id}`} className="btn btn-info">Read More,,</NavLink>
                    
                </Card>
           </CardGroup></div>
        </Col>
    );
};

export default Service;