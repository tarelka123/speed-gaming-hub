
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";
import { Github, Twitter, MessageSquare } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-black/80 border-purple-800/20' : 'bg-white/80 border-blue-200'} backdrop-blur-sm border-t py-6 transition-colors duration-300`}>
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/ac00610e-dcd8-433a-8ee6-82c44ec74f83.png" 
            alt="SPEED" 
            className="h-8"
          />
          <span className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
            © 2024 SPEED. {t('all_rights_reserved')}
          </span>
        </div>
        
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/terms" className={`text-sm ${theme === 'dark' ? 'text-white/60 hover:text-white/90' : 'text-black/60 hover:text-black/90'} transition-colors`}>
            {t('terms')}
          </Link>
          <Link to="/privacy" className={`text-sm ${theme === 'dark' ? 'text-white/60 hover:text-white/90' : 'text-black/60 hover:text-black/90'} transition-colors`}>
            {t('privacy')}
          </Link>
          <Link to="/contact" className={`text-sm ${theme === 'dark' ? 'text-white/60 hover:text-white/90' : 'text-black/60 hover:text-black/90'} transition-colors`}>
            {t('contact')}
          </Link>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'} transition-colors`}>
            <Github className="h-5 w-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'} transition-colors`}>
            <Twitter className="h-5 w-5" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'} transition-colors`}>
            <MessageSquare className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}