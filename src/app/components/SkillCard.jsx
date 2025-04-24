export default function SkillCard({ title, skills }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold mb-3 text-indigo-600">{title}</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  