import MainLayout from "./layout/MainLayout";

export const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  // Wrap the element with the MainLayout component
  return <MainLayout>{element}</MainLayout>;
};
