import Login from "./Login";
import Dashboard from "./Dashboard";

const routes = [
  {
    path: "",
    exact: true,
    private: true,
    main: <Dashboard />,
  },
  {
    path: "/login",
    exact: true,
    private: false,
    main: <Login />,
  },
];

export default routes;
