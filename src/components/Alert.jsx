import React from "react";

const Alert = ({ children, variant = "info", className = "", ...props }) => {
  const variants = {
    info: "bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200 dark:border-blue-800",
    success:
      "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200 border-green-200 dark:border-green-800",
    warning:
      "bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800",
    error:
      "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200 border-red-200 dark:border-red-800",
  };

  const icons = {
    info: (
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
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    success: (
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
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
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    error: (
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
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <div
      className={`flex items-center p-4 mb-4 border rounded-lg ${variants[variant]} ${className}`}
      role="alert"
      {...props}
    >
      <div className="flex-shrink-0 mr-3">{icons[variant]}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Alert;
