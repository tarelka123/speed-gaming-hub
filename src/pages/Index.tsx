
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, StarIcon, GamepadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check local storage for login status
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const featuredGames = [
    { name: 'FiveM', players: 1342 },
    { name: 'CS2', players: 986 },
    { name: 'Rainbow Six Siege', players: 754 },
    { name: 'Fortnite', players: 2187 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 space-y-6 text-center">
        <div className="relative inline-block animate-floating">
          <img 
            src="/lovable-uploads/ac00610e-dcd8-433a-8ee6-82c44ec74f83.png" 
            alt="SPEED" 
            className="h-28 md:h-32 mx-auto animate-glow"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className={`${theme === 'dark' ? 'text-primary' : 'text-blue-600'}`}>
            SPEED
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-[700px] mx-auto text-muted-foreground">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button 
            asChild 
            className="gap-2 btn-animated"
          >
            <Link to="/games">
              {t('explore_games')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="btn-animated">
            <Link to="/register">
              {t('join_community')}
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t('featured_games')}</h2>
          <Button asChild variant="link" className="link-underline">
            <Link to="/games" className="gap-1 items-center flex">
              {t('view_all')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredGames.map((game, i) => (
            <Card key={i} className="glass-card hover:translate-y-[-5px] transition-transform duration-300">
              <div className="aspect-video flex items-center justify-center p-4">
                <div className="flex items-center gap-2">
                  <GamepadIcon className={`h-6 w-6 ${theme === 'dark' ? 'text-primary' : 'text-blue-600'}`} />
                  <span className="text-xl font-bold">{game.name}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{t('active_players')}: {game.players}</span>
                  <Button variant="ghost" size="sm" className={`btn-animated ${theme === 'dark' ? 'text-primary' : 'text-blue-600'}`}>
                    {t('join')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t('latest_news')}</h2>
          <Button asChild variant="link" className="link-underline">
            <Link to="/news" className="gap-1 items-center flex">
              {t('view_all')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="glass-card hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold hover:text-primary transition-colors link-underline">
                      {t('news_title_placeholder')} {item}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{t('news_date_placeholder')}</p>
                    <p className="mt-2">{t('news_excerpt_placeholder')}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-green-500 transition-colors btn-animated">
                      <StarIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Racing Game Promo */}
      <section className="py-12">
        <Card className="glass-card overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{t('try_our_racing_game')}</h2>
              <p className="mb-6 text-muted-foreground">
                {t('racing_game_promo')}
              </p>
              <Button asChild className="w-fit btn-animated">
                <Link to="/racing-game">
                  {t('play_now')}
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-primary/40 to-primary/10 h-64 md:h-auto flex items-center justify-center">
              <div className="text-6xl text-primary animate-floating">
                🏎️
              </div>
            </div>
          </div>
        </Card>
      </section>
    </Layout>
  );
};

export default Index;