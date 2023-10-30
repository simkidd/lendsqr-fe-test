import NextIcon from '@/assets/icons/next.png';
import PrevIcon from '@/assets/icons/prev.png';
import "./pagination.scss";

interface IPaginate {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  prev: () => void;
  next: () => void;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<IPaginate> = (props) => {
  const { currentPage, totalPages, onPageChange, prev, next, itemsPerPage, totalItems } = props;
  const pageNumbers = [];

  // Calculate the start and end of the range of page numbers to display
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // If there are more than 5 pages, display ellipses to hide some page numbers
  const hasLeftEllipsis = startPage > 1;
  const hasRightEllipsis = endPage < totalPages;
  if (totalPages > 5) {
    if (startPage <= 3) {
      endPage = 5;
    } else if (endPage >= totalPages - 2) {
      startPage = totalPages - 4;
    }
  }

  // Add the page numbers to display
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="count">
        <span>Showing</span>
        <span>{itemsPerPage}</span>
        <span>out of</span>
        <span>{totalItems}</span>
      </div>

      <div className="pages">
        <button onClick={prev} disabled={currentPage === 1}>
          <img src={PrevIcon} alt="Previous page" />
        </button>

        {hasLeftEllipsis && (
          <>
            <button onClick={() => onPageChange(1)}>1</button>
            {startPage > 2 && <span className="ellipsis">...</span>}
          </>
        )}

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            disabled={currentPage === pageNumber}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}

        {hasRightEllipsis && (
          <>
            {endPage < totalPages - 2 && <span className="ellipsis">...</span>}
            <button onClick={() => onPageChange(totalPages)}>{totalPages}</button>
          </>
        )}

        <button onClick={next} disabled={currentPage === totalPages}>
          <img src={NextIcon} alt="Next page" />
        </button>
      </div>
    </div>
  )
}

export default Pagination