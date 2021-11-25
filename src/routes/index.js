import { Route, Switch } from "react-router";
import routes from "./routes";
export const Routes = (props) => {
  return (
    <Switch>
      {routes.map((v, key) => (
        <Route
          path={v.path}
          component={v.component}
          exact={v.exact}
          key={key}
        />
      ))}
    </Switch>
  );
};
