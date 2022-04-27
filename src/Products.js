import React from "react";
import CreateProduct from "./createProduct";



function Products({ productData, handleSubmit, handleNameChange, handleDescriptionChange, handleBoxChange, handlePriceChange, handleUrlChange }) {




    return(
    <>


        <h1>
            COFFEE INNOVATION
        </h1>
        <CreateProduct handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleDescriptionChange={handleDescriptionChange} handleBoxChange={handleBoxChange} handlePriceChange={handlePriceChange} handleUrlChange={handleUrlChange}  />
        {productData.map(product => (
            <div key={product.id}>
                <h3>{product.id}{product.itemName} ${product.price}</h3>
            </div>
        ))}



    </>
    )
}

export default Products