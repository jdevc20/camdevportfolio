'use client'
import AnimatedOnScroll from "./components/AnimatedOnScroll";
import ExperienceSection from "./components/ExperienceSection";
import Connect from "./components/Connect";
import FloatingCircles from "./components/FloatingCircles";
import IntroductionSection from "./components/IntroductionSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";
import Status from "./components/Status";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <FloatingCircles />
      <div className="min-h-screen scrollbar-none overflow-x-hidden background-dots">

        <div className="min-h-screen p-2 sm:p-6 max-w-6xl mx-auto space-y-16">
          <AnimatedOnScroll animation="animate__fadeInDown">
            <IntroductionSection />
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="animate__fadeInUp" delay="0.2s">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
    <Connect />
    <Status />
  </div>
</AnimatedOnScroll>



          <AnimatedOnScroll animation="animate__fadeInUp" delay="0.2s">
            <ProjectSection />
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="animate__fadeInLeft" delay="0.4s">
            <SkillsSection />
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="animate__fadeInRight" delay="0.6s">
            <ExperienceSection />
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="animate__fadeInRight" delay="0.6s">
            <Footer/>
          </AnimatedOnScroll>
        </div>
      </div>
    </>

  );
}
