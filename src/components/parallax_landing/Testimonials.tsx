import { ScrollPosition } from "../../types/parallax_landing";

export const Testimonials = ({ scrollPosition }: ScrollPosition) => {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow-lg"
              style={{
                transform: `translateX(${Math.max(
                  0,
                  (scrollPosition - 1600) * (item % 2 === 0 ? 0.2 : -0.2)
                )}px)`,
                opacity: Math.min(
                  1,
                  Math.max(0, (scrollPosition - 1600) / 500)
                ),
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                <div>
                  <h4 className="font-bold">Client {item}</h4>
                  <p className="text-gray-600">Company {item}</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
