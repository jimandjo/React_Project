import React from "react";
import { Form } from "react-bootstrap";
import Products from "./Products";
import App from "./App";

function CreateProduct({ handleSubmit, handleNameChange, handleDescriptionChange, handleBoxChange, handlePriceChange, handleUrlChange }) {

    return(
    <>
        <Form onSubmit={handleSubmit} className="forms">
            <div className="form-group">
                <label for="itemName">Product Name</label>
                <input type="itemName" className="form-control" onChange={handleNameChange}   placeholder="Enter Product Name" />
            </div>
            <div className="form-group">
                <label for="">Description</label>
                <input type="text" className="form-control" onChange={handleDescriptionChange} placeholder="Enter Description" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" onChange={handleBoxChange}  />
                <label className="form-check-label">Click here for Hot Drink</label>
            </div>
            <div className="form-group">
                <label for="">Price</label>
                <input type="text" className="form-control" onChange={handlePriceChange}  placeholder="Enter Price" />
            </div>
            <div className="form-group">
                <label for="">Picture</label>
                <input type="text" className="form-control" onChange={handleUrlChange}  placeholder="URL for Picture" />
            </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </Form>

      
    </>
    )
}

export default CreateProduct;