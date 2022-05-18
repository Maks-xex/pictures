import { PICTURES_URL } from "./constans";
export const postComment = async (newComment, id) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newComment),
	};
	const response = await fetch(
		`${PICTURES_URL}/images/${id}/comments`,
		requestOptions,
	);
	if (!response.ok) {
		throw response.status;
	}
	if (response.status === 204) {
		return new Promise((resolve) => resolve(newComment));
	}
};
