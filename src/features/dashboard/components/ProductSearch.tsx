import { Box } from "@mui/material";
import { useState } from "react";
import CustomButton from "src/components/CustomButton";
import Searchbar from "src/components/Searchbar";

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
        <Searchbar setSearchQuery={setSearchQuery} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <CustomButton
          text="Meals"
          butonStyle={{ pr: 2, pl: 2, borderRadius: 20 }}
          variant="outlined"
        />
        <CustomButton
          text="Drinks"
          butonStyle={{ pr: 2, pl: 2, borderRadius: 20 }}
          variant="outlined"
        />
        <CustomButton
          text="Desserts"
          butonStyle={{ pr: 2, pl: 2, borderRadius: 20 }}
          variant="outlined"
        />
        <CustomButton
          text="Snacks"
          butonStyle={{ pr: 2, pl: 2, borderRadius: 20 }}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default ProductSearch;
