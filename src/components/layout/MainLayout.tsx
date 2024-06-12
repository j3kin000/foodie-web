import { Box, Button, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import GenericModal from "../GenericModal";
import { useSelector } from "react-redux";
import { selectIsOpen } from "src/redux/global/global.selector";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const isOpen = useSelector(selectIsOpen);
  return (
    <Box p={4}>
      <Navbar />
      {children}
    </Box>
  );
};

export default MainLayout;
