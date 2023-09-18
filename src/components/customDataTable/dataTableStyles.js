/**
 * Styles personnalisés pour la table DataTable.
 * @typedef {Object} CustomStyles
 * @property {Object} table - Styles de la table.
 * @property {Object} headRow - Styles de la ligne d'en-tête.
 */

export const customStyles = {
  table: {
    style: {
      width: "80%", // largeur de la table
      margin: "auto", //marge pour centrer
      marginBottom: "80px", // marge en bas
    },
  },

  /**
   * Styles de la ligne d'en-tête.
   * @type {Object}
   */
  headRow: {
    style: {
      backgroundColor: "#6f8f6f", //fond en-tete
      fontSize: "16px", //taille texte entete
      color: "white", // Couleur du texte de la ligne d'en-tête
      fontStyle: "normal", // style police
    },
  },
  
};
