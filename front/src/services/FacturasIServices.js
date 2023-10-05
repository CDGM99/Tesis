import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const facturasiApi = createApi({
  reducerPath: "facturasiApi",
  baseQuery: customFetchBase,
  tagTypes: ["Facturasi"],
  endpoints: (builder) => ({
    getFacturasi: builder.query({
      query: () => ({
        url: "/facturas-internas/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Facturasi",
                id,
              })),
              { type: "Facturasi", id: "LIST" },
            ]
          : [{ type: "Facturasi", id: "LIST" }],
    }),

    getFacturasiById: builder.query({
      query: (id) => ({
        url: `/facturas-internas/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Facturasi", id }],
    }),

    createFacturasi: builder.mutation({
      query: (Facturasi) => ({
        url: "/facturas-internas/",
        method: "POST",
        body: Facturasi,
      }),
      invalidatesTags: [{ type: "Facturasi", id: "LIST" }],
    }),

    deleteFacturasi: builder.mutation({
      query: (id) => ({
        url: `/facturas-internas/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Facturasi", id: "LIST" }],
    }),

    editFacturasi: builder.mutation({
      query: (body) => ({
        url: `/facturas-internas/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Facturasi", id },
              { type: "Facturasi", id: "LIST" },
            ]
          : [{ type: "Facturasi", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateFacturasiMutation,
  useDeleteFacturasiMutation,
  useEditFacturasiMutation,
  useGetFacturasiByIdQuery,
  useGetFacturasiQuery,
  useLazyGetFacturasiByIdQuery,
} = facturasiApi;
