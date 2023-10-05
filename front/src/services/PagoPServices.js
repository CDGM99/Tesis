import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const pagopApi = createApi({
  reducerPath: "pagopApi",
  baseQuery: customFetchBase,
  tagTypes: ["Pagop"],
  endpoints: (builder) => ({
    getPagop: builder.query({
      query: () => ({
        url: "/proveedores/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Pagop",
                id,
              })),
              { type: "Pagop", id: "LIST" },
            ]
          : [{ type: "Pagop", id: "LIST" }],
    }),

    getPagopById: builder.query({
      query: (id) => ({
        url: `/proveedores/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Pagop", id }],
    }),

    createPagop: builder.mutation({
      query: (Pagop) => ({
        url: "/proveedores/",
        method: "POST",
        body: Pagop,
      }),
      invalidatesTags: [{ type: "Pagop", id: "LIST" }],
    }),

    deletePagop: builder.mutation({
      query: (id) => ({
        url: `/proveedores/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Pagop", id: "LIST" }],
    }),

    editPagop: builder.mutation({
      query: (body) => ({
        url: `/proveedores/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Pagop", id },
              { type: "Pagop", id: "LIST" },
            ]
          : [{ type: "Pagop", id: "LIST" }],
    }),
  }),
});

export const {
  useCreatePagopMutation,
  useDeletePagopMutation,
  useEditPagopMutation,
  useGetPagopByIdQuery,
  useGetPagopQuery,
  useLazyGetPagopByIdQuery,
} = pagopApi;
