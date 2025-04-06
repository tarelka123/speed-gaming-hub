
import { Layout } from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { LikeDislike } from "@/components/LikeDislike";

const News = () => {
  const { t } = useTranslation();

  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "CS2 Major Tournament Announced",
      date: "June 15, 2024",
      content: "The biggest CS2 tournament of the year has been announced with a prize pool of $2 million.",
      likes: 245,
      dislikes: 12
    },
    {
      id: 2,
      title: "New Rainbow Six Siege Update",
      date: "June 10, 2024",
      content: "Rainbow Six Siege's latest update introduces two new operators and a completely reworked map.",
      likes: 189,
      dislikes: 23
    },
    {
      id: 3,
      title: "FiveM Adds New Custom Features",
      date: "June 5, 2024",
      content: "The popular GTA V modification FiveM has introduced new features that allow for even more customization.",
      likes: 302,
      dislikes: 8
    },
    {
      id: 4,
      title: "Fortnite Season Finale Event",
      date: "May 30, 2024",
      content: "Fortnite's current season is coming to an explosive end with a live event that will change the map forever.",
      likes: 412,
      dislikes: 57
    },
    {
      id: 5,
      title: "RDR Online Community Challenge",
      date: "May 25, 2024",
      content: "Red Dead Redemption Online players are invited to participate in a community-wide treasure hunt with unique rewards.",
      likes: 156,
      dislikes: 14
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-bold text-[#fdf924]">{t('news')}</h1>
          <p className="text-white/80 max-w-2xl">
            {t('news_description')}
          </p>
        </div>

        <div className="space-y-4">
          {newsItems.map((news) => (
            <Card 
              key={news.id}
              className="bg-black/50 backdrop-blur-sm border-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div>
                  <h3 className="text-xl font-bold hover:text-[#fdf924] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-1">{news.date}</p>
                  <p className="mt-2 text-white/80">{news.content}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <LikeDislike 
                      id={news.id} 
                      type="news" 
                      initialLikes={news.likes} 
                      initialDislikes={news.dislikes} 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;