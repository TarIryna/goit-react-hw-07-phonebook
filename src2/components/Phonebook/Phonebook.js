import React from "react";
import Contact from "./Contact";
import s from "./Phonebook.module.css";
import { useFetchContactsQuery } from "redux/contacts/contactsApi";
import { Spinner } from 'components/Spinner/Spinner';

const Phonebook = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  return (
    <ul className={s.contactList}>
      {isFetching && <Spinner />}
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li className={s.name} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
};
export default Phonebook;
