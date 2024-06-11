import MainLayout from "./layout/MainLayout";

export const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  return <MainLayout>{element}</MainLayout>;
};
