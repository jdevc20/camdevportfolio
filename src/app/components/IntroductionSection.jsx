import { FaLaptopCode, FaRegLightbulb, FaHiking } from "react-icons/fa";
import InterestCard from "./InterestCard";

export default function IntroductionSection() {
  return (
    <div className="col-span-1 lg:col-span-3 row-span-3 text-center border border-2 bg-gray-200 rounded-2xl lg:text-left p-6 sm:p-8 md:p-10">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl  font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-2s bg-blue-300 rounded-2xl p-2">
        Hello! I&apos;m John Dave
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6  animate__animated animate__fadeIn animate__delay-3s">
        A developer based in Bacolod City. 🎭
      </p>
      <p className="text-base sm:text-lg lg:text-xl  animate__animated animate__fadeIn animate__delay-4s">
        I am passionate about crafting code that adheres to best practices and industry standards, ensuring cleanliness and efficiency in my programming.
      </p>
      <p className="text-base sm:text-lg lg:text-xl mt-4 animate__animated animate__fadeIn animate__delay-5s">
        I attended the University of Saint Lasalle for four years, focusing on Computer Science with a specialization in Game Development during my undergraduate studies.
      </p>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <InterestCard icon={FaLaptopCode} title="🧑‍💻 Tech Enthusiast" description="I love exploring new technologies and tools to optimize my development workflow." />
        <InterestCard icon={FaRegLightbulb} title="🤔 Innovative Thinking" description="I enjoy solving complex problems with creative solutions." />
        <InterestCard icon={FaHiking} title="🏂 Adventurer" description="In my free time, I love hiking and exploring nature." />
      </div>
    </div>
  );
}
