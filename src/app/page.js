
import IntroductionSection from "./components/IntroductionSection";
import ProjectCard from "./components/ProjectCard";
import ProjectSection from "./components/ProjectSection";


export default function Home() {
  return (
    <div className="min-h-screen p-2 sm:p-4 max-w-6xl mx-auto">
      <IntroductionSection />
      <ProjectSection/>
    </div>
  );
}
