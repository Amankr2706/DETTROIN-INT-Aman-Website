import { useState } from "react";

const faqs = [
  {
    q: "What curriculum does Pavna School follow?",
    a: "Pavna School follows the CBSE (Central Board of Secondary Education) curriculum, blended with modern pedagogical approaches for holistic development.",
  },
  {
    q: "Do you offer boarding facilities?",
    a: "Yes, we offer a structured, home-like residential boarding program for students who wish to stay on campus, complete with dedicated staff and a safe environment.",
  },
  {
    q: "What is the student-teacher ratio?",
    a: "We maintain a student-teacher ratio of 1:12, ensuring personalized attention and better learning outcomes for every child.",
  },
  {
    q: "How can I apply for admission?",
    a: "You can start the admission process by clicking 'Apply Now' on our homepage, or visiting our Admissions section for detailed steps, required documents, and fee structure.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 px-4 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-5 sm:px-6 py-4 sm:py-5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                <span className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base pr-4">
                  {item.q}
                </span>
                <span
                  className={`text-teal-700 dark:text-teal-400 text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 sm:px-6 py-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;