import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box p={4}>
      <Navbar />
      {children}
    </Box>
  );
};

export default MainLayout;
