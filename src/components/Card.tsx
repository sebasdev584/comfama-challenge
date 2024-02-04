type Props = {
  imageUrl: string;
  title: string;
  recomendation: { message: string; classColor: string };
};

export default function Card({ imageUrl, title, recomendation }: Props) {
  return (
    <section className="max-w-64 m-2">
      <article className="mt-5 p-5 h-[27rem] overflow-hidden">
        <figure className="">
          <img
            className="min-h-[18rem] rounded-lg object-cover"
            src={imageUrl}
            alt="Imagen de prueba"
            width={200}
          />
          <figcaption className="flex flex-col">
            <p className="p-2 text-center max-h-10 w-[200px] bg-gray-300 text-black rounded-sm text-ellipsis overflow-hidden whitespace-nowrap">
              {title}
            </p>
            <span
              className={`w-[200px] p-1 mb-5 text-center mt-2 rounded-lg ${recomendation.classColor}`}
            >
              {recomendation.message}
            </span>
          </figcaption>
        </figure>
      </article>
    </section>
  );
}
