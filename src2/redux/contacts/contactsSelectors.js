// import { createSelector } from "@reduxjs/toolkit";
// import { useFetchContactsQuery } from "./contactsApi";
// // import filterSelector from "../filter/filterSlice";

// const AllContacts = () => {
//   const { data: contacts } = useFetchContactsQuery();
//   return contacts;
// };

// const getVisibleContacts = createSelector(
//   [AllContacts, filterSlice.filterSelector],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ text }) =>
//       text.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

// export default {
//   getVisibleContacts,
// };
