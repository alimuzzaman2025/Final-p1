import React from 'react'

const Pagination = ({pageNumber,paginate,next,prev,currentPage}) => {
      const maxVisiblePages = 5;

  const getPageNumbers = () => {
    const totalPages = pageNumber.length;
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first 1-5 pages or current-centered range
      let start = Math.max(currentPage - 3, 0);
      let end = Math.min(start + maxVisiblePages, totalPages);

      if (end - start < maxVisiblePages) {
        start = end - maxVisiblePages;
      }

      for (let i = start; i < end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const visiblePages = getPageNumbers();
      
  return (
  <nav aria-label="Page navigation example" className="py-5">
      <ul className="inline-flex -space-x-px text-sm">
        {pageNumber.length > 0 && (
          <li onClick={prev}>
            <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </a>
          </li>
        )}

        {visiblePages.map((item) => (
          <li key={item} onClick={() => paginate(item)}>
            <a
              className={`${
                currentPage === item + 1
                  ? 'flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#262626] border cursor-pointer'
                  : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border cursor-pointer'
              }`}
            >
              {item + 1}
            </a>
          </li>
        ))}

        {pageNumber.length > maxVisiblePages && visiblePages[visiblePages.length - 1] < pageNumber.length - 1 && (
          <li>
            <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border cursor-default">
              ...
            </span>
          </li>
        )}

        {pageNumber.length > 0 && (
          <li onClick={next}>
            <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination