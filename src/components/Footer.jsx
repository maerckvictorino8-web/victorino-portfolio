import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-6 text-sm text-neutral-400 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <p>Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
}
