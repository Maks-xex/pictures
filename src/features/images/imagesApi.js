import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { PICTURES_URL } from "../../api/constans";

export const imagesApi = createApi({
	reducerPath: "getImagesAsync",
	baseQuery: fetchBaseQuery({ baseUrl: PICTURES_URL }),
	endpoints: (builder) => ({
		getImages: builder.query({
			query: () => "images",
		}),
	}),
});

export const { useGetImagesQuery } = imagesApi;
