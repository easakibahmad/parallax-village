import { ScrollPosition } from "../../types/parallax_landing";

export const Portfolio = ({ scrollPosition }: ScrollPosition) => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-lg"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollPosition - 1200) * 0.15
                )}px)`,
                opacity: Math.min(
                  1,
                  Math.max(0, (scrollPosition - 1200) / 500)
                ),
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`data:image/jpeg;base64,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`}
                  alt={`Portfolio ${item}`}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold">
                    Project {item}
                  </h3>
                  <p className="text-gray-200">Web Design & Development</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
