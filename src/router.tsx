import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import MainLayout from "./components/layout/MainLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
];

export default routes;
