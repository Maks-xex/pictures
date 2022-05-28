import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { PICTURES_URL } from "../../api/constans";

export const imagesInfoApi = createApi({
	reducerPath: "onClickAsync",
	baseQuery: fetchBaseQuery({ baseUrl: PICTURES_URL }),
	endpoints: (builder) => ({
		getImgInfoById: builder.query({
			query: (id) => `images/${id}`,
		}),
		postComment: builder.mutation({
			query: (data) => ({
				url: `/images/${data.id}/comments`,
				method: "POST",
				body: data.formValues,
			}),
		}),
	}),
});

export const { useGetImgInfoByIdQuery, usePostCommentMutation } = imagesInfoApi;
