import LoginForm from "@features/authentication/components/LoginForm";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import GenericModal from "src/components/GenericModal";
import { setOpen } from "src/redux/global/global.action";
import { selectIsOpen } from "src/redux/global/global.selector";
import { useAppDispatch } from "src/utils/reducer/reducerHook.utils";

const Home = () => {
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useAppDispatch();
  const setIsOpen = () => {
    try {
      dispatch(setOpen(false));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <main>This app is using the dark mode</main>
      <Typography variant="h1">Home</Typography>

      <GenericModal visible={isOpen} setVisible={setIsOpen}>
        <LoginForm />
      </GenericModal>
    </div>
  );
};

export default Home;
