import React from "react";
import s from "./FilterInput.module.css";

const FilterInput = ({ filter, changeFilter }) => {
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => changeFilter(e.currentTarget.value)}
        />
      </label>
    </div>
  );
};

export default FilterInput;
