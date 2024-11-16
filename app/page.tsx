import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ranktheworld?",
  description: "let's rank trendy topics easily",
};

export default function Home() {
  return (
    <div className=" flex flex-col justify-center min-h-screen p-8 px-12  gap-6  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8  mb-4 items-center sm:items-start">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl md:w-[60%] lg:w-[70%] font-medium">
          Global ranking system for internet’s hot topics
        </h1>
        <h1 className=" lg:text-2xl lg:w-[50rem] ">
          This platform lets you hype certain ideas of a genres, and turn it
          into a nation or worldwide threat.
        </h1>
        <div className=" p-1 rounded-full bg-gradient-to-tr from-[#FF0F0F] via-orange-400 to-rose-400">
          <button className="w-full py-4 px-12 text-white bg-black rounded-full text-lg  ">
            start ranking
          </button>
        </div>
      </main>

      <footer className="flex justify-center items-center text-xs text-center sm:text-sm md:text-base lg:text-xl">
        <div>
          • food • tv shows • characters • celebrities • drink • games • music •
        </div>
      </footer>
    </div>
  );
}
