import React from "react";
import s from "./FilterInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { filter } from "../../redux/contacts/filterSlice";

const FilterInput = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => getFilter(state));
  const changeFilter = (e) => {
    dispatch(filter(e.currentTarget.value));
  };

  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filterValue}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

export default FilterInput;
