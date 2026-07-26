import { useState } from "react";
import aboutImg from "../assets/about.jpg";

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-14 sm:py-20 px-4 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <img
            src={aboutImg}
            alt="Students learning at Pavna School"
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <span className="inline-block bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-4">
            Welcome to Pavna School
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">
            Founded in 1998 by Shri Pawan Jain, Pavna School began as a dream to
            provide innovative, world-class education, shaping young minds in a
            supportive environment.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">
            We strive to ignite a passion for learning and develop practical
            skills for a rapidly evolving world, empowering every student to
            achieve their full potential in a nurturing, inclusive community.
          </p>

          {expanded && (
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">
              Guided by our commitment to excellence, we dedicate ourselves to
              preparing students to be ethical, knowledgeable, and impactful
              leaders, ready to contribute to society and excel in their chosen
              fields. Our cultural tapestry cohesively envelops a nurturing
              community where every student is empowered to thrive.
            </p>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-lg transition w-full sm:w-auto"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
