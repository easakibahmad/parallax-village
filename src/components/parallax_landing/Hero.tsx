import { ScrollPosition } from "../../types/parallax_landing";

export const Hero = ({ scrollPosition }: ScrollPosition) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
        }}
      />
      <div
        className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-50"
        style={{
          transform: `translateY(${scrollPosition * 0.3}px)`,
        }}
      />
      <div
        className="relative text-center text-white z-10"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
        }}
      >
        <h1 className="text-6xl text-black font-bold mb-4">
          Welcome to Parallax Village
        </h1>
        <p className="text-xl text-black">Scroll down to explore</p>
      </div>
    </section>
  );
};
