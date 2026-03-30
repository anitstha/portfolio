import { Link } from "react-router-dom";
import { personalInfo } from "../constants/data";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-2xl">
        <div className="mb-6 font-mono text-sm">
          <span className="text-neutral-500">const</span>{" "}
          <span className="text-purple-400">developer</span>{" "}
          <span className="text-neutral-400">=</span>{" "}
          <span className="text-yellow-300">{"{"}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 font-mono">
          <span className="text-neutral-500">//</span> building interfaces<br />
          <span className="text-neutral-500">//</span> that feel right.
        </h1>

        <div className="text-lg sm:text-xl text-neutral-300 mb-4 sm:mb-6 font-mono">
          <span className="text-blue-400">const</span>{" "}
          <span className="text-purple-400">role</span>{" "}
          <span className="text-neutral-400">=</span>{" "}
          <span className="text-yellow-300">"</span>
          <span className="text-green-300">{personalInfo.title}</span>
          <span className="text-yellow-300">"</span>
        </div>

        <p className="text-neutral-400 mb-6 sm:mb-8 leading-relaxed max-w-xl font-mono text-sm">
          <span className="text-yellow-300">{"}"}</span> {personalInfo.tagline}.<br />
          <span className="text-neutral-500">//</span> I craft clean, performant, and accessible web experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-mono text-sm">
          <Link
            to="/projects"
            className="group px-6 py-3 bg-neutral-100 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            <span className="text-green-600 group-hover:text-green-700">$</span>
            <span>./view-work</span>
          </Link>
          <Link
            to="/contact"
            className="group px-6 py-3 border border-neutral-700 text-sm font-medium hover:border-neutral-500 transition-colors flex items-center gap-2"
          >
            <span className="text-purple-400">&lt;</span>
            <span>contact-me</span>
            <span className="text-purple-400">/&gt;</span>
          </Link>
        </div>
      </div>

      <div className="mt-16 sm:mt-24 font-mono text-xs text-neutral-600">
        <div className="flex gap-2 mb-2">
          <span className="w-3 h-3 rounded-full bg-red-500/20"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/20"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/20"></span>
        </div>
        <p>~/portfolio $ <span className="text-green-400">echo $STATUS</span></p>
        <p className="text-green-400 ml-4">ready for work</p>
      </div>
    </div>
  );
}
