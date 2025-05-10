import React from "react";

const EmailLink = () => {
  return (
    <div className="fixed right-8 bottom-0 hidden md:flex flex-col items-center space-y-4 z-50 ">
      <a
        href="mailto:your@email.com"
        className="text-foreground hover:text-primary transition-colors duration-300 writing-vertical-rl text-lg tracking-wider"
        style={{
          animation: "var(--animate-fade-in-delay-4)",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        pravven11@gmail.com
      </a>
      <div className="w-px h-24 bg-foreground opacity-20"></div>
    </div>
  );
};

export default EmailLink;
