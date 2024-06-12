import { useState } from "react";

export function filterProducts(products: Product[], category: string) {
  return products.filter((product: Product) => product.category === category);
}

export type Product = {
  prodName: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  prodImg: string;
  status: string;
};

export const useProductFilter = (products: Product[]) => {
  const [productFilter, setProductFilter] = useState(products);
  const [category, setCategory] = useState("All");

  const handleCategoriesOnClick = (category: string) => {
    setCategory(category);
    if (category === "All") {
      setProductFilter(products);
    } else {
      const filteredProd = products.filter(
        (product: Product) => product.category === category
      );
      setProductFilter(filteredProd);
    }
  };

  const handleSetSearchQuery = (search: string) => {
    const lowercaseSearch = search.toLowerCase(); // Convert search to lowercase for case-insensitive comparison

    if (search === "") {
      setProductFilter(products);
    } else {
      const filteredProd = products.filter((product: Product) =>
        product.prodName.toLowerCase().includes(lowercaseSearch)
      );
      setProductFilter(filteredProd);
    }
  };

  return {
    handleSetSearchQuery,
    productFilter,
    handleCategoriesOnClick,
    category,
  };
};
