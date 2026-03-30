import { projects } from "../constants/data";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="mb-8 sm:mb-12 font-mono text-sm">
        <span className="text-neutral-500">//</span>{" "}
        <span className="text-yellow-300">projects.tsx</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">projects</span>
        <span className="text-neutral-400"> = {"["}</span>
      </h1>
      
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 font-mono text-sm">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="border border-neutral-800 p-4 sm:p-6 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-lg sm:text-xl font-medium">
                <span className="text-purple-400">{"{"}</span>{" "}
                {project.title}
              </h2>
              <span className="text-neutral-600 text-xs">#{index + 1}</span>
            </div>
            
            <p className="text-neutral-400 mb-4 leading-relaxed text-xs sm:text-sm ml-4">
              <span className="text-neutral-500">//</span> {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4 ml-4">
              <span className="text-neutral-500 text-xs">tech:</span>
              {project.tech.map((tech, i) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-neutral-900 text-neutral-400 text-xs"
                >
                  {tech}
                  {i < project.tech.length - 1 && <span className="text-neutral-600">,</span>}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 ml-4 text-xs">
              <a
                href={project.github}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <span className="text-neutral-500">&lt;</span>
                code
                <span className="text-neutral-500">/&gt;</span>
              </a>
              <a
                href={project.live}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="text-neutral-500">~/</span>
                demo
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 font-mono text-sm text-neutral-400">
        <span className="text-neutral-400">{" ]"}</span>
      </div>
    </div>
  );
}
