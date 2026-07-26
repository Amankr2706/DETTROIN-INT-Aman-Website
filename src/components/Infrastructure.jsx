import compLabImg from "../assets/comp lab.webp";
import scienceLabImg from "../assets/lab.avif";
import libraryImg from "../assets/lib.webp";
import sportsImg from "../assets/sports.avif";

const infraItems = [
  {
    title: "Computer Lab",
    desc: "Modern systems with high-speed internet, coding tools, and hands-on tech sessions for every grade.",
    img: compLabImg,
  },
  {
    title: "Science Laboratory",
    desc: "Fully equipped physics, chemistry, and biology labs encouraging practical, experiment-based learning.",
    img: scienceLabImg,
  },
  {
    title: "Library",
    desc: "A quiet, well-stocked space with thousands of titles, digital resources, and dedicated reading zones.",
    img: libraryImg,
  },
  {
    title: "Sports Complex",
    desc: "Outdoor grounds and indoor courts for cricket, football, basketball, and athletics training.",
    img: sportsImg,
  },
];

function Infrastructure() {
  return (
    <section id="infrastructure" className="py-14 sm:py-20 px-4 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3">
            Campus & Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white">
            Our Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {infraItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full sm:w-40 h-48 sm:h-auto object-cover"
              />
              <div className="p-5 sm:p-0 sm:py-5 sm:pr-5">
                <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Infrastructure;