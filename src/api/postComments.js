import { PICTURES_URL } from "./constans";
// const newComment = { name: "Ivan", comment: "asdd" };
export const postComments = async (newComment, id) => {
	const requestOptions = {
		method: "POST",
		headers: {
			Accept: "application/json",
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
