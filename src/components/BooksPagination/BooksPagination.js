import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import './BooksPagination.scss';

const BooksPagination = ({ pages, onPaginate, currentPage }) => {
  const paginatePrev = () => {
    if (currentPage !== 1) {
        onPaginate(currentPage - 1);
    }
  };

  const paginateNext = () => {
    if (currentPage !== pages.length) {
        onPaginate(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationItem disabled={currentPage === 1} onClick={paginatePrev}>
        <PaginationLink previous />
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem key={page} onClick={() => onPaginate(page)}>
          <PaginationLink className={currentPage === page ? "active-page" : ""}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={currentPage === pages.length}
        onClick={paginateNext}
      >
        <PaginationLink next />
      </PaginationItem>
    </Pagination>
  );
};

export default BooksPagination;
