export default function ProjectCard({ title, description, tech, link }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <p className="text-sm text-indigo-500 font-medium">Tech Stack: {tech}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg w-max"
          >
            View Project
          </a>
        )}
      </div>
    );
  }
  