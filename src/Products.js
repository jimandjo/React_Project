import React from "react";
import CreateProduct from "./createProduct";



function Products({ productData, handleSubmit, handleNameChange, handleDescriptionChange, handleBoxChange, handlePriceChange, handleUrlChange, handleDelete }) {




    return(
        
    <>


        <h1>
            COFFEE INNOVATION
        </h1>
        <CreateProduct handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleDescriptionChange={handleDescriptionChange} handleBoxChange={handleBoxChange} handlePriceChange={handlePriceChange} handleUrlChange={handleUrlChange}  />
        {productData.map(product => (
            <div key={product.id}>
                <h3>{product.itemName}</h3>
                <a className="btn" href={`detailProduct/${product.id}`}>
                View Product
                </a>

                <a className="btn" href={`updateProduct/${product.id}`}>
                Edit Product
                </a>
                <button className="btn"  onClick={() => handleDelete(product.id)}>Delete</button>

            </div>
        ))}


        
    </>
        
    )
}

export default Products;