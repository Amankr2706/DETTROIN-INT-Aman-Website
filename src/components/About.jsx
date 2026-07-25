function About() {
  return (
    <section className="py-14 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="order-2 md:order-1">
          <img
            src="/src/assets/about.webp"
            alt="Students learning at Pavna School"
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-4">
            Welcome to Pavna School
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-4 leading-relaxed">
            Founded in 1998 by Shri Pawan Jain, Pavna School began as a dream to
            provide innovative, world-class education, shaping young minds in a
            supportive environment.
          </p>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            We strive to ignite a passion for learning and develop practical
            skills for a rapidly evolving world, empowering every student to
            achieve their full potential in a nurturing, inclusive community.
          </p>
          <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;