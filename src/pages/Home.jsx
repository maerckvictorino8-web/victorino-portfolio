import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";
import { site } from "../data/site.js";

export default function Home() {
  usePageTitle("");

  return (
    <section className="max-w-2xl py-6 sm:py-12">
      <p className="text-neutral-400">Hello, I'm</p>
      <h1 className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl">{site.name}</h1>
      <p className="mt-3 text-xl text-amber-300">{site.role}</p>

      <p className="mt-6 text-lg leading-relaxed text-neutral-300">
        I'm studying web design and building websites with React. Most of what I've made so far
        are class projects, like a business bulletin app as well as an arduino project which included the use of a seven segment display for an ultrasonic sensor, and I'm using this
        site to collect them in one place.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="rounded-md bg-amber-400 px-5 py-2.5 font-medium text-neutral-950 hover:bg-amber-300"
        >
          View my projects
        </Link>
        <Link
          to="/contact"
          className="rounded-md border border-neutral-700 px-5 py-2.5 font-medium text-neutral-200 hover:border-neutral-500"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
