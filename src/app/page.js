'use client'
import AnimatedOnScroll from "./components/AnimatedOnScroll";
import ExperienceSection from "./components/ExperienceSection";
import FloatingCircles from "./components/FloatingCircles";
import IntroductionSection from "./components/IntroductionSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillSection";

export default function Home() {
  return (
    <>
    <FloatingCircles/>
        <div className="min-h-screen scrollbar-none overflow-x-hidden background-dots">
      
      <div className="min-h-screen p-2 sm:p-6 max-w-6xl mx-auto space-y-16">
        <AnimatedOnScroll animation="animate__fadeInDown">
          <IntroductionSection />
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
      </div>
    </div>
    </>

  );
}
