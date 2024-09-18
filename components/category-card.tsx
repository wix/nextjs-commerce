import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  link: string;
  cardImage: string;
}

export const Card: React.FC<CardProps> = ({ title, description, link, cardImage }) => {
  return (
    <article className="duration-400 transform overflow-hidden rounded-lg bg-white shadow-none transition-transform ease-in-out hover:scale-105 hover:text-custom-green hover:shadow-lg">
      <div className="grid grid-cols-1 gap-4">
        <figure className="aspect-w-16 aspect-h-9 relative h-72">
          <Image src={cardImage} alt="" fill className="h-auto w-full object-cover" />
        </figure>
        <div className="flex flex-col p-6">
          <h2 className="mb-4 text-2xl font-bold transition-colors duration-300">{title}</h2>
          <p className="mb-4 text-base leading-6 text-black">{description}</p>
          <a
            href={link}
            className="inline-flex items-center self-center rounded-full bg-custom-green px-4 py-2 text-white no-underline hover:text-lg focus:outline-none"
          >
            Buy Now <span className="sr-only">about this is some title</span>
          </a>
        </div>
      </div>
    </article>
  );
};
