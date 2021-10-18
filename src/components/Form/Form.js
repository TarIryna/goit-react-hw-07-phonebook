import { useState } from "react";
import s from "./Form.module.css";
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from "redux/contacts/contactsSlice";
import Notiflix from "notiflix";

const Form = ({ onSubmit, items }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const findName = contacts.find((contact) => contact.name === name);
    if (findName) {
      Notiflix.Notify.failure(`${findName.name} is already in contacts`);
      reset();
      return;
    }
    createContact({ name, number });
    reset();
  };

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <div className={s.labels}>
        <label className={s.name}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
          />
        </label>
        <label className={s.name}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={onChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
      <button className={s.button} type="submit" key="submitBtn">
        Add contact
      </button>
    </form>
  );
};

export default Form;
