import { useState } from "react";
import { personalInfo } from "../constants/data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact: ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="mb-8 sm:mb-12 font-mono text-sm">
        <span className="text-neutral-500">//</span>{" "}
        <span className="text-yellow-300">contact.tsx</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-12 font-mono">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">contact</span>
        <span className="text-neutral-400"> = () ={">"} {"{"}</span>
      </h1>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="font-mono text-sm">
          <p className="text-neutral-400 leading-relaxed mb-6 sm:mb-8 max-w-md">
            <span className="text-neutral-500">//</span> Looking to collaborate or have a question?
            <br />
            <span className="text-neutral-500">//</span> Drop me a message below.
          </p>

          <div className="bg-neutral-900/50 border border-neutral-800 p-4 sm:p-6">
            <p className="text-neutral-500 mb-4">
              <span className="text-purple-400">const</span> info = {"{"}
            </p>
            
            <div className="ml-4 space-y-3">
              <p>
                <span className="text-blue-400">email</span>:{" "}
                <span className="text-yellow-300">"</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
                <span className="text-yellow-300">"</span>,
              </p>
              <p>
                <span className="text-blue-400">location</span>:{" "}
                <span className="text-yellow-300">"</span>
                <span className="text-neutral-300">{personalInfo.location}</span>
                <span className="text-yellow-300">"</span>,
              </p>
              <p>
                <span className="text-blue-400">status</span>:{" "}
                <span className="text-green-400">"open to work"</span>
              </p>
            </div>
            
            <p className="text-neutral-500 mt-4">{"}"}</p>
          </div>

          <div className="mt-6 sm:mt-8">
            <p className="text-neutral-500 mb-4">
              <span className="text-neutral-500">//</span> or find me on:
            </p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="font-mono text-sm">
          <div className="bg-neutral-900/50 border border-neutral-800 p-4 sm:p-6">
            <p className="text-neutral-500 mb-6">
              <span className="text-purple-400">await</span> sendMessage({"{"}
            </p>

            <div className="ml-4 space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-500 mb-2">
                  <span className="text-blue-400">name</span>
                  <span className="text-neutral-400">:</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:outline-none transition-colors font-mono text-sm"
                  placeholder='"{personalInfo.name}"'
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-500 mb-2">
                  <span className="text-blue-400">email</span>
                  <span className="text-neutral-400">:</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:outline-none transition-colors font-mono text-sm"
                  placeholder='"{personalInfo.email}"'
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-neutral-500 mb-2">
                  <span className="text-blue-400">message</span>
                  <span className="text-neutral-400">:</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 text-neutral-100 focus:border-neutral-500 focus:outline-none transition-colors resize-none font-mono text-sm"
                  placeholder='"Hello, lets work together..."'
                />
              </div>
            </div>

            <p className="text-neutral-500 mt-6">
              {"}"}, <span className="text-neutral-500">{"//"}</span> click to send
            </p>

            <button
              type="submit"
              className="mt-6 w-full sm:w-auto px-6 py-3 bg-neutral-100 text-neutral-950 font-medium hover:bg-neutral-200 transition-colors font-mono text-sm group"
            >
              <span className="text-green-400 group-hover:text-green-600">$</span> ./send-message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 sm:mt-12 font-mono text-sm text-neutral-400">
        <span className="text-neutral-400">{"}"}</span>
      </div>
    </div>
  );
}
