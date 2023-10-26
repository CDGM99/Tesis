import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const usuariosApi = createApi({
  reducerPath: "usuariosApi",
  baseQuery: customFetchBase,
  tagTypes: ["Usuarios"],
  endpoints: (builder) => ({
    getUsuarios: builder.query({
      query: () => ({
        url: "/users/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Usuarios",
                id,
              })),
              { type: "Usuarios", id: "LIST" },
            ]
          : [{ type: "Usuarios", id: "LIST" }],
    }),

    getUsuariosById: builder.query({
      query: (id) => ({
        url: `/users/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Usuarios", id }],
    }),

    createUsuarios: builder.mutation({
      query: (Usuarios) => ({
        url: "/users/",
        method: "POST",
        body: Usuarios,
      }),
      invalidatesTags: [{ type: "Usuarios", id: "LIST" }],
    }),

    deleteUsuarios: builder.mutation({
      query: (id) => ({
        url: `/users/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Usuarios", id: "LIST" }],
    }),

    editUsuarios: builder.mutation({
      query: (body) => ({
        url: `/users/${body.id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Usuarios", id },
              { type: "Usuarios", id: "LIST" },
            ]
          : [{ type: "Usuarios", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateUsuariosMutation,
  useDeleteUsuariosMutation,
  useEditUsuariosMutation,
  useGetUsuariosByIdQuery,
  useGetUsuariosQuery,
  useLazyGetUsuariosByIdQuery,
} = usuariosApi;
