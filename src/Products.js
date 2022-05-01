import React from "react";
import { Card } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import API from "./API";



function Products({ productData, handleSubmit, handleNameChange, handleDescriptionChange, handleBoxChange, handlePriceChange, handleUrlChange, handleDelete }) {



     


    return(
        
    <>


        <h1>
            COFFEE INNOVATION in a CUP
        </h1>
        {/* <CreateProduct handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleDescriptionChange={handleDescriptionChange} handleBoxChange={handleBoxChange} handlePriceChange={handlePriceChange} handleUrlChange={handleUrlChange}  /> */}
        {productData.map(product => (
            <div key={product.id} className="flexbox-container">
              
                <Card style={{ width: '18rem' }} border="success">
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href={`detailProduct/${product.id}`}>View</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`updateProduct/${product.id}`}>Edit</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={() => (product.id)}>Delete</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Img></Card.Img>
                    <Card.Title color="red">{product.itemName}</Card.Title>
                    <Card.Subtitle>${product.price}</Card.Subtitle>
         
                </Card.Body>
                </Card>

            </div>
        ))}


        
    </>
        
    )
}

export default Products;