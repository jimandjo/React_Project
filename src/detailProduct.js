import React from "react";
import { useEffect, useState } from "react";
import API from "./API";
import { useParams } from "react-router-dom";
import { Button } from "bootstrap";

const DetailProduct = (handleDelete) => {

    const [ product, setProduct ] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        const getProduct = () => {
           API.getProductById(id).then(res => {
               console.log(res);
               setProduct(res.data);
               console.log(product);
              
           }) 
        }
        getProduct();
    }, [])

   

    return (
        <>
            <h1>{product.itemName}</h1>
            <p>{product.description}</p>
            <p> This is a {product.hot} drink</p>
            {/* <p>Price: $ {product.price}</p>
            <Button className="btn" onClick={() => handleDelete(product.id)}>Delete</Button> */}
            <a className="btn" href={`/updateProduct/${product.id}`}>Update Product</a>
        </>
        
        
    )
}

export default DetailProduct;