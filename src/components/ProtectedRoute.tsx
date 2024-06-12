import MainLayout from "./layout/MainLayout";
import { useSelector } from "react-redux";
import { selectAccessToken } from "src/redux/global/global.selector";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  const accessToken = useSelector(selectAccessToken);
  if (accessToken === "") {
    return <Navigate to="/" />;
  }
  return <MainLayout>{element}</MainLayout>;
};
