export function TestimonialCard({
  name,
  title,
  img,
  quote,
}: {
  name: string
  title: string
  img: string
  quote: string
}) {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img alt={name} src={img} className="absolute inset-0 object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10 text-white">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            {quote}
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="font-serif text-xl font-semibold">{name}</p>
          <p className="text-sm/6 font-medium">{title}</p>
        </figcaption>
      </figure>
    </div>
  )
}
