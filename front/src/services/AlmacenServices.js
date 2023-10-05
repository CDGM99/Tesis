import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const almacenesApi = createApi({
  reducerPath: "almacenesApi",
  baseQuery: customFetchBase,
  tagTypes: ["Almacenes"],
  endpoints: (builder) => ({
    getAlmacenes: builder.query({
      query: () => ({
        url: "/almacenes/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Almacenes",
                id,
              })),
              { type: "Almacenes", id: "LIST" },
            ]
          : [{ type: "Almacenes", id: "LIST" }],
    }),

    getAlmacenesById: builder.query({
      query: (id) => ({
        url: `/almacenes/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Almacenes", id }],
    }),

    createAlmacenes: builder.mutation({
      query: (Almacenes) => ({
        url: "/almacenes/",
        method: "POST",
        body: Almacenes,
      }),
      invalidatesTags: [{ type: "Almacenes", id: "LIST" }],
    }),

    deleteAlmacenes: builder.mutation({
      query: (id) => ({
        url: `/almacenes/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Almacenes", id: "LIST" }],
    }),

    editAlmacenes: builder.mutation({
      query: (body) => ({
        url: `/almacenes/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Almacenes", id },
              { type: "Almacenes", id: "LIST" },
            ]
          : [{ type: "Almacenes", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateAlmacenesMutation,
  useDeleteAlmacenesMutation,
  useEditAlmacenesMutation,
  useGetAlmacenesByIdQuery,
  useGetAlmacenesQuery,
  useLazyGetAlmacenesByIdQuery,
} = almacenesApi;
