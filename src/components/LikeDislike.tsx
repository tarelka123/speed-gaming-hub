
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

interface LikeDislikeProps {
  id: string | number;
  type: "news" | "screenshot" | "video";
  initialLikes?: number;
  initialDislikes?: number;
}

export function LikeDislike({ 
  id, 
  type, 
  initialLikes = 0, 
  initialDislikes = 0 
}: LikeDislikeProps) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState<"like" | "dislike" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLike = () => {
    if (!isLoggedIn) {
      toast({
        title: t('login_required'),
        description: t('login_to_like'),
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (userAction === "like") {
      // Unlike
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      // Add like
      setLikes(likes + 1);
      
      // If previously disliked, remove dislike
      if (userAction === "dislike") {
        setDislikes(dislikes - 1);
      }
      
      setUserAction("like");
      toast({
        title: `You liked this ${type}`,
        description: "Your feedback has been recorded",
      });
    }
  };

  const handleDislike = () => {
    if (!isLoggedIn) {
      toast({
        title: t('login_required'),
        description: t('login_to_dislike'),
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (userAction === "dislike") {
      // Remove dislike
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      // Add dislike
      setDislikes(dislikes + 1);
      
      // If previously liked, remove like
      if (userAction === "like") {
        setLikes(likes - 1);
      }
      
      setUserAction("dislike");
      toast({
        title: `You disliked this ${type}`,
        description: "Your feedback has been recorded",
      });
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="sm"
        className={`flex items-center gap-1 btn-animated ${userAction === "like" ? "text-green-500" : theme === 'dark' ? "text-white/70" : "text-black/70"}`}
        onClick={handleLike}
      >
        <ThumbsUp className="h-4 w-4" />
        <span>{likes}</span>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className={`flex items-center gap-1 btn-animated ${userAction === "dislike" ? "text-red-500" : theme === 'dark' ? "text-white/70" : "text-black/70"}`}
        onClick={handleDislike}
      >
        <ThumbsDown className="h-4 w-4" />
        <span>{dislikes}</span>
      </Button>
    </div>
  );
}