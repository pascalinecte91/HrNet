import React, { useState, useEffect } from "react";
import Spinner from "components/spinner/Spinner.js";
import { NavLink } from "react-router-dom";
// assets
import logo_name_smartp from "assets/logo_name_smartp.png";
import logo_name_tablet from "assets/logo_name_desktop.png";
import logo_name from "assets/logo_name.png";
import picture_home_smartph from "assets/picture_home_smartph.png";
import picture_home from "assets/picture_home.png";
import picture_home_tablet from "assets/picture_home_desktop.png";
import groupe_desktop from "assets/groupe_desktop.png";
import groupe_smartp from "assets/groupe_smartp.png";
import groupe from "assets/groupe.png";
/**
 * @Composant de la page d'accueil.
 * @returns {JSX.Element} Composant de la page d'accueil.
 */
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Effet pour simuler un changement d'état de chargement après un délai.
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Effet pour désactiver le défilement sur l'élément body.
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("no_scroll");
  }, []);
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <section className="homePage">
          <main className="homePage__current">
            <div className="homePage__content">
              <div className="homePage__infos">
                <h1 className="homePage__title">HRNet the app that manage </h1>
                <span className="homePage__greenSpan">
                  <p className="homePage__empl"> Your employees</p>
                </span>
                {/* image groupe */}
                <img
                  src={groupe}
                  srcSet={`${groupe_smartp}, ${groupe_desktop} 225w`}
                  alt="groupe employees"
                  loading="lazy"
                />
              </div>
              <p className="homePage__subtitle">
                Join us in creating your employee list
              </p>
              <div className="button">
                <NavLink to="/add_employee" className="button__add">
                  Create
                </NavLink>
                <NavLink to="/list_employees" className="button__view">
                  View
                </NavLink>
              </div>
            </div>

            <div className="image-container">
              {/* image LOGO */}
              <img
                src={logo_name}
                srcSet={`${logo_name_smartp}, ${logo_name_tablet}`}
                loading="lazy"
                alt="logo"
              />
              <img
                src={picture_home}
                srcSet={`${picture_home_smartph}, ${picture_home_tablet}`}
                loading="lazy"
                alt="home"
              />
            </div>
          </main>
        </section>
      </>
    );
  }
};

export default Home;
