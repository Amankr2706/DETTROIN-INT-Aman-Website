const facilities = [
  {
    title: "AI & Robotics",
    desc: "Hands-on STEM learning with project-based robotics and computational thinking challenges.",
    icon: "🤖",
  },
  {
    title: "Co-Curricular Exposure",
    desc: "Music, drama, debate, and environmental science activities that build confidence and creativity.",
    icon: "🎭",
  },
  {
    title: "Sports & Athletics",
    desc: "Cricket, football, swimming, basketball, tennis, and a fully equipped indoor gym.",
    icon: "⚽",
  },
  {
    title: "Holistic Development",
    desc: "Life skills, teamwork, and emotional intelligence built alongside academic excellence.",
    icon: "🌱",
  },
  {
    title: "SEEL Learning",
    desc: "Social, Emotional, and Experiential Learning integrated into everyday campus life.",
    icon: "💡",
  },
  {
    title: "Boarding Life",
    desc: "A structured, home-like residential environment fostering independence and discipline.",
    icon: "🏠",
  },
  {
    title: "Expert Faculty",
    desc: "Globally trained educators bringing real industry experience into the classroom.",
    icon: "🎓",
  },
  {
    title: "Safe Transport",
    desc: "GPS-enabled buses with trained staff and real-time route updates for parents.",
    icon: "🚌",
  },
];

function Facilities() {
  return (
    <section className="py-14 sm:py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white">
            Global-Standard Learning
         </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
  {facilities.map((item) => (
    <div
      key={item.title}
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800 hover:-translate-y-1"
    >
      <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
      <h3 className="font-bold text-slate-800 dark:text-white text-lg sm:text-xl mb-3">
        {item.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
  </div>
      </div>
    </section>
  );
}

export default Facilities;