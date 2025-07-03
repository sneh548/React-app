import axios from "axios";

const baseApiUrl = "https://api.pujakaitem.com";

const getProducts = async () => {
  const response = await axios
    .get(`${baseApiUrl}/api/products`);
    // .then((response) => {
    //   console.log(response.data);
    return response;
    };
    // .catch();
  // console.log(data);


export { getProducts };
