import LoginForm from "@features/authentication/components/LoginForm";
import Header from "@features/dashboard/components/Header";
import ProductSearch from "@features/dashboard/components/ProductSearch";
import { useProductFilter } from "@features/dashboard/hooks/useProductFilter";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import GenericModal from "src/components/GenericModal";
import ProductCard from "src/components/ProductCard";
import { setOpen } from "src/redux/global/global.action";
import { selectIsOpen } from "src/redux/global/global.selector";
import { productsList } from "src/utils/data/data";
import { useAppDispatch } from "src/utils/reducer/reducerHook.utils";

const Home = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useAppDispatch();
  const {
    handleSetSearchQuery,
    productFilter,
    handleCategoriesOnClick,
    category,
  } = useProductFilter(productsList);
  const [disabledBackdropClick, setDisabledBackdropClick] = useState(false);

  const handleSetOpen = useCallback(() => {
    try {
      dispatch(setOpen(false));
    } catch (error) {
      console.error("Error setting modal open state:", error);
    }
  }, [dispatch]);

  return (
    <Box mr={smDown ? 0 : 5} ml={smDown ? 0 : 5}>
      <Header />
      <ProductSearch
        handleSetSearchQuery={handleSetSearchQuery}
        handleCategoriesOnClick={handleCategoriesOnClick}
        category={category}
      />
      <Box
        mt={5}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 column on small screens
            sm: "repeat(2, 1fr)", // 1 column on small screens
            md: "repeat(2, 1fr)", // 6 columns on medium screens
            lg: "repeat(3, 1fr)", // 5 columns on large screens
          },

          gap: {
            xs: 2, // gap of 4 units on small screens
            sm: 1,
            md: 5,
            lg: 5, // gap of 8 units on large screens
          },
          mx: "auto", // horizontal centering
        }}
      >
        {productFilter.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Box>
      <GenericModal
        visible={isOpen}
        setVisible={handleSetOpen}
        disabledBackdropClick={disabledBackdropClick}
      >
        <LoginForm setDisabledBackdropClick={setDisabledBackdropClick} />
      </GenericModal>
    </Box>
  );
};

export default Home;
