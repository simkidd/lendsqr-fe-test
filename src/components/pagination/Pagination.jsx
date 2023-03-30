import React from "react";
import "./pagination.scss";

const Pagination = (props) => {
  const { CurrentPage, totalPages, onPageChange } = props;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <div>
        <span>Showing</span>
        <span>10</span>
        <span>out of 100</span>
      </div>

      <div className="pages">
        <button
          onClick={() => onPageChange(CurrentPage - 1)}
          disabled={CurrentPage === 1}
        >
          prev
        </button>
        {pages.map((page) => {
          return (
            <button key={page}
              onClick={() => onPageChange(page)}
              disabled={CurrentPage === page}
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={() => onPageChange(CurrentPage + 1)}
          disabled={CurrentPage === totalPages}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
