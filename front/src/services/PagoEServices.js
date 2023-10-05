import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const pagoeApi = createApi({
  reducerPath: "pagoeApi",
  baseQuery: customFetchBase,
  tagTypes: ["Pagoe"],
  endpoints: (builder) => ({
    getPagoe: builder.query({
      query: () => ({
        url: "/embajadores/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Pagoe",
                id,
              })),
              { type: "Pagoe", id: "LIST" },
            ]
          : [{ type: "Pagoe", id: "LIST" }],
    }),

    getPagoeById: builder.query({
      query: (id) => ({
        url: `/embajadores/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Pagoe", id }],
    }),

    createPagoe: builder.mutation({
      query: (Pagoe) => ({
        url: "/embajadores/",
        method: "POST",
        body: Pagoe,
      }),
      invalidatesTags: [{ type: "Pagoe", id: "LIST" }],
    }),

    deletePagoe: builder.mutation({
      query: (id) => ({
        url: `/embajadores/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Pagoe", id: "LIST" }],
    }),

    editPagoe: builder.mutation({
      query: (body) => ({
        url: `/embajadores/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Pagoe", id },
              { type: "Pagoe", id: "LIST" },
            ]
          : [{ type: "Pagoe", id: "LIST" }],
    }),
  }),
});

export const {
  useCreatePagoeMutation,
  useDeletePagoeMutation,
  useEditPagoeMutation,
  useGetPagoeByIdQuery,
  useGetPagoeQuery,
  useLazyGetPagoeByIdQuery,
} = pagoeApi;
