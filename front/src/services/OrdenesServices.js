import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const ordenesApi = createApi({
  reducerPath: "ordenesApi",
  baseQuery: customFetchBase,
  tagTypes: ["Ordenes"],
  endpoints: (builder) => ({
    getOrdenes: builder.query({
      query: () => ({
        url: "/ordenes/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Ordenes",
                id,
              })),
              { type: "Ordenes", id: "LIST" },
            ]
          : [{ type: "Ordenes", id: "LIST" }],
    }),

    getOrdenesById: builder.query({
      query: (id) => ({
        url: `/ordenes/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Ordenes", id }],
    }),

    createOrdenes: builder.mutation({
      query: (Ordenes) => ({
        url: "/ordenes/",
        method: "POST",
        body: Ordenes,
      }),
      invalidatesTags: [{ type: "Ordenes", id: "LIST" }],
    }),

    deleteOrdenes: builder.mutation({
      query: (id) => ({
        url: `/ordenes/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Ordenes", id: "LIST" }],
    }),

    editOrdenes: builder.mutation({
      query: (body) => ({
        url: `/ordenes/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Ordenes", id },
              { type: "Ordenes", id: "LIST" },
            ]
          : [{ type: "Ordenes", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateOrdenesMutation,
  useDeleteOrdenesMutation,
  useEditOrdenesMutation,
  useGetOrdenesByIdQuery,
  useGetOrdenesQuery,
  useLazyGetOrdenesByIdQuery,
} = ordenesApi;
