import axios from "axios";

const featchProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=150");

  return response.data.products;
};

export default featchProducts;
