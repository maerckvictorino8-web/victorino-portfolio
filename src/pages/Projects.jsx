import usePageTitle from "../hooks/usePageTitle.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  usePageTitle("Projects");

  return (
    <section>
      <h1 className="heading">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg text-neutral-300">
        These are projects I built for my classes.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
