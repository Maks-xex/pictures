import { PICTURES_URL } from "./constans";

export const getImages = async () => {
  const response = await fetch(`${PICTURES_URL}/images`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
};
