import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const BooksPagination = ({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
}) => {
  // TODO Move to parent component
  const pageNumbers = [];

  // TODO: Name calculating - Math.ceil(totalBooks / booksPerPage)
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginatePrev = () => {
    if (currentPage !== 1) {
      paginate(currentPage - 1);
    }
  };

  const paginateNext = () => {
    if (currentPage !== pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={currentPage === 1} onClick={paginatePrev}>
        <PaginationLink previous />
      </PaginationItem>
      {pageNumbers.map((page) => (
        // TODO: Highlight current page
          <PaginationItem key={page} onClick={() => paginate(page)}>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem
        disabled={currentPage === pageNumbers.length}
        onClick={paginateNext}
      >
        <PaginationLink next />
      </PaginationItem>
    </Pagination>
  );
};

export default BooksPagination;
