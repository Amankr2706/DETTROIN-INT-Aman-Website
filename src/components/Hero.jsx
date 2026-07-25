function Hero() {
  return (
    <section className="pt-20 min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 px-4 sm:px-8 transition-colors">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div className="text-center md:text-left">
          <span className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4">
            Aligarh Campus
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight mb-4">
            Nurturing Future Leaders Through <span className="text-teal-700 dark:text-teal-400">Holistic Education</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-6 max-w-md mx-auto md:mx-0">
            28+ years of legacy, shaping confident, capable, and compassionate learners.
          </p>
          <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto">
            Apply Now
          </button>
        </div>

        {/* Image */}
        <div className="order-first md:order-last">
          <img
            src="/src/assets/Home.webp"
            alt="Students at Pavna School campus"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;