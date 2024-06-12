/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import MainLayout from "./components/layout/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const Order = lazy(() => import("./pages/Order"));
const Cart = lazy(() => import("./pages/Cart"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "cart",
    element: (
      <ProtectedRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        }
      />
    ),
  },
  {
    path: "trackorder",
    element: (
      <ProtectedRoute
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Order />
          </Suspense>
        }
      />
    ),
  },
];

export default routes;
