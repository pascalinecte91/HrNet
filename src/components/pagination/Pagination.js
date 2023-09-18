import React from "react";
// external component
import ReactPaginate from "react-paginate";

/**
 * @Composant de pagination.
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.pageCount - Le nombre total de pages.
 * @param {number} props.currentPage - La page actuelle.
 * @param {function} props.onPageChange - La fonction de gestion du changement de page.
 * @returns {JSX.Element}
 */

const Pagination = ({ pageCount, currentPage, onPageChange }) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pageCount;

  const previousLabel = isFirstPage ? <span>{"<"}</span> : "<";
  const nextLabel = isLastPage ? <span>{">"}</span> : ">";

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={({ selected }) => onPageChange(selected)}
      forcePage={currentPage}
      containerClassName="pagination"
      pageClassName="page-item"
      activeClassName="active"
      nextLinkClassName={isLastPage ? "hidden" : ""}
      previousLinkClassName={isFirstPage ? "hidden" : ""}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
    />
  );
};

export default Pagination;
