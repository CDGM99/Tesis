import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const productosApi = createApi({
  reducerPath: "productosApi",
  baseQuery: customFetchBase,
  tagTypes: ["Productos"],
  endpoints: (builder) => ({
    getProductos: builder.query({
      query: () => ({
        url: "/productos/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Productos",
                id,
              })),
              { type: "Productos", id: "LIST" },
            ]
          : [{ type: "Productos", id: "LIST" }],
    }),

    getProductosById: builder.query({
      query: (id) => ({
        url: `/productos/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Productos", id }],
    }),

    createProductos: builder.mutation({
      query: (Productos) => ({
        url: "/productos/",
        method: "POST",
        body: Productos,
      }),
      invalidatesTags: [{ type: "Productos", id: "LIST" }],
    }),

    deleteProductos: builder.mutation({
      query: (id) => ({
        url: `/productos/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Productos", id: "LIST" }],
    }),

    editProductos: builder.mutation({
      query: (body) => ({
        url: `/productos/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Productos", id },
              { type: "Productos", id: "LIST" },
            ]
          : [{ type: "Productos", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateProductosMutation,
  useDeleteProductosMutation,
  useEditProductosMutation,
  useGetProductosByIdQuery,
  useGetProductosQuery,
  useLazyGetProductosByIdQuery,
} = productosApi;
