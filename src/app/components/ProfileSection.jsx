import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="col-span-1 lg:col-span-2 row-span-3 flex flex-col justify-center items-center h-full bg-yellow-200 border-4 border-dashed border-pink-500 rounded-[30px] p-6 sm:p-8 md:p-10 animate__animated animate__zoomIn animate__delay-1s shadow-xl cartoon-bubble">
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={280}
        height={280}
        className="rounded-full border-4 border-blue-500 shadow-md transform hover:rotate-3 hover:scale-110 transition-all duration-500 ease-in-out"
      />
      <div className="mt-6 w-full flex justify-center">
        <button className="bg-pink-300 text-white font-bold text-lg py-3 px-8 rounded-full border-4 border-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-transform duration-300 cartoon-font">
          💬 LET&apos;S CONNECT!
        </button>
      </div>
    </div>
  );
}
