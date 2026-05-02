import ReactPaginate from "react-paginate";
import styles from './style.module.css'
import ArrowRight from "./arrowRight/ArrowRight";
import ArrowLeft from "./arrowLeft/arrowLeft";



//  const handlePageClick = (event) => {
//    const newOffset = (event.selected * itemsPerPage) % items.length;
//    console.log(
//      `User requested page number ${event.selected}, which is offset ${newOffset}`,
//    );
//    setItemOffset(newOffset);
//  };

function Pagination() {
  return (
    <ReactPaginate
      className={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      breakLabel={
        <svg
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
      nextLabel={<ArrowRight />}
      previousLabel={<ArrowLeft />}
      nextLinkClassName={styles.nextLink}
      previousLinkClassName={styles.prevLink}
      activeClassName={styles.selected}
      // onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      marginPagesDisplayed={1}
      pageCount={4}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
