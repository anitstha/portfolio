import { personalInfo, experience } from "../constants/data";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="mb-8 sm:mb-12 font-mono text-sm">
        <span className="text-neutral-500">//</span>{" "}
        <span className="text-yellow-300">about.tsx</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono">
        <span className="text-purple-400">export const</span>{" "}
        <span className="text-blue-400">about</span>
        <span className="text-neutral-400"> = () ={">"} {"{"}</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 font-mono text-sm">
        <div className="pl-4 border-l-2 border-neutral-800">
          <p className="text-neutral-400 leading-relaxed mb-4">
            <span className="text-neutral-500">//</span> Frontend developer based in {personalInfo.location}
          </p>
          <p className="text-neutral-400 leading-relaxed mb-4">
            <span className="text-neutral-500">//</span> Specializing in React & modern JS
          </p>
          <p className="text-neutral-400 leading-relaxed mb-4">
            <span className="text-neutral-500">//</span> Focus: semantic code, performance, UX
          </p>
          <p className="text-neutral-400 leading-relaxed">
            <span className="text-neutral-500">//</span> Continuous learner
          </p>
        </div>
        
        <div>
          <h2 className="text-lg font-medium mb-6 font-mono">
            <span className="text-blue-400">const</span> experience = {"["}
          </h2>
          <div className="space-y-6 sm:space-y-8 pl-4">
            {experience.map((exp, index) => (
              <div key={exp.id} className="pl-4 border-l border-neutral-800">
                <span className="text-purple-400">{"{"}</span>
                <p className="text-neutral-500 text-xs mt-2 ml-2">
                  <span className="text-blue-400">role</span>: <span className="text-yellow-300">"{exp.role}"</span>,
                </p>
                <p className="text-neutral-500 text-xs ml-2">
                  <span className="text-blue-400">company</span>: <span className="text-yellow-300">"{exp.company}"</span>,
                </p>
                <p className="text-neutral-500 text-xs ml-2">
                  <span className="text-blue-400">period</span>: <span className="text-yellow-300">"{exp.period}"</span>
                </p>
                <span className="text-purple-400">{"}"}</span>
                {index < experience.length - 1 && <span className="text-neutral-500">,</span>}
              </div>
            ))}
          </div>
          <p className="font-mono text-sm mt-4">
            <span className="text-neutral-400">{" ]"}</span>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 font-mono text-sm text-neutral-400">
        <span className="text-neutral-400">{"}"}</span>
      </div>
    </div>
  );
}
