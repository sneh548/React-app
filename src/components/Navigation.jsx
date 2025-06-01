import { NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";

<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
  {navMenu.map((menu) => (
    <li key={menu.route}>
      <NavLink
        to={menu.route}
        className={({ isActive }) =>
          `block py-2 px-3 md:p-0 rounded-sm ${
            isActive
              ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
              : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
          }`
        }
      >
        {menu.label}
      </NavLink>
    </li>
  ))}
</ul>;

export default Navigation;
