import React from "react";
import { Form } from "react-bootstrap";
import Products from "./Products";

function CreateProduct({ handleSubmit, handleNameChange, handleDescriptionChange, handleBoxChange, handlePriceChange, handleUrlChange }) {
    return(
    <>
        <Form onSubmit={handleSubmit} className="forms">
            <div class="form-group">
                <label for="itemName">Product Name</label>
                <input type="itemName" class="form-control" onChange={handleNameChange}   placeholder="Enter Product Name" />
            </div>
            <div class="form-group">
                <label for="">Description</label>
                <input type="text" class="form-control" onChange={handleDescriptionChange} placeholder="Enter Description" />
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" onChange={handleBoxChange}  />
                <label class="form-check-label">Check for Hot Drink</label>
            </div>
            <div class="form-group">
                <label for="">Price</label>
                <input type="text" class="form-control" onChange={handlePriceChange}  placeholder="Enter Price" />
            </div>
            <div class="form-group">
                <label for="">Picture</label>
                <input type="text" class="form-control" onChange={handleUrlChange}  placeholder="URL for Picture" />
            </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </Form>

      
    </>
    )
}

export default CreateProduct;