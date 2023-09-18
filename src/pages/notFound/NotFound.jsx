import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @Composant pour afficher une page d'erreur 404.
 * @returns {JSX.Element}
 */
const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="notFound__content">
          <h1 className="notFound__title">404</h1>
          <p className="notFound__info"> Oops ! Something went wrong! </p>
          <NavLink className="notFound__link" to="/">
            Back to home page
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default NotFound;
