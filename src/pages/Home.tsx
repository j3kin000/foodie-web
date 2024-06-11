import LoginForm from "@features/authentication/components/LoginForm";
import Header from "@features/dashboard/components/Header";
import ProductSearch from "@features/dashboard/components/ProductSearch";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import GenericModal from "src/components/GenericModal";
import { setOpen } from "src/redux/global/global.action";
import { selectIsOpen } from "src/redux/global/global.selector";
import { useAppDispatch } from "src/utils/reducer/reducerHook.utils";

const Home = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isOpen = useSelector(selectIsOpen);
  console.log("isopoen", isOpen);
  const dispatch = useAppDispatch();
  const [disabledBackdropClick, setDisabledBackdropClick] = useState(false);
  const setIsOpen = () => {
    try {
      dispatch(setOpen(false));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mr={smDown ? 0 : 5} ml={smDown ? 0 : 5}>
      <Header />
      <ProductSearch />
      <GenericModal
        visible={isOpen}
        setVisible={setIsOpen}
        disabledBackdropClick={disabledBackdropClick}
      >
        <LoginForm setDisabledBackdropClick={setDisabledBackdropClick} />
      </GenericModal>
    </Box>
  );
};

export default Home;
