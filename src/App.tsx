import { useRoutes } from "react-router-dom";
import routes from "./router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/user/user.selector";
import { selectAccessToken } from "./redux/global/global.selector";

const App = () => {
  const accessToken = useSelector(selectAccessToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log("user", user);
    console.log("access_token", accessToken);
  }, [accessToken]);

  const elements = useRoutes(routes);
  return elements;
};

export default App;
