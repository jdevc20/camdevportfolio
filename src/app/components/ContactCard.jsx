import { Mail, Linkedin, Phone } from "lucide-react";

export default function ContactCard({ linkedin, viber, email }) {
  return (
    <div className="shadow-md rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 bg-blue-100">
      <h3 className="text-2xl font-bold text-indigo-600 mb-8 text-center">Contact Me</h3>
      
      <div className="flex justify-center items-center gap-10 flex-wrap">
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white w-28 h-28 rounded-full transition-all duration-300 shadow-md"
          >
            <Linkedin size={32} />
            <span className="text-xs mt-2">LinkedIn</span>
          </a>
        )}
        {viber && (
          <div className="flex flex-col items-center justify-center bg-indigo-500 text-white w-28 h-28 rounded-full shadow-md">
            <Phone size={32} />
            <span className="text-xs mt-2 text-center">{viber}</span>
          </div>
        )}
        {email && (
          <a 
            href={`mailto:${email}`} 
            className="flex flex-col items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white w-28 h-28 rounded-full transition-all duration-300 shadow-md"
          >
            <Mail size={32} />
            <span className="text-xs mt-2">Email</span>
          </a>
        )}
      </div>
    </div>
  );
}
