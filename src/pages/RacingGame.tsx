
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { Car, Flag, Timer, Award, RefreshCw } from "lucide-react";

const RacingGame = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [opponentPositions, setOpponentPositions] = useState([0, 0]);
  const trackLength = 100;
  
  // Game loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isPlaying) {
      interval = setInterval(() => {
        // Update time
        setTime(prevTime => prevTime + 0.1);
        
        // Move player (controlled by arrow keys, handled separately)
        
        // Move opponents
        setOpponentPositions(prev => {
          return prev.map(pos => {
            const speed = 1 + Math.random() * 2;
            const newPos = pos + speed;
            return newPos > trackLength ? trackLength : newPos;
          });
        });
        
        // Check win condition
        if (playerPosition >= trackLength) {
          handleWin();
        }
        
        // Check if opponents won
        if (opponentPositions.some(pos => pos >= trackLength)) {
          handleLose();
        }
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, playerPosition]);
  
  // Handle keydown events for player movement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      
      if (e.key === "ArrowRight") {
        setPlayerPosition(prev => {
          const newPos = prev + 3;
          return newPos > trackLength ? trackLength : newPos;
        });
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying]);
  
  const startGame = () => {
    setIsPlaying(true);
    setTime(0);
    setPlayerPosition(0);
    setOpponentPositions([0, 0]);
    
    toast({
      title: t('game_started'),
      description: t('use_arrow_keys'),
    });
  };
  
  const resetGame = () => {
    setIsPlaying(false);
    setTime(0);
    setPlayerPosition(0);
    setOpponentPositions([0, 0]);
  };
  
  const handleWin = () => {
    setIsPlaying(false);
    
    // Update best time
    if (bestTime === null || time < bestTime) {
      setBestTime(time);
      toast({
        title: t('new_record'),
        description: `${time.toFixed(1)}s`,
      });
    } else {
      toast({
        title: t('you_win'),
        description: `${t('your_time')}: ${time.toFixed(1)}s`,
      });
    }
  };
  
  const handleLose = () => {
    setIsPlaying(false);
    toast({
      title: t('you_lose'),
      description: t('try_again'),
    });
  };
  
  // Calculate percentages for visual display
  const playerPositionPercent = (playerPosition / trackLength) * 100;
  const opponentPositionPercents = opponentPositions.map(pos => (pos / trackLength) * 100);
  
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">{t('racing_game')}</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('racing_description')}
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              <span className="font-mono text-lg">{time.toFixed(1)}s</span>
            </div>
            
            {bestTime !== null && (
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="font-mono text-lg">{bestTime.toFixed(1)}s</span>
              </div>
            )}
          </div>
          
          <div className="space-y-4 mb-8">
            {/* Player track */}
            <div className="bg-secondary h-12 rounded-full overflow-hidden relative">
              <div 
                className="absolute h-full bg-primary rounded-full flex items-center justify-end px-2"
                style={{ width: `${playerPositionPercent}%` }}
              >
                <Car className="text-primary-foreground h-6 w-6" />
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Flag className="h-6 w-6 text-red-500" />
              </div>
            </div>
            
            {/* Opponent tracks */}
            {opponentPositionPercents.map((percent, i) => (
              <div key={i} className="bg-secondary h-12 rounded-full overflow-hidden relative">
                <div 
                  className="absolute h-full bg-destructive/70 rounded-full flex items-center justify-end px-2"
                  style={{ width: `${percent}%` }}
                >
                  <Car className="text-destructive-foreground h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4">
            {!isPlaying ? (
              <Button 
                onClick={startGame} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t('start_game')}
              </Button>
            ) : (
              <Button 
                onClick={resetGame}
                variant="outline"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                {t('reset')}
              </Button>
            )}
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {isPlaying && <p>{t('press_right_arrow')}</p>}
          </div>
        </div>
        
        <div className="mt-8 glass-card p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{t('instructions')}</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('racing_instruction_1')}</li>
            <li>{t('racing_instruction_2')}</li>
            <li>{t('racing_instruction_3')}</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default RacingGame;