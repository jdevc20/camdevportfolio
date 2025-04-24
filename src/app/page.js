import ProfileSection from "./components/ProfileSection";
import IntroductionSection from "./components/IntroductionSection";
import TechIconsSection from "./components/TechIconsSection";

export default function Home() {
  return (
    <div className="min-h-screen p-2 sm:p-4 max-w-6xl mx-auto">
      <IntroductionSection />
    </div>
  );
}
