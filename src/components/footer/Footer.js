import React from "react";
/**
 * Composant du pied de page.
 * Ce composant affiche le copyright avec l'année actuelle.
 * @returns {JSX.Element} 
 */

const Footer = () => {
  /**
   * Obtient l'année actuelle
   * @type {number}
   */
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer">
      <p className="footer__content">Copyright {currentYear} WEALTH HEALTH</p>
    </section>
  );
};

export default Footer;
