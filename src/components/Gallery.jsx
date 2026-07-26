const galleryImages = [
  { src: "/src/assets/event.webp", caption: "Student Activities" },
  { src: "/src/assets/classroom.webp", caption: "Classroom Learning" },
  { src: "/src/assets/sports.webp", caption: "Sports & Athletics" },
  { src: "/src/assets/gallery1.avif", caption: "School Events" },
  { src: "/src/assets/music.webp", caption: "Music & Arts" },
];

function Gallery() {
  return (
    <section className="py-14 sm:py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3">
            Life at Pavna
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white">
            Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.caption}
              className="relative overflow-hidden rounded-2xl shadow-sm group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-40 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
                <p className="text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;