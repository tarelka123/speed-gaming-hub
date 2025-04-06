
import { Layout } from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { LikeDislike } from "@/components/LikeDislike";
import { Upload, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Videos = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleUpload = () => {
    toast({
      title: t('login_required'),
      description: t('please_login_to_upload'),
    });
  };

  // Mock videos data
  const videos = [
    {
      id: 1,
      title: "Amazing FiveM Stunt Compilation",
      game: "FiveM",
      thumbnailUrl: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "10:24",
      likes: 345,
      dislikes: 15
    },
    {
      id: 2,
      title: "CS2 - Pro Player Highlights",
      game: "CS2",
      thumbnailUrl: "https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "15:37",
      likes: 531,
      dislikes: 22
    },
    {
      id: 3,
      title: "Garrys Mode Funny Moments",
      game: "Garrys Mode",
      thumbnailUrl: "https://images.unsplash.com/photo-1586182987320-4f17e16e876b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "12:05",
      likes: 287,
      dislikes: 9
    },
    {
      id: 4,
      title: "Delta Force Tactics Guide",
      game: "Delta Force",
      thumbnailUrl: "https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "18:42",
      likes: 189,
      dislikes: 7
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-[#fdf924]">{t('videos')}</h1>
          <p className="text-white/80 max-w-2xl">
            {t('videos_description')}
          </p>
          <Button 
            onClick={handleUpload}
            className="bg-[#fdf924] text-black hover:bg-[#fdf924]/80 transition-all"
          >
            <Upload className="h-4 w-4 mr-2" />
            {t('upload')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="bg-black/50 backdrop-blur-sm border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300"
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-2 text-[#fdf924]">{video.title}</h3>
                <p className="text-sm text-white/60 mb-3">{video.game}</p>
                <div className="relative">
                  <AspectRatio ratio={16 / 9} className="bg-black/50 rounded overflow-hidden">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-[#fdf924] hover:text-black w-12 h-12 transition-all">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </AspectRatio>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 pt-0">
                <span className="text-sm text-white/60">{new Date().toLocaleDateString()}</span>
                <LikeDislike 
                  id={video.id} 
                  type="video" 
                  initialLikes={video.likes} 
                  initialDislikes={video.dislikes} 
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videos;