import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 min-h-screen mx-20">
      {/* Portfolio Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-3 gap-1 ">
        {/* Profile Section */}
        <div className="row-span-2 sm:col-span-1 lg:col-span-1 bg-white shadow-md  p-6 flex flex-col items-center justify-center ">
          <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
          <h1 className="text-2xl font-bold mt-4">John Dave Camarin</h1>
          <p className="text-gray-600 text-center">Software Developer | Full Stack Engineer</p>
        </div>

        {/* Skills Section */}
        <div className="sm:col-span-1 lg:col-span-1 bg-white shadow-md  p-6">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>C#, .NET</li>
            <li>JavaScript, React, Next.js</li>
            <li>SQL, SQLite3</li>
            <li>API Development, Outsystems</li>
            <li>UI/UX Design, Tailwind CSS</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="sm:col-span-1 lg:col-span-1 bg-white shadow-md p-6  ">
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <ul className="text-gray-700">
            <li className="mb-2">
              <strong>XYZ App</strong> - Integrated for seamless API functionality.
            </li>
            <li className="mb-2">
              <strong>ABC API</strong> - Built using SQLite3 for linguistic research.
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="sm:col-span-2 lg:col-span-2 bg-white shadow-md p-6 text-center ">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p>Email: jdcamarin20@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/johndavecamarin</p>
          <p>GitHub: github.com/jdevc220</p>
        </div>
      </div>
    </div>
  );
}
