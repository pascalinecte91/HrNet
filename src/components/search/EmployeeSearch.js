import React, { useState } from "react";
// external component
import SearchBox from "react-search-box";

/**
 * @Composant recherche d'employé.
 * @param {Object} props - Les propriétés du composant.
 * @param {function} props.onSearch - Fonction appelée lors de la recherche.
 */
const EmployeeSearch = ({ onSearch }) => {
  // État local pour la valeur de recherche
  const [searchValue, setSearchValue] = useState("");

  // Gère les modifications de la valeur de recherche.
  const handleSearch = (value) => {
    setSearchValue(value); // Met à jour la valeur de recherche dans l'état local.
    onSearch(value); // Appelle la fonction de rappel fournie avec la nouvelle valeur de recherche.
  };

  return (
    <div className="search">
      <label htmlFor="search__input">Recherchez un employé</label>
      <SearchBox
        id="search__input"
        placeholder="Entrez les lettres du nom..."
        value={searchValue}
        onChange={handleSearch}
        aria-label="Recherchez un employé"
      />
    </div>
  );
};

export default EmployeeSearch;
