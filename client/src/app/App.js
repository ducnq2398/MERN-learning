import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import { lazy } from "react";
import NotFound from "../components/NotFound/NotFound";
import Sidebar from "../components/Sidebar/Sidebar";

const routes = [
  {
    path: "/dashboard",
    component: lazy(() => import("../components/Dashboard/Dashboard")),
  },
];
function App() {
  return (
    <div className="content-top">
      <Sidebar />
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
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
