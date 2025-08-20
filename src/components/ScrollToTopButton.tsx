import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-br from-gaming-gold to-gaming-orange text-white rounded-full shadow-glow hover:shadow-glow-intense transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
    </button>
  );
};

export default ScrollToTopButton;