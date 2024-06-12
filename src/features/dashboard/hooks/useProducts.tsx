import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./useProductFilter";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
