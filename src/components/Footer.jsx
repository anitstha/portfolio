import { personalInfo } from "../constants/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <p className="text-neutral-600">
          <span className="text-purple-400">{"//"}</span>{" "}
          <span className="text-neutral-500">built by</span>{" "}
          <span className="text-neutral-400">{personalInfo.name}</span>
        </p>
        <div className="flex gap-4 sm:gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            <span className="text-purple-400">&lt;</span>GitHub<span className="text-purple-400">/&gt;</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            <span className="text-purple-400">&lt;</span>LinkedIn<span className="text-purple-400">/&gt;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
