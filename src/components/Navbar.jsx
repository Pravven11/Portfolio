import { cn } from "@/lib/utils";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme handling
useEffect(() => {
  if (typeof window !== "undefined") {
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      }
    } catch (error) {
      console.warn("localStorage access denied:", error);
    }
  }
}, []);


const toggleTheme = () => {
  try {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  } catch (error) {
    console.warn("localStorage access denied on theme toggle:", error);
  }
};


  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);

      if (currentY > lastY && currentY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-sm" : "py-4",
          !isVisible && "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between ml-auto">
          {/* Mobile menu button (left side) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Logo (centered on mobile) */}
          <a
            className="text-xl font-bold text-primary flex items-center mx-auto md:mx-0"
            href="#hero"
            onClick={handleNavClick}
          >
            <span className="relative z-10">PT</span>
          </a>

          {/* Desktop navigation (right side) */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1DPR7SPZgszF5RmdaorNP0_yv5JDDzUG0/view?usp=sharingnpm "
              className="ml-4 text-primary border border-primary rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors duration-300 text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            
            {/* Theme toggle (desktop) */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5 text-yellow-300" />
              ) : (
                <FaMoon className="h-5 w-5 text-blue-900 dark:text-blue-300" />
              )}
            </button>
          </div>

          {/* Theme toggle (mobile - right side) */}
          <div className="md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5 text-yellow-300" />
              ) : (
                <FaMoon className="h-5 w-5 text-blue-900 dark:text-blue-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu (slides from left) */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-start justify-center transition-all duration-300 pl-8",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 w-full max-w-xs">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
              onClick={handleNavClick}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1DPR7SPZgszF5RmdaorNP0_yv5JDDzUG0/view?usp=sharing"
            className="text-xl text-primary border border-primary rounded-lg px-6 py-3 hover:bg-primary/10 transition-colors duration-300 w-full text-center"
            onClick={handleNavClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};