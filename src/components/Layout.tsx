
import { useEffect, useState } from "react";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {theme === 'dark' ? (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAwQzkuMTA0NTcgMCAxMCAwLjg5NTQzIDEwIDJDMTAgMy4xMDQ1NyA5LjEwNDU3IDQgOCA0QzYuODk1NDMgNCA2IDMuMTA0NTcgNiAyQzYgMC44OTU0MyA2Ljg5NTQzIDAgOCAwWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAwQzkuMTA0NTcgMCAxMCAwLjg5NTQzIDEwIDJDMTAgMy4xMDQ1NyA5LjEwNDU3IDQgOCA0QzYuODk1NDMgNCAwIDMuMTA0NTcgNiAyQzYgMC44OTU0MyA2Ljg5NTQzIDAgOCAwWiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
          </div>
        )}
      </div>
      
      <MainNav />
      
      <main className="flex-1 container py-8">
        {mounted && (
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 z-50 rounded-full w-10 h-10 bg-primary/10 backdrop-blur-sm border-primary/20 hover:bg-primary/20"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-yellow-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-purple-700" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
        {children}
      </main>
      
      <Footer />
    </div>
  );
}