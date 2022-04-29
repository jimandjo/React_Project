import axios from "axios";

const baseURL = "http://localhost:3001/selections";

const API = {
    getAll: () => {
        return axios.get(baseURL);
    },
    createProduct: (newProduct) => {
        return axios.post(baseURL, newProduct);
    },
    getProductById: (id) => {
        return axios.get(`${baseURL}/${id}`)
    },
    UpdateProduct: (id, updateProduct) => {
        return axios.put(`${baseURL}/${id}`, updateProduct);
    },
    deleteProduct: (id) => {
        return axios.delete(`${baseURL}/${id}`);
    }



}

export default API;

//Changed createProduct function from createSelection function.