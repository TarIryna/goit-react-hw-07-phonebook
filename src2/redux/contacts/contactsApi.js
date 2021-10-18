import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://611560228f38520017a38499.mockapi.io/api/v1/",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
    createContact: builder.mutation({
      query: (name, number) => ({
        url: "/contacts",
        method: "POST",
        body: {
          content: {
            name,
            number,
          },
        },
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
