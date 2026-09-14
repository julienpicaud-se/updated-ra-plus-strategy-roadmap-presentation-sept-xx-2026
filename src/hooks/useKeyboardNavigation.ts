import { useEffect } from "react";

const sections = [
  "hero",
  "executive-summary",
  "strategic-pillars",
  "objectives",
  "roadmap",
  "initiatives",
  "value-proof",
  "start-stop",
  "appendix",
  "takeaway",
];

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere with input fields
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const currentSection = getCurrentSection();
      const currentIndex = sections.indexOf(currentSection);

      if (e.key === "ArrowDown" || e.key === "j") {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        scrollToSection(sections[nextIndex]);
      } else if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToSection(sections[prevIndex]);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(sections[0]);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(sections[sections.length - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
};

const getCurrentSection = (): string => {
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }

  return sections[0];
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
