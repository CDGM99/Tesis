import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const salidaseApi = createApi({
  reducerPath: "salidaseApi",
  baseQuery: customFetchBase,
  tagTypes: ["Salidase"],
  endpoints: (builder) => ({
    getSalidase: builder.query({
      query: () => ({
        url: "/salida-producto/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Salidase",
                id,
              })),
              { type: "Salidase", id: "LIST" },
            ]
          : [{ type: "Salidase", id: "LIST" }],
    }),

    getSalidaseById: builder.query({
      query: (id) => ({
        url: `/salida-producto/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Salidase", id }],
    }),

    createSalidase: builder.mutation({
      query: (Salidase) => ({
        url: "/salida-producto/",
        method: "POST",
        body: Salidase,
      }),
      invalidatesTags: [{ type: "Salidase", id: "LIST" }],
    }),

    deleteSalidase: builder.mutation({
      query: (id) => ({
        url: `/salida-producto/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Salidase", id: "LIST" }],
    }),

    editSalidase: builder.mutation({
      query: (body) => ({
        url: `/salida-producto/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Salidase", id },
              { type: "Salidase", id: "LIST" },
            ]
          : [{ type: "Salidase", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateSalidaseMutation,
  useDeleteSalidaseMutation,
  useEditSalidaseMutation,
  useGetSalidaseByIdQuery,
  useGetSalidaseQuery,
  useLazyGetSalidaseByIdQuery,
} = salidaseApi;
