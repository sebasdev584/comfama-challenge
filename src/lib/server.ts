import { Datum } from "@/types/ApiType";

export const getAnimeBySearch = async (
  search: string | FormDataEntryValue,
  limit: string | FormDataEntryValue
): Promise<Datum[]> => {
  const url = `/score/${search}/${limit}`;
  const data = await fetch(url);
  const result = await data.json();

  return result.data;
};
