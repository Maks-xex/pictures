import { PICTURES_URL } from "./constans";

export const getImgInfoById = async (id) => {
  const response = await fetch(`${PICTURES_URL}/images/${id}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};
