import React, { useEffect, useState } from 'react';
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
            <h2>{singleDetailsService?.name}</h2>
            <p>{singleDetailsService?.desc}</p>
            <img src={singleDetailsService?.img} alt="" />
            <Link style={{background:"black"}} to="/home">Back</Link>
        </div>
    );
};

export default SingleService;