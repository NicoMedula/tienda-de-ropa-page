import React from "react";

const Skeleton = ({ type = "text", className = "", ...props }) => {
  const baseStyles = "animate-pulse bg-gray-200 dark:bg-gray-700";

  const types = {
    text: "h-4 rounded",
    title: "h-8 rounded",
    avatar: "h-12 w-12 rounded-full",
    image: "h-48 rounded-lg",
    button: "h-10 rounded-lg",
    card: "h-64 rounded-lg",
  };

  return (
    <div className={`${baseStyles} ${types[type]} ${className}`} {...props} />
  );
};

export default Skeleton;
