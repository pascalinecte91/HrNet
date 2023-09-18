import { Routes, Route, HashRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import NotFound from "pages/notFound/NotFound.jsx";
import Footer from "components/footer/Footer.js";
import "./App.css";
import "style/index.scss";
import Navbar from "components/navbar/Navbar.js";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import Spinner from "components/spinner/Spinner.js";

// fonction lazy pour charger dynamiquement les composants de manière asynchrone
const Home = lazy(() => import("pages/home/Home.jsx"));
const AddEmployee = lazy(() => import("pages/addEmployee/AddEmployee.jsx"));
const ListEmployees = lazy(() =>
  import("pages/listEmployees/ListEmployees.jsx")
);

/**
 * Composant principal de l'application.
 * @returns {JSX.Element} Élément JSX représentant l'application.
 */
const App = () => {
  return (
    <HashRouter basename="/">
      <Suspense fallback={<Spinner />}>
        {/* Utilisation de StyleSheetManager pour personnaliser le comportement des composants stylisés
      et éviter les avertissements dans la console */}
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <Navbar />
          {/* Définition des routes de l'application */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add_employee" element={<AddEmployee />} />
            <Route path="/list_employees" element={<ListEmployees />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </StyleSheetManager>
      </Suspense>
    </HashRouter>
  );
};

export default App;
