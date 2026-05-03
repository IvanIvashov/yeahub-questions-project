import React, { memo } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import styles from "./style.module.css";
import ArrowRight from "../../arrowRight/ArrowRight";
import ArrowLeft from "../../arrowLeft/ArrowLeft";
import type {PaginationProps} from '../model/type'

const Pagination = memo(({ pageCount, currentPage }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  if (!pageCount || pageCount <= 0) {
    return null;
  }

  const safeCurrentPage = Math.min(currentPage, pageCount);
  const safeForcePage = safeCurrentPage - 1;

  const handlePageChange = ({ selected }: {selected: number}) => {
    const newPage = selected + 1;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams, { replace: false });
  };

  return (
    <ReactPaginate
      className={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      breakLabel={
        <svg
          className={styles.pagePoint}
          width="8"
          height="2"
          viewBox="0 0 8 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1" cy="1" r="1" fill="#474747" />
          <circle cx="4" cy="1" r="1" fill="#474747" />
          <circle cx="7" cy="1" r="1" fill="#474747" />
        </svg>
      }
      breakClassName={styles.breakItem}
      breakLinkClassName={styles.breakLink}
      nextLabel={<ArrowRight />}
      previousLabel={<ArrowLeft />}
      nextClassName={`${styles.nextItem} ${safeCurrentPage === pageCount ? styles.disabled : ""}`}
      nextLinkClassName={styles.nextLink}
      previousClassName={`${styles.prevItem} ${safeCurrentPage === 1 ? styles.disabled : ""}`}
      previousLinkClassName={styles.prevLink}
      activeClassName={styles.selected}
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      forcePage={safeForcePage}
      renderOnZeroPageCount={null}
    />
  );
});

Pagination.displayName = "Pagination";

export default Pagination;
