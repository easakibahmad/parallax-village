import { ScrollPosition } from "../../types/parallax_landing";

export const FeatureCards = ({ scrollPosition }: ScrollPosition) => {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollPosition - 800) * 0.1
                )}px)`,
                opacity: Math.min(1, Math.max(0, (scrollPosition - 800) / 500)),
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Feature {item}</h3>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
