import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Connect() {
  return (
    <section className="p-5 sm:p-8 md:p-10 bg-indigo-200 text-gray-800 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
      <div className="flex space-x-6 text-xl">
        <a
          href="https://facebook.com/jdevc20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-600 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/jdevc20/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-600 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/jdevc20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:jdcamarin20@gmail.com"
          className="text-indigo-400 hover:text-indigo-600 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
