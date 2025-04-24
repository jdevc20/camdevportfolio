import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section className="p-6 sm:p-8 md:p-10 bg-indigo-200 text-gray-800 rounded-2xl shadow-lg mt-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center">
        Experience 💼
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExperienceCard
          company="Alliance Software Inc."
          position="Support Specialist – ULSSI Department by Unilab Incorporated"
          dateRange="October 2022 – Present"
          responsibilities={[
            "Ensure the smooth operation and maintenance of client applications.",
            "Create and manage comprehensive help documents for users.",
            "Identify, analyze, and resolve bugs reported by users.",
            "Implement Requests for Change (RFCs) on specific modules.",
            "Perform in-depth root cause analysis of issues.",
            "Manage backend database systems for integrity and performance.",
            "Design and develop APIs for application integrations."
          ]}
          tech="C#, OutSystems"
        />

        {/* Add more ExperienceCard components here for other roles */}
      </div>
    </section>
  );
}
