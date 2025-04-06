
import { Layout } from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/ThemeProvider";
import { GamepadIcon, UsersIcon } from "lucide-react";

const Games = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { theme } = useTheme();

  const games = [
    { id: 1, name: "FiveM [Mega Games]", players: 1500 },
    { id: 2, name: "CS2", players: 2300 },
    { id: 3, name: "Delta Force", players: 800 },
    { id: 4, name: "Rainbow Six Siege", players: 1200 },
    { id: 5, name: "RDR Online", players: 950 },
    { id: 6, name: "Roblox", players: 3200 },
    { id: 7, name: "Fortnite", players: 2800 },
    { id: 8, name: "Garrys Mode", players: 1100 },
  ];

  const handleJoinGame = (game: string) => {
    toast({
      title: `${t('joining')} ${game}`,
      description: `${t('preparing_game_server')}...`,
    });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold">{t('games')}</h1>
          <p className="text-muted-foreground max-w-2xl">
            {t('games_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {games.map((game) => (
            <Card 
              key={game.id}
              className="glass-card hover:translate-y-[-5px] transition-all duration-300"
            >
              <div 
                className="aspect-video flex items-center justify-center p-4"
              >
                <div className="flex items-center gap-2">
                  <GamepadIcon className={`h-6 w-6 ${theme === 'dark' ? 'text-primary' : 'text-blue-600'}`} />
                  <span className="text-xl font-bold">{game.name}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {game.players}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={theme === 'dark' ? 'text-primary hover:bg-primary/10' : 'text-blue-600 hover:bg-blue-600/10'}
                    onClick={() => handleJoinGame(game.name)}
                  >
                    {t('join')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Games;