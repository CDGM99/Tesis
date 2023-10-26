import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const graficaProductosApi = createApi({
  reducerPath: "graficaProductosApi",
  baseQuery: customFetchBase,
  tagTypes: ["GraficaProductos"],
  endpoints: (builder) => ({
    getGraficaProductos: builder.query({
      query: () => ({
        url: "/tipo-producto-por-orden/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "GraficaProductos",
                id,
              })),
              { type: "GraficaProductos", id: "LIST" },
            ]
          : [{ type: "GraficaProductos", id: "LIST" }],
    }),
  }),
});

export const { useGetGraficaProductosQuery } = graficaProductosApi;
