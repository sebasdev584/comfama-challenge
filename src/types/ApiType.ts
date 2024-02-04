export type Pokedex = {
  data: Datum[];
};

export type Datum = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  title: string;
  score: number | null;
  recomendation: { message: string; classColor: string };
  imageUrl: string;
};

export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Images = {
  image_url: null | string;
  small_image_url: null | string;
  medium_image_url: null | string;
  large_image_url: null | string;
  maximum_image_url: null | string;
};
