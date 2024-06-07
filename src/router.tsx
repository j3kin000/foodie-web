import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedRoute element={<Home />} />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
];

export default routes;
