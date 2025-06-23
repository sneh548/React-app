import axios from "axios";

const baseApiUrl = "https://api.pujakaitem.com";

const getProducts = () => {
  const data = axios.get(`${baseApiUrl}/api/products`);
  console.log(data);
};

export { getProducts };
