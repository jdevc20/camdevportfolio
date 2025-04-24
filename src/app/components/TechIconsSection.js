import { FaNodeJs, FaDatabase, FaGamepad, FaCogs } from "react-icons/fa";
// import TechIconCard from "./TechIconCard";

export default function TechIconsSection() {
  return (
    <div className="col-span-1 lg:col-span-5 row-span-2 animate__animated animate__fadeIn animate__delay-2s">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
        {/* <TechIconCard icon={FaNodeJs} label="Node.js" delay="2s" />
        <TechIconCard icon={FaDatabase} label="MongoDB" delay="3s" />
        <TechIconCard icon={FaDatabase} label="SQL" delay="4s" />
        <TechIconCard icon={FaGamepad} label="Game Dev" delay="5s" />
        <TechIconCard icon={FaCogs} label="OutSystems" delay="6s" /> */}
      </div>
    </div>
  );
}
