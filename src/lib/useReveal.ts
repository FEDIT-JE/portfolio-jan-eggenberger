import { useEffect, useRef } from "react";

export function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options }
    );

    // Observe root if it carries a reveal class, plus all reveal children
    const isRevealRoot = el.classList.contains("reveal") || el.classList.contains("reveal-scale");
    if (isRevealRoot) observer.observe(el);

    el.querySelectorAll(".reveal, .reveal-scale").forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}
