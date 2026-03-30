import { skills } from "../constants/data";

const tools = [
  "VS Code",
  "Git",
  "Chrome DevTools",
  "Figma",
  "Webpack",
  "npm",
  "Yarn",
  "Docker",
  "AWS",
  "Linux",
];

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="mb-8 sm:mb-12 font-mono text-sm">
        <span className="text-neutral-500">//</span>{" "}
        <span className="text-yellow-300">skills.tsx</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono">
        <span className="text-purple-400">import</span>{" "}
        <span className="text-yellow-300">{"{"}</span>{" "}
        skills{" "}
        <span className="text-yellow-300">{"}"}</span>
        <span className="text-neutral-400"> from</span>{" "}
        <span className="text-green-300">'./experience'</span>
      </h1>
      
      <div className="max-w-2xl font-mono text-sm">
        <div className="mb-8 sm:mb-12">
          <p className="text-neutral-500 mb-4">
            <span className="text-purple-400">const</span> frontend = {"{"}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 ml-4">
            {skills.slice(0, 6).map((skill, index) => (
              <span
                key={skill}
                className="px-3 py-2 bg-neutral-900 text-neutral-300 text-sm border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                {skill}
                {index < 5 && <span className="text-neutral-600">,</span>}
              </span>
            ))}
          </div>
          <p className="text-neutral-500 mt-2">{"}"}</p>
        </div>

        <div className="mb-8 sm:mb-12">
          <p className="text-neutral-500 mb-4">
            <span className="text-purple-400">const</span> tools = {"{"}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 ml-4">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="px-3 py-2 bg-neutral-900 text-neutral-400 text-sm border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                {tool}
                {index < tools.length - 1 && <span className="text-neutral-600">,</span>}
              </span>
            ))}
          </div>
          <p className="text-neutral-500 mt-2">{"}"}</p>
        </div>

        <div>
          <p className="text-neutral-500 mb-4">
            <span className="text-purple-400">const</span> strengths = ["clean code", "performance", "accessibility"]
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 ml-4">
            <span className="px-3 py-2 bg-neutral-900 text-green-400 text-sm border border-neutral-800">
              "clean code"
            </span>
            <span className="px-3 py-2 bg-neutral-900 text-green-400 text-sm border border-neutral-800">
              "performance"
            </span>
            <span className="px-3 py-2 bg-neutral-900 text-green-400 text-sm border border-neutral-800">
              "accessibility"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
