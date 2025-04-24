import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="col-span-1 lg:col-span-2 row-span-3 flex flex-col border-2 rounded-2xl justify-center items-center h-full bg-amber-100 p-6 sm:p-8 md:p-10 animate__animated animate__fadeIn animate__delay-1s">
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={300}
        height={300}
        className="rounded-2xl border-2 transform hover:scale-110 transition-transform duration-300"
      />
      <div className="mt-4 w-full flex justify-center">
        <button className="bg-amber-200 border-2 text-black py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
          LET&apos;S CONNECT
        </button>
      </div>
    </div>
  );
}
