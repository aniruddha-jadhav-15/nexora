import { useQuery } from "@tanstack/react-query";
import featchProducts from "../services/productApi";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: featchProducts,
  });
};

export default useProducts;
