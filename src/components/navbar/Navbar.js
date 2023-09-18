import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @Composant de la barre de navigation.
 * @returns {JSX.Element}
 */
const Navbar = () => {
  return (
    <section className="navBar">
      <div className="navBar__link">
        <NavLink to="/" className="active" end>
          Home
        </NavLink>
        <NavLink to="/add_employee" className="active">
          Create Employee
        </NavLink>
        <NavLink to="/list_employees" className="active">
          List Employees
        </NavLink>
      </div>
    </section>
  );
};

export default Navbar;
