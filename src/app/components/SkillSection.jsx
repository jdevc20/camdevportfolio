import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section className="p-6 sm:p-8 md:p-10 bg-blue-200 text-gray-800 rounded-2xl shadow-lg mt-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center">
        Skills & Expertise 🧠
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          title="Programming Languages"
          skills={["C#", "Java", "Node.js", "PHP", "C++"]}
        />
        <SkillCard
          title="Frameworks & Libraries"
          skills={[
            "ASP .NET Core",
            "WPF",
            "React",
            "React Native",
            "Entity Framework",
            "LINQ",
          ]}
        />
        <SkillCard
          title="Web & API Development"
          skills={[
            "RESTful APIs (ASP .NET Web API, Node.js)",
            "Basic UI/UX Design",
          ]}
        />
        <SkillCard
          title="Databases"
          skills={[
            "SQL Server",
            "MySQL",
            "MongoDB (NoSQL)",
            "Schema Design",
            "Indexing",
            "Performance Tuning",
          ]}
        />
        <SkillCard
          title="Tooling & DevOps"
          skills={[
            "Git/GitHub/GitLab",
            "Docker",
            "Postman",
            "CI/CD Pipelines",
          ]}
        />
        <SkillCard
          title="Testing & Quality"
          skills={[
            "xUnit",
            "NUnit",
            "Unit Testing",
            "Integration Testing",
            "Code Reviews",
          ]}
        />
        <SkillCard
          title="Other Skills"
          skills={[
            "Basic Game Development Principles",
            "Clean Code Practices",
            "Agile/Scrum Methodologies",
          ]}
        />
        <SkillCard
          title="Development Strengths"
          skills={[
            "Full-Stack Web Development",
            "API Design & Integration",
            "Database Management",
            "Debugging & Troubleshooting",
            "Clean Code & Maintainability",
            "Adaptability",
          ]}
        />
        <SkillCard
          title="Team Collaboration"
          skills={[
            "Cross-functional Teamwork",
            "Sprint Planning",
            "User-Story Refinement",
            "CI/CD-Driven Deployments",
          ]}
        />
      </div>
    </section>
  );
}
