import { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PUBLIC_ROUTE } from "../constants/router.config";
import { authenticationService } from "../services";
import { AuthContext } from "./AuthProvider";

const App = lazy(() => import("./App"));

const publicRoutes = [
  {
    path: PUBLIC_ROUTE.LANDING,
    exact: true,
    component: lazy(() => import("../components/Login/Login")),
  },
  {
    path: PUBLIC_ROUTE.REGISTER,
    component: lazy(() => import("../components/Register/Register")),
  },
];

function PrivateRoute({ children, ...rest }) {
  const { loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    authenticationService.login();
    return <div />;
  }
  return <Route {...rest}>{children}</Route>;
}

function Routes() {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
            <PrivateRoute path="/dashboard">
              <App />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default Routes;
