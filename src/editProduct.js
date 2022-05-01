import React from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditProduct( handleNameChange, handleDescriptionChange, handleBoxChange, handlePriceChange, handleUrlChange, updateProduct) {

        let { id } = useParams();

    return (
    <>
        <Form className="forms">
            <div className="form-group">
                <label for="itemName">Product Name</label>
                <input type="text" className="form-control" onChange={handleNameChange}   placeholder="Enter New Product Name" />
            </div>
            <div className="form-group">
                <label for="">Description</label>
                <input type="text" className="form-control" onChange={handleDescriptionChange} placeholder="Enter New Description" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" onChange={handleBoxChange}  />
                <label className="form-check-label">Click here for Hot Drink</label>
            </div>
            <div className="form-group">
                <label for="">Price</label>
                <input type="text" className="form-control" onChange={handlePriceChange}  placeholder="Enter New Price" />
            </div>
            <div className="form-group">
                <label for="">Picture</label>
                <input type="text" className="form-control" onChange={handleUrlChange}  placeholder="URL for Picture" />
            </div>
           
        </Form>
    </>
    )
}

export default EditProduct;