
import ExperienceSection from "./components/ExperienceSection";
import IntroductionSection from "./components/IntroductionSection";
import ProjectCard from "./components/ProjectCard";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen p-2 sm:p-6 max-w-6xl mx-auto">
        <IntroductionSection />
        <ProjectSection />
        <SkillsSection />
        <ExperienceSection />
      </div>
    </div>
  );
}
