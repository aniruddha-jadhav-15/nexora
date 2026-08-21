import axios from "axios";
const featchProducts = async () => {
  const resposie = await axios.get("https://api.escuelajs.co/api/v1/products");
  return resposie.data;
};

export default featchProducts;
