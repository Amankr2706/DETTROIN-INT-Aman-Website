const campuses = [
  {
    name: "Aligarh Campus",
    address: "Ramghat Road, Aligarh, Uttar Pradesh",
    phone: "+91 98765 43210",
  },
  {
    name: "Sasni Campus",
    address: "Sasni Road, Hathras District, Uttar Pradesh",
    phone: "+91 98765 43211",
  },
  {
    name: "Hathras Campus",
    address: "Civil Lines, Hathras, Uttar Pradesh",
    phone: "+91 98765 43212",
  },
];

function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white">
            Our Campuses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {campuses.map((c) => (
            <div
              key={c.name}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-3">
                {c.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                📍 {c.address}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                📞 {c.phone}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="font-bold text-slate-800 dark:text-white text-xl mb-5 text-center">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
            <button
              type="button"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;