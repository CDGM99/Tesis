import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: customFetchBase,
  tagTypes: ["Groups"],
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => ({
        url: "/roles/",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Groups",
                id,
              })),
              { type: "Groups", id: "LIST" },
            ]
          : [{ type: "Groups", id: "LIST" }],
    }),
    getGroupsById: builder.query({
      query: (id) => ({
        url: `/roles/${id}/`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Groups", id }],
    }),
  }),
});

export const { useGetGroupsByIdQuery, useGetGroupsQuery } = groupsApi;
