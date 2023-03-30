import React from "react";
import "./pagination.scss";
import PrevIcon from '../../assets/icons/prev.png';
import NextIcon from '../../assets/icons/next.png';

const Pagination = (props) => {
  const { CurrentPage, totalPages, onPageChange, prev, next } = props;
  // const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const pageNumbers = [];

  for(let i = 1; i <= totalPages; i++){
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <div>
        <span>Showing</span>
        <span>10</span>
        <span>out of 100</span>
      </div>

      <div className="pages">
        <button
          onClick={prev}
          disabled={CurrentPage === 1}
        >
          <img src={PrevIcon} alt="" />
        </button>
        {pageNumbers.map((number) => {
          return (
            <button key={number}
              onClick={() => onPageChange(number)}
              disabled={CurrentPage === number}
              className={CurrentPage === number ? "active" : ""}
            >
              {number}
            </button>
          );
        })}
        <button
          onClick={next}
          disabled={CurrentPage === totalPages}
        >
          <img src={NextIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
