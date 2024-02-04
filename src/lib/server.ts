import { Datum } from "@/types/ApiType";

export const getAnimeBySearch = async (
  search: string,
  limit: string
): Promise<Datum[]> => {
  const url = `/score/${search}/${limit}`;
  const data = await fetch(url);
  const result = await data.json();

  return result.data;
};
