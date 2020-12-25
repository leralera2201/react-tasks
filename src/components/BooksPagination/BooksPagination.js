import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const BooksPagination = ({ pages, paginate, currentPage }) => {
  const paginatePrev = () => {
    if (currentPage !== 1) {
      paginate(currentPage - 1);
    }
  };

  const paginateNext = () => {
    if (currentPage !== pages.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationItem disabled={currentPage === 1} onClick={paginatePrev}>
        <PaginationLink previous />
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem key={page} onClick={() => paginate(page)}>
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
