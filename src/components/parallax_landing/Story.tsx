import { ScrollPosition } from "../../types/parallax_landing";

export const Story = ({ scrollPosition }: ScrollPosition) => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="mb-16"
          style={{
            transform: `translateX(${Math.max(
              0,
              (scrollPosition - 500) * 0.2
            )}px)`,
            opacity: Math.min(1, Math.max(0, (scrollPosition - 500) / 500)),
          }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};
