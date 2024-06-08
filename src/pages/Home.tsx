import LoginForm from "@features/authentication/components/LoginForm";
import Header from "@features/dashboard/components/Header";
import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import GenericModal from "src/components/GenericModal";
import { setOpen } from "src/redux/global/global.action";
import { selectIsOpen } from "src/redux/global/global.selector";
import { useAppDispatch } from "src/utils/reducer/reducerHook.utils";

const Home = () => {
  const isOpen = useSelector(selectIsOpen);
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
    <Box>
      <Header />
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
