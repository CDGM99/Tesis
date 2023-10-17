import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./config/customFetchBase ";

export const sendEmailApi = createApi({
  reducerPath: "sendEmailApi",
  baseQuery: customFetchBase,
  tagTypes: ["SendEmail"],
  endpoints: (builder) => ({
    createSendEmail: builder.mutation({
      query: (SendEmail) => ({
        url: "/send_email/",
        method: "POST",
        body: SendEmail,
      }),
      invalidatesTags: [{ type: "SendEmail", id: "LIST" }],
    }),
  }),
});

export const { useCreateSendEmailMutation } = sendEmailApi;
