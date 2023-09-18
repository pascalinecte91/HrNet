import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "components/pagination/Pagination.js";

/**
 * Suite de tests pour le composant Pagination.
 */
describe("Pagination Component", () => {
  /**
   * Test pour vérifier si le composant Pagination est rendu correctement.
   */
  it("devrait rendre correctement le composant Pagination", () => {
    // Définit les valeurs simulées pour le nombre total de pages, la page actuelle et la fonction onPageChange
    const pageCount = 10;
    const currentPage = 0;
    const onPageChange = jest.fn();

    // Rend le composant Pagination avec les valeurs simulées
    const { getByText } = render(
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );

    // Vérifie la présence de l'élément de pagination pour la première page (page 1)
    const paginationElement = getByText("1");
    expect(paginationElement).toBeInTheDocument();
  });

  /**
   * Test pour vérifier si la fonction onPageChange est appelée lorsque la page est changée.
   */
  it("devrait appeler la fonction onPageChange lorsque la page est changée", () => {
    // Définit les valeurs simulées pour le nombre total de pages, la page actuelle et la fonction onPageChange
    const pageCount = 10;
    const currentPage = 0;
    const onPageChange = jest.fn();

    // Rend le composant Pagination avec les valeurs simulées
    const { getByText } = render(
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );

    // Récupère le bouton de la troisième page et simule un clic dessus
    const thirdPageButton = getByText("3");
    fireEvent.click(thirdPageButton);

    // Vérifie que la fonction onPageChange a été appelée avec le numéro de page 2 (sélection - 1)
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
