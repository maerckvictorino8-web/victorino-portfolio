export default function ProjectCard({ title, description, image, alt, tags = [], links = [] }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
      <img src={image} alt={alt} loading="lazy" className="aspect-video w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-neutral-300">{description}</p>
        <p className="mt-3 text-sm text-neutral-400">{tags.join(" · ")}</p>

        {links.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer" className="link">
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
