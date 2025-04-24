import { FaLaptopCode, FaRegLightbulb, FaHiking } from "react-icons/fa";
import InterestCard from "./InterestCard";

export default function IntroductionSection() {
  return (
    <div className="col-span-1 lg:col-span-3 row-span-3 p-6 sm:p-8 md:p-10 bg-green-100 text-gray-800 shadow-lg rounded-2xl transition-all duration-300">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
        Hello! I&apos;m John Dave 😄
      </h1>
      <p className="text-base sm:text-lg lg:text-xl mb-4 text-gray-600">
        A developer based in Bacolod City.
      </p>
      <p className="text-sm sm:text-base lg:text-lg text-gray-700">
        Passionate about clean, efficient, and future-proof code that adheres to best practices.
      </p>
      <p className="text-sm sm:text-base lg:text-lg mt-4 text-gray-700">
        I studied Computer Science at the University of Saint La Salle, specializing in Game Development.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InterestCard
          icon={FaLaptopCode}
          title="Tech Enthusiast"
          description="Exploring tools that improve dev flow."
        />
        <InterestCard
          icon={FaRegLightbulb}
          title="Creative Thinker"
          description="Solving problems with clarity and insight."
        />
        <InterestCard
          icon={FaHiking}
          title="Nature Lover"
          description="Hiking keeps my mind fresh and grounded."
        />
      </div>
    </div>
  );
}
