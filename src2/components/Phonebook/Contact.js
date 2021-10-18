import React from "react";
import PropTypes from "prop-types";
import s from "./Phonebook.module.css";
import { useDeleteContactMutation } from "redux/contacts/contactsSlice";

export default function Contact({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      {name}: <span className={s.number}> {number} </span>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {/* {isDeleting && <Spinner size={12} />} */}
        Delete
      </button>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
