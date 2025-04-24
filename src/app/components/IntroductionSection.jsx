import { FaLaptopCode, FaRegLightbulb, FaHiking } from "react-icons/fa";
import InterestCard from "./InterestCard";

export default function IntroductionSection() {
  return (
    <div className="animate__animated animate__fadeIn col-span-1 lg:col-span-3 row-span-3 p-6 sm:p-8 md:p-10 bg-green-100 text-gray-800 shadow-lg rounded-2xl transition-all duration-300">
      <h1 className="animate__animated animate__bounce animate__delay-1s text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-green-800">
        Hello! I&apos;m John Dave 😄
      </h1>

      <p className="animate__animated animate__fadeInUp animate__delay-2s text-base sm:text-lg lg:text-xl mb-2 text-green-700">
        I build clean, scalable systems and love solving real-world problems through code. 🏗️
      </p>
      <p className="animate__animated animate__fadeInUp animate__delay-3s text-sm sm:text-base lg:text-lg text-green-700">
        Passionate about clean, efficient, and future-proof code that adheres to best practices. ✍️
      </p>
      <p className="animate__animated animate__fadeInUp animate__delay-4s text-sm sm:text-base lg:text-lg mt-2 text-green-700">
        I studied Computer Science at the University of Saint La Salle, specializing in Game Development. 🧑‍💻
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-2">

        <div className="animate__animated animate__fadeInUp animate__delay-6s">
          <InterestCard
            icon={FaLaptopCode}
            title="Tech Enthusiast"
            description="Exploring tools that improve dev flow."
          />
        </div>
        <div className="animate__animated animate__fadeInUp animate__delay-7s">
          <InterestCard
            icon={FaRegLightbulb}
            title="Creative Thinker"
            description="Solving problems with clarity and insight."
          />
        </div>
        <div className="animate__animated animate__fadeInUp animate__delay-8s">
          <InterestCard
            icon={FaHiking}
            title="Nature Lover"
            description="Hiking keeps my mind fresh and grounded."
          />
        </div>
      </div>
    </div>
  );
}
