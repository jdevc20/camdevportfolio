import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section className="p-6 sm:p-8 md:p-10 bg-gray-50 text-gray-800 rounded-2xl shadow-lg mt-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center">
        Featured Projects 🚀
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Hiligaynon Dictionary API"
          description="A RESTful API with SQLite3 and Express to serve definitions and example usages of Hiligaynon words."
          tech="Node.js, Express, SQLite3"
          link="https://github.com/yourusername/hiligaynon-dictionary-api"
        />
        <ProjectCard
          title="Real-time Notifications"
          description="Socket.IO and JWT-based user notification system for live updates in a React app."
          tech="React, Node.js, Socket.IO"
          link="https://github.com/yourusername/notification-system"
        />
        <ProjectCard
          title="Portfolio Website"
          description="A personal website to showcase my skills, projects, and resume with SEO-friendly React 19 setup."
          tech="React, TailwindCSS, Vite"
          link="https://yourportfolio.com"
        />
      </div>
    </section>
  );
}
