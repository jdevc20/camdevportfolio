import Image from "next/image";
import { FaNodeJs, FaDatabase, FaCogs, FaGamepad, FaLaptopCode, FaRegLightbulb, FaHiking } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-4 sm:mx-2 md:mx-10 lg:mx-20 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-3 gap-2 sm:gap-4 lg:gap-6 p-4 sm:p-6 md:p-10 lg:p-20 min-h-screen ">

          {/* Profile Section */}
          <div className="col-span-1 lg:col-span-2 row-span-3 flex flex-col justify-center items-center h-full bg-blue-900 p-6 sm:p-8 md:p-10 animate__animated animate__fadeIn animate__delay-1s">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <div className="mt-4 w-full flex justify-center">
              <button className="bg-teal-600 text-white py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Let&apos;s Connect
              </button>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="col-span-1 lg:col-span-3 row-span-3 text-center lg:text-left bg-gradient-to-r from-blue-500 to-teal-500 p-6 sm:p-8 md:p-10 shadow-lg animate__animated animate__fadeIn animate__delay-1s">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-2s">
              Hello! I&apos;m John Dave
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-gray-100 animate__animated animate__fadeIn animate__delay-3s">
              A developer based in Bacolod City. 🎭
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 animate__animated animate__fadeIn animate__delay-4s">
              I am passionate about crafting code that adheres to best practices and industry standards, ensuring cleanliness and efficiency in my programming.
            </p>
            <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-200 animate__animated animate__fadeIn animate__delay-5s">
              I attended the University of Saint Lasalle for four years, focusing on Computer Science with a specialization in Game Development during my undergraduate studies.
            </p>

            {/* Additional Section with Icons */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="flex flex-col items-center text-white">
                <FaLaptopCode className="text-4xl mb-2 transform hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl">Tech Enthusiast</h3>
                <p className="text-sm sm:text-base text-gray-200">I love exploring new technologies and tools to optimize my development workflow.</p>
              </div>
              <div className="flex flex-col items-center text-white">
                <FaRegLightbulb className="text-4xl mb-2 transform hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl">Innovative Thinking</h3>
                <p className="text-sm sm:text-base text-gray-200">I enjoy solving complex problems with creative solutions.</p>
              </div>
              <div className="flex flex-col items-center text-white">
                <FaHiking className="text-4xl mb-2 transform hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl">Outdoor Adventurer</h3>
                <p className="text-sm sm:text-base text-gray-200">In my free time, I love hiking and exploring nature.</p>
              </div>
            </div>
          </div>

          {/* Tech Icons Section */}
          <div className="col-span-1 lg:col-span-5 row-span-2 animate__animated animate__fadeIn animate__delay-2s">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
              <div className="bg-gray-600 text-amber-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 transform hover:scale-110 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-2s">
                <FaNodeJs className="text-4xl sm:text-5xl" />
                <span className="mt-2 text-sm sm:text-base">Node.js</span>
              </div>
              <div className="bg-gray-600 text-amber-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 transform hover:scale-110 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-3s">
                <FaDatabase className="text-4xl sm:text-5xl" />
                <span className="mt-2 text-sm sm:text-base">MongoDB</span>
              </div>
              <div className="bg-gray-600 text-amber-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 transform hover:scale-110 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-4s">
                <FaDatabase className="text-4xl sm:text-5xl" />
                <span className="mt-2 text-sm sm:text-base">SQL</span>
              </div>
              <div className="bg-gray-600 text-amber-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 transform hover:scale-110 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-5s">
                <FaGamepad className="text-4xl sm:text-5xl" />
                <span className="mt-2 text-sm sm:text-base">Game Dev</span>
              </div>
              <div className="bg-gray-600 text-amber-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 transform hover:scale-110 transition-transform duration-300 animate__animated animate__fadeIn animate__delay-6s">
                <FaCogs className="text-4xl sm:text-5xl" />
                <span className="mt-2 text-sm sm:text-base">OutSystems</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
