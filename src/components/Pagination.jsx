import React from "react";
import Button from "./Button";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return pages;
    }

    if (currentPage <= 3) {
      return [...pages.slice(0, 4), "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "...", ...pages.slice(totalPages - 4)];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Button>

      {renderPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-4 py-2 text-gray-500">...</span>
          ) : (
            <Button
              variant={currentPage === page ? "primary" : "outline"}
              size="sm"
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Pagination;
