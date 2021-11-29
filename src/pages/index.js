import React from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes";
import RequireAuth from "../components/RequireAuth";

const App = () => {
  const showContentMain = () => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route) => {
        if (route.private) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <RequireAuth path={route.path} redirectTo="/login">
                  {route.main}
                </RequireAuth>
              }
            />
          );
        }
        return (
          <Route key={route.path} path={route.path} element={route.main} />
        );
      });
    }
    return <Routes>{result}</Routes>;
  };

  return (
    <React.Fragment>
      <>{showContentMain(routes)}</>
    </React.Fragment>
  );
};

export default App;
