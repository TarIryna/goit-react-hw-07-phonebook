import React from "react";
import { useSelector } from "react-redux";
import {
  useFetchContactsQuery
} from "redux/contacts/contactsSlice";
import { getFilter } from "redux/selectors";
import Contact from "./Contact";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./Phonebook.module.css";

const Phonebook = () => {
  const { data: allContacts, isFetching } = useFetchContactsQuery();
  // const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector((state) => getFilter(state));
  const contacts = allContacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={s.contactList}>
      {isFetching && (
        <div className={s.loader}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000}
          />
        </div>
      )}
      {allContacts &&
        contacts
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(({ id, name, number }) => (
            <li className={s.name} key={id}>
              <Contact
                id={id}
                name={name}
                number={number}
              />
            </li>
          ))}
    </ul>
  );
};

export default Phonebook;
