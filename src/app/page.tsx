"use client";
import Card from "@/components/Card";
import Error from "@/components/Error";
import { getAnimeBySearch } from "@/lib/server";
import { Datum } from "@/types/ApiType";
import { useState } from "react";

const LIMIT_OPTIONS = [5, 10, 15, 20];

export default function Home() {
  const [animes, setAnimes] = useState<Datum[]>([]);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (form: FormData) => {
    setAnimes([]);
    const search = form.get("search") ?? "";
    const limit = form.get("limit") ?? "20";
    if (search === "") {
      setError("Se debe agregar algún titulo para buscar");
      return null;
    }
    if (search === null) return;
    const animes = await getAnimeBySearch(search, limit);
    setAnimes(animes);
    setError("");
  };
  return (
    <main className="flex flex-col items-center justify-between p-12 m-10 rounded-xl min-h-full">
      <h1>Comfama Challenge</h1>
      {error && <Error message={error} />}
      <form action={handleSubmit} className="flex gap-5 mt-5">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="rounded-md p-2 outline-none"
        />
        <select name="limit" className="p-2 rounded-lg outline-none">
          {LIMIT_OPTIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="border border-white rounded-md p-2 hover:border-blue-500 hover:bg-blue-700 transition"
        >
          Buscar
        </button>
      </form>
      {animes.length ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
          {animes.map(({ mal_id, imageUrl, title, recomendation }) => (
            <div key={mal_id}>
              <Card
                imageUrl={imageUrl}
                title={title}
                recomendation={recomendation}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex mt-10 justify-center items-center">
          <p>No se encontraron resultados</p>
        </div>
      )}
    </main>
  );
}
