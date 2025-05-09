import React from "react";
import Select from "./Select";
import Input from "./Input";

const Filter = ({ filters, onFilterChange, className = "" }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {filters.map((filter) => (
        <div key={filter.id}>
          {filter.type === "select" ? (
            <Select
              label={filter.label}
              value={filter.value}
              onChange={(e) => onFilterChange(filter.id, e.target.value)}
              options={filter.options}
            />
          ) : (
            <Input
              label={filter.label}
              type={filter.type}
              value={filter.value}
              onChange={(e) => onFilterChange(filter.id, e.target.value)}
              placeholder={filter.placeholder}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
