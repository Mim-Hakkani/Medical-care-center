import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleService = () => {
    const{id}=useParams()
    console.log(id)

    const [singleService,setSingleService]=useState([]);
    const [singleDetailsService,setsingleDetailsService]=useState({});
    
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setSingleService(data))
    },[]);

    useEffect(()=>{
        const serviceFound=singleService.find(service=>service.id===id)
        setsingleDetailsService(serviceFound)
    },[singleService,id]);

    return (
        <div>
            <Container>
                <Row>
                    <Col className="border border-1 border-muted py-5 my-5 text-center w-50">
                        <img src={singleDetailsService?.img} alt="" style={{height:'300px',width:'600px'}} />
                        <h2>{singleDetailsService?.name}</h2>
                        <p className="w-50 text-center m-auto">{singleDetailsService?.desc}</p>
                        <Link style={{background:"black",padding:'10px 50px',margin:"10px 0px",display: 'inline-block',borderRadius: '5px'}} to="/home">Back</Link>
                    </Col>
                </Row>
            </Container>
            
         

            
        </div>
    );
};

export default SingleService;