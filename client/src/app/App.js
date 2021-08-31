import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { lazy } from "react";
import NotFound from "../components/NotFound/NotFound";

const routes = [
  {
    path: "/dashboard",
    component: lazy(() => import("../components/Dashboard/Dashboard")),
  },
];
function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path}>
            <route.component />
          </Route>
        ))}
        <Route component={NotFound} />
      </Switch>
      <ToastContainer newestOnTop draggable />
    </div>
  );
}

export default App;
