import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmployeeSearch from "components/search/EmployeeSearch.js";

describe("Component EmployeeSearch", () => {
  // vérifier si le composant EmployeeSearch est rendu correctement.
  it("devrait rendre correctement le composant EmployeeSearch", () => {
    // Crée une fonction simulée pour onSearch
    const onSearch = jest.fn();

    // Rend le composant EmployeeSearch avec la fonction simulée onSearch
    const { getByPlaceholderText } = render(
      <EmployeeSearch onSearch={onSearch} />
    );

    // Récupère l'élément d'entrée de recherche en utilisant son texte de placeholder
    const searchInput = getByPlaceholderText("Entrez les lettres du nom...");

    // S'attend à ce que l'élément d'entrée de recherche soit présent dans le document
    expect(searchInput).toBeInTheDocument();
  });

  /**
   * vérifier si la fonction onSearch est appelée lorsque la valeur de recherche change.
   */
  it("devrait appeler la fonction onSearch lorsque la valeur de recherche change", () => {
    // Crée une fonction simulée pour onSearch
    const onSearch = jest.fn();

    // Rend le composant EmployeeSearch avec la fonction simulée onSearch
    const { getByPlaceholderText } = render(
      <EmployeeSearch onSearch={onSearch} />
    );

    // Récupère l'élément  en utilisant son texte de placeholder
    const searchInput = getByPlaceholderText("Entrez les lettres du nom...");

    // Simule un changement de valeur de recherche
    fireEvent.change(searchInput, { target: { value: "John" } });

    // example avec la fonction onSearch qui appellerai "John"
    expect(onSearch).toHaveBeenCalledWith("John");
  });
});
