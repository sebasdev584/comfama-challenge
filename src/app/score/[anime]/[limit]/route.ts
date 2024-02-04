import { Datum } from "@/types/ApiType";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { anime: string; limit: string } }
) {
  const anime = params.anime;
  const limit = params.limit;
  const url = `https://api.jikan.moe/v4/anime?q=${anime}&limit=${limit}&sfw`;
  const data = await fetch(url);
  const dataAnime = await data.json();
  const animes: Datum[] = dataAnime.data;

  const newData = animes.map(({ images, title, score }) => ({
    imageUrl: images.webp.image_url,
    title: title,
    recomendation: calculateRecomendation(score),
    limit,
  }));

  return Response.json({
    message: `Anime (${anime}) encontrado correctamente`,
    data: newData,
  });
}

const calculateRecomendation = (score: number | null) => {
  if (score === null) {
    return {
      message: "I do not recommend it.",
      classColor: "bg-red-500",
    };
  }
  const scoreRounded = Math.round(score);

  if (scoreRounded >= 1 && scoreRounded <= 4) {
    return {
      message: "I do not recommend it.",
      classColor: "bg-red-500",
    };
  }

  if (scoreRounded >= 5 && scoreRounded <= 7) {
    return {
      message: "You may have fun.",
      classColor: "bg-orange-500",
    };
  }

  if (scoreRounded >= 8) {
    return {
      message: "Great, this is one of the best anime.",
      classColor: "bg-green-500",
    };
  }
};
