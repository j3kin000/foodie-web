import { useRoutes } from "react-router-dom";
import routes from "./router";

const App = () => {
  const elements = useRoutes(routes);
  return elements;
};

export default App;
