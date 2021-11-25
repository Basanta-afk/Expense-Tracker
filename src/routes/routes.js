import { Dashboard } from "../components/Dashboard";
import { Landing } from "../components/Landing";
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/",
    component: Landing,
    exact: true,
  },
];
