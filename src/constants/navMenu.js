// import { Route } from "react-router-dom";
import { ABOUT_ROUTE, CONTACT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./routes";

const navMenu = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: ABOUT_ROUTE,
    label: "About",
  },
  {
    route: CONTACT_ROUTE,
    label: "Contact",
  },
   {
    route: LOGIN_ROUTE,
    label: "login",
  },
  {
    route:REGISTER_ROUTE,
    label: "register",
  },
];
export default navMenu;
