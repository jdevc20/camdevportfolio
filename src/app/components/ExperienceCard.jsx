export default function ExperienceCard({ company, position, dateRange, responsibilities, tech }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-indigo-600 mb-1">{position}</h3>
        <p className="text-sm text-gray-700 font-medium">{company}</p>
        <p className="text-sm text-gray-500 italic mb-4">{dateRange}</p>
  
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
  
        {tech && (
          <p className="text-sm text-indigo-500 font-medium">
            Technologies: {tech}
          </p>
        )}
      </div>
    );
  }
  