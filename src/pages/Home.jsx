import { useState, useEffect } from "react";
import { Background } from "../components/Background";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Loader } from "../components/Loader";
import SocialLinks from "../components/SocialLinks";
import EmailLink from "../components/EmailLink";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import Experience from "../components/Experience";
import Project from "../components/Project";
// import { GeminiChatBot } from "../components/GeminiChatBot";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for exactly 3 seconds
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // 1. If still loading, just render <Loader /> fullscreen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader />
      </div>
    );
  }

  // 2. Once loaded, render the real app
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}
      {/* Background effects */}
      <Background />

      <SocialLinks />
      <EmailLink />
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>

      {/* Footer (add here when you have one) */}
      {/* <GeminiChatBot /> */}
    </div>
  );
};
