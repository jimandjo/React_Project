import axios from "axios";

const baseURL = "http://localhost:3001/selections";

const API = {
    getAll: () => {
        return axios.get(baseURL);
    },
    createProduct: (newProduct) => {
        return axios.put(baseURL, newProduct);
    }
}

export default API;

//Changed createProduct function from createSelection function.