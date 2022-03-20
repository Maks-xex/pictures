import { getImgInfo } from "./getImgInfo";

export const getImgId = async (images) => {
	const img = await Promise.all(
		images.map(async (it) => {
			const response = await getImgInfo(it.id);
			return response;
		}),
	);
	return img;
};
