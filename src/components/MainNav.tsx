import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Menu, 
  Languages, 
  LogIn, 
  User, 
  X,
  GamepadIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "./ThemeProvider";

// Language flags mapping
const languageFlags: Record<string, string> = {
  en: "🇺🇸",
  ru: "🇷🇺",
  de: "🇩🇪",
  fr: "🇫🇷",
  es: "🇪🇸",
  zh: "🇨🇳",
  ja: "🇯🇵",
  ko: "🇰🇷",
  ar: "🇸🇦"
};

export function MainNav() {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const { theme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check local storage for login status
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Define handlers without useCallback to avoid dependency issues
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    toast({
      title: t('logout_successful'),
      description: t('you_have_been_logged_out'),
    });
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    toast({
      title: t('language_changed'),
      description: `Language set to ${languageFlags[lng] || '🌐'} ${lng.toUpperCase()}`,
    });
  };

  // Define navItems with proper typing
  const navItems = [
    { label: 'home', path: '/' },
    { label: 'games', path: '/games' },
    { label: 'news', path: '/news' },
    { label: 'screenshots', path: '/screenshots' },
    { label: 'videos', path: '/videos' },
    { label: 'racing_game', path: '/racing-game', icon: <GamepadIcon className="h-4 w-4" /> },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-sm ${theme === 'dark' ? 'bg-black/70 border-purple-800/20' : 'bg-white/70 border-blue-200'} border-b transition-colors duration-300`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img 
              src="/lovable-uploads/ac00610e-dcd8-433a-8ee6-82c44ec74f83.png" 
              alt="SPEED" 
              className="h-10"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`font-medium transition-colors flex items-center gap-1 ${
                location.pathname === item.path 
                  ? theme === 'dark' ? "text-purple-400" : "text-blue-600"
                  : theme === 'dark' ? "text-white hover:text-purple-300" : "text-black hover:text-blue-500"
              }`}
            >
              {item.icon}
              {t(item.label)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={`w-40 ${theme === 'dark' ? 'bg-black/90 border-purple-800/20' : 'bg-white/90 border-blue-200'}`}>
              <DropdownMenuLabel>{t('language_selector')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                <span className="mr-2">🇺🇸</span> English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('ru')}>
                <span className="mr-2">🇷🇺</span> Русский
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('de')}>
                <span className="mr-2">🇩🇪</span> Deutsch
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('fr')}>
                <span className="mr-2">🇫🇷</span> Français
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('es')}>
                <span className="mr-2">🇪🇸</span> Español
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('zh')}>
                <span className="mr-2">🇨🇳</span> 中文
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('ja')}>
                <span className="mr-2">🇯🇵</span> 日本語
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('ko')}>
                <span className="mr-2">🇰🇷</span> 한국어
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('ar')}>
                <span className="mr-2">🇸🇦</span> العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={`${theme === 'dark' ? 'bg-black/90 border-purple-800/20' : 'bg-white/90 border-blue-200'}`}>
                <DropdownMenuLabel>{t('profile')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">{t('profile')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>{t('logout')}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              asChild 
              variant="outline" 
              className={`gap-2 ${
                theme === 'dark' 
                  ? 'bg-black/50 border-purple-800/50 hover:bg-black/80 hover:border-purple-600' 
                  : 'bg-white/50 border-blue-300 hover:bg-blue-50 hover:border-blue-400'
              }`}
            >
              <Link to="/login">
                <LogIn className="h-4 w-4" />
                {t('login')}
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${theme === 'dark' ? 'bg-black/95 border-purple-800/20' : 'bg-white/95 border-blue-200'} backdrop-blur-sm border-b animate-fade-in`}>
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium transition-colors flex items-center gap-2 ${
                    location.pathname === item.path 
                      ? theme === 'dark' ? "text-purple-400" : "text-blue-600"
                      : theme === 'dark' ? "text-white hover:text-purple-300" : "text-black hover:text-blue-500"
                  }`}
                >
                  {item.icon}
                  {t(item.label)}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="justify-start gap-2 w-full"
                  >
                    <Languages className="h-5 w-5" />
                    {t('language_selector')} {languageFlags[i18n.language] || '🇺🇸'} 
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`${theme === 'dark' ? 'bg-black/90 border-purple-800/20' : 'bg-white/90 border-blue-200'}`}>
                  <DropdownMenuItem onClick={() => changeLanguage('en')}>
                    <span className="mr-2">🇺🇸</span> English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ru')}>
                    <span className="mr-2">🇷🇺</span> Русский
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('de')}>
                    <span className="mr-2">🇩🇪</span> Deutsch
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('fr')}>
                    <span className="mr-2">🇫🇷</span> Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('es')}>
                    <span className="mr-2">🇪🇸</span> Español
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('zh')}>
                    <span className="mr-2">🇨🇳</span> 中文
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ja')}>
                    <span className="mr-2">🇯🇵</span> 日本語
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ko')}>
                    <span className="mr-2">🇰🇷</span> 한국어
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage('ar')}>
                    <span className="mr-2">🇸🇦</span> العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {isLoggedIn ? (
                <>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="justify-start gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link to="/profile">
                      <User className="h-5 w-5" />
                      {t('profile')}
                    </Link>
                  </Button>
                  <Button 
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    variant="ghost" 
                    className="justify-start gap-2"
                  >
                    <LogIn className="h-5 w-5" />
                    {t('logout')}
                  </Button>
                </>
              ) : (
                <Button 
                  asChild 
                  variant="outline" 
                  className={`justify-start gap-2 ${
                    theme === 'dark' 
                      ? 'bg-black/50 border-purple-800/50 hover:bg-black/80' 
                      : 'bg-white/50 border-blue-300 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/login">
                    <LogIn className="h-5 w-5" />
                    {t('login')}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}