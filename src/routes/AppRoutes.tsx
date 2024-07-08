import { useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Auth/Login";
import Registration from "src/pages/Auth/Registration";
import User from "src/pages/Dashboard/User";

const routes = [
  { path: NAVIGATION_ROUTES.DASHBOARD, element: <User /> },
  {
    path: NAVIGATION_ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: NAVIGATION_ROUTES.REGISTRATION,
    element: <Registration />,
  },
  {
    path: NAVIGATION_ROUTES.USER,
    element: <User />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
