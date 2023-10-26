import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const graficaVentasApi = createApi({
  reducerPath: "graficaVentasApi",
  baseQuery: customFetchBase,
  tagTypes: ["GraficaVentas"],
  endpoints: (builder) => ({
    getGraficaVentas: builder.query({
      query: () => ({
        url: "/ordenes-por-mes/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "GraficaVentas",
                id,
              })),
              { type: "GraficaVentas", id: "LIST" },
            ]
          : [{ type: "GraficaVentas", id: "LIST" }],
    }),
  }),
});

export const { useGetGraficaVentasQuery } = graficaVentasApi;
