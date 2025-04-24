import ProfileSection from "./components/ProfileSection";
import IntroductionSection from "./components/IntroductionSection";
import TechIconsSection from "./components/TechIconsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="mx-4 sm:mx-2 md:mx-10 lg:mx-20 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-3 gap-2 sm:gap-4 lg:gap-6 p-4 sm:p-6 md:p-10 lg:p-20 min-h-screen ">
          <ProfileSection />
          <IntroductionSection />
          <TechIconsSection />
        </div>
      </div>
    </div>
  );
}
