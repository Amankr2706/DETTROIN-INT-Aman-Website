import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Educators", value: 250, suffix: "+" },
  { label: "Learners Base", value: 30000, suffix: "+" },
  { label: "Happy Parents", value: 20000, suffix: "+" },
  { label: "Alumni Base", value: 6000, suffix: "+" },
  { label: "Years Legacy", value: 28, suffix: "+" },
];

function useCountUp(target, isVisible, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ value, label, suffix, isVisible }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-teal-100 text-xs sm:text-sm mt-1">{label}</p>
    </div>
  );
}

function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-teal-700 py-10 sm:py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}

export default Stats;