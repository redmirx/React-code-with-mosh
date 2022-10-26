import React from "react";
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  let pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
