import React from "react";
import { useEffect, useState } from "react";
import API from "./API";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";


const DetailProduct = (handleDelete) => {

    const [ product, setProduct ] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        const getProduct = () => {
           API.getProductById(id).then(res => {
               setProduct(res.data);
               
              
           }) 
        }
        getProduct();
    }, [])

   

    return (
        <>
  
            

            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src="holder.js/200px280" />
                <Card.Body>
                    <Card.Img></Card.Img>
                    <Card.Title>{product.itemName}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Subtitle>${product.price}</Card.Subtitle>
                    <Card.Link href={`/updateProduct/${product.id}`}>Update Product</Card.Link>
                </Card.Body>
                </Card>

        </>
        
        
    )
}

export default DetailProduct;