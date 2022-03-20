import { PICTURES_URL } from "./constans";

export const getImgInfo = async (id) => {
	const response = await fetch(`${PICTURES_URL}/images/${id}`);
	const data = await response.json();
	return data;
};
