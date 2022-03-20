import { PICTURES_URL } from "./constans";

export const getImgInfo = async (id) => {
	const response = await fetch(`${PICTURES_URL}/images/${id}`);
	if (!response.ok) {
		throw response.status;
	}
	const data = await response.json();
	return data;
};
