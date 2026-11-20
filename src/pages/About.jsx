import usePageTitle from "../hooks/usePageTitle.js";
import { skills } from "../data/skills.js";

export default function About() {
  usePageTitle("About");

  return (
    <section>
      <h1 className="heading">About me</h1>

      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-300">
        <p>
          I'm a BSIT student. In class I've worked on web apps with Javascript and Firebase, an
          Arduino circuit in Tinkercad, and numerous small ones which include stuff like Python and Networking on virtual machines.
        </p>
        <p>
          Lately I've been learning React and Tailwind CSS, and this portfolio is my first
          full project with them.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-semibold text-white">Skills</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="font-medium text-amber-300">{group.group}</h3>
            <ul className="mt-2 space-y-1 text-neutral-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
