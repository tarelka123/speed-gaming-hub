
import { Layout } from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { LikeDislike } from "@/components/LikeDislike";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Screenshots = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleUpload = () => {
    toast({
      title: t('login_required'),
      description: t('please_login_to_upload'),
    });
  };

  // Mock screenshots data
  const screenshots = [
    {
      id: 1,
      title: "Epic CS2 Headshot",
      game: "CS2",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      likes: 124,
      dislikes: 5
    },
    {
      id: 2,
      title: "Beautiful RDR Online Sunset",
      game: "RDR Online",
      imageUrl: "https://images.unsplash.com/photo-1518245851294-4e78d5cb3ebc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      likes: 89,
      dislikes: 2
    },
    {
      id: 3,
      title: "Rainbow Six Siege Ace",
      game: "Rainbow Six Siege",
      imageUrl: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      likes: 152,
      dislikes: 7
    },
    {
      id: 4,
      title: "Fortnite Victory Royale",
      game: "Fortnite",
      imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      likes: 201,
      dislikes: 12
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-[#fdf924]">{t('screenshots')}</h1>
          <p className="text-white/80 max-w-2xl">
            {t('screenshots_description')}
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
          {screenshots.map((screenshot) => (
            <Card 
              key={screenshot.id}
              className="bg-black/50 backdrop-blur-sm border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300"
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-2 text-[#fdf924]">{screenshot.title}</h3>
                <p className="text-sm text-white/60 mb-3">{screenshot.game}</p>
                <AspectRatio ratio={16 / 9} className="bg-black/50 rounded overflow-hidden">
                  <img 
                    src={screenshot.imageUrl} 
                    alt={screenshot.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                </AspectRatio>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 pt-0">
                <span className="text-sm text-white/60">{new Date().toLocaleDateString()}</span>
                <LikeDislike 
                  id={screenshot.id} 
                  type="screenshot" 
                  initialLikes={screenshot.likes} 
                  initialDislikes={screenshot.dislikes} 
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Screenshots;