import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: "GitHub", 
      url: "https://github.com", 
      icon: <FaGithub className="w-5 h-5" /> 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com", 
      icon: <FaTwitter className="w-5 h-5" /> 
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com", 
      icon: <FaLinkedinIn className="w-5 h-5" /> 
    },
    { 
      name: "Instagram", 
      url: "https://instagram.com", 
      icon: <FaInstagram className="w-5 h-5" /> 
    },
  ];

  return (
    <div className="fixed left-8 bottom-0 hidden md:flex flex-col items-center space-y-8 z-50">
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="text-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          style={{ animation: `var(--animate-fade-in-delay-${index + 1})` }}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
      <div className="w-px h-24 bg-foreground opacity-20"></div>
    </div>
  );
};

export default SocialLinks;