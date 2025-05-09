import React from "react";
import Select from "./Select";

const Sort = ({ options, value, onChange, className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-sm text-gray-700 dark:text-gray-300">
        Ordenar por:
      </span>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={options}
        className="w-48"
      />
    </div>
  );
};

export default Sort;
