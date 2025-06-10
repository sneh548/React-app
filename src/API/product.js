import axios from "axios";

const baseApiUrl = "https://node-20240823.versal.app";

const getProducts =  () => {
 const data = axios.get(`${baseApiUrl}/api/products`);
 console.log(data)
};

export { getProducts };