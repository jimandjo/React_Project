import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Products from './Products';
import Welcome from './Welcome';
import API from './API';
import DetailProduct from './detailProduct';
import EditProduct from './editProduct';
import CreateProduct from './createProduct';

function App() {

    const [ allProducts, setAllProducts ] = useState([]);
    const [ newProduct, setNewProduct ] = useState({
      id: "",
      itemName: "",
      description: "",
      hot: Boolean,
      price: 3.00,
      url: ""
    });

    

    useEffect(() => {
      getProducts();
    }, [])


  const getProducts = () => {
  API.getAll().then(res => {
    setAllProducts(res.data)
  })
};

const handleNameChange = (e) => {
  const { value } = e.target;
  setNewProduct({...newProduct, itemName: value})
  
}

const handleDescriptionChange = (e) => {
  const { value } = e.target;
  setNewProduct({...newProduct, description: value})
   
}

const handleBoxChange = (e) => {
  const { value } = e.target;
  setNewProduct({...newProduct, hot: value})
   
}

const handlePriceChange = (e) => {
  const { value } = e.target;
  setNewProduct({...newProduct, price: value})
   
}

const handleUrlChange = (e) => {
  const { value } = e.target;
  setNewProduct({...newProduct, url: value})
   
}
  const handleSubmit = (e) => {
    e.preventDefault();
    API.createProduct(newProduct).then(res => {
      
    })  
  }

  const updateProduct = (id) => {
    API.UpdateProduct(id, newProduct).then(res => {
      
     
    })
  }

  const handleDelete = (id) => {
      API.deleteProduct(id).then(res => {
      });
  }


  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Welcome />}/>
            <Route path="about" element={<About />} />
          <Route path="products" element={<Products productData={allProducts} 
                handleNameChange={handleNameChange} 
                handleDescriptionChange={handleDescriptionChange} 
                handleBoxChange={handleBoxChange} 
                handlePriceChange={handlePriceChange} 
                handleUrlChange={handleUrlChange} 
                handleSubmit={handleSubmit}
                handleDelete={handleDelete} />} />
          </Route>
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="detailProduct/:id" element={<DetailProduct handleDelete={handleDelete} />} />
          <Route path="updateProduct/:id" element={<EditProduct handleNameChange={handleNameChange} handleDescriptionChange={handleDescriptionChange} handleBoxChange={handleBoxChange} handlePriceChange={handlePriceChange} handleUrlChange={handleUrlChange} updateProduct={updateProduct} />} />
        </Routes>
      </BrowserRouter>
   
  )
}

export default App;
