import { Box } from "@mui/material";
import { FC } from "react";
import CustomButton from "src/components/CustomButton";
import Searchbar from "src/components/Searchbar";

const categoriesList = ["Meals", "Drinks", "Desserts", "Snacks", "All"];
type ProductSearchProps = {
  handleSetSearchQuery: (query: string) => void;
  handleCategoriesOnClick: (category: string) => void;
  category?: string;
};
const ProductSearch: FC<ProductSearchProps> = ({
  handleSetSearchQuery,
  handleCategoriesOnClick,
  category,
}) => {
  return (
    <Box
      mt={5}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: { sm: "center", md: "space-between", xs: "center" },
        alignItems: { sm: "center", md: "space-between", xs: "center" },
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box>
        <Searchbar handleSetSearchQuery={handleSetSearchQuery} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 1, sm: 2 },
        }}
      >
        {categoriesList.map((item, index) => (
          <CustomButton
            key={index}
            text={item}
            butonStyle={{
              pr: { xs: 1, sm: 2 },
              pl: { xs: 1, sm: 2 },
              borderRadius: { xs: 10, sm: 20 },
            }}
            variant={category === item ? "contained" : "outlined"}
            handleOnCLick={() => handleCategoriesOnClick(item)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductSearch;
