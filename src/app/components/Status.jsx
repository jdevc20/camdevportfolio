import React from "react";

export default function Status() {
  return (
    <section className="p-5 sm:p-8 md:p-10 bg-amber-200 text-gray-800 rounded-2xl">
      <h2 className="text-xl font-bold mb-4 text-amber-500">What am I doing right now?</h2>
      <p className="text-base sm:text-lg text-indigo-800">
        I am currently employed as a <span className="font-semibold">Technical Specialist II</span> at <span className="font-semibold">Alliance Software, Inc.</span>
      </p>
    </section>
  );
}
