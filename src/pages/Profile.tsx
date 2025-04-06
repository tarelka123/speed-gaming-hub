
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{ email: string } | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
      } catch (error) {
        console.error("Failed to parse user data", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: t('logout_successful'),
      description: t('you_have_been_logged_out'),
    });
    navigate("/");
  };

  if (!userData) {
    return null; // Or a loading indicator
  }

  return (
    <Layout>
      <div className="flex items-center justify-center py-8">
        <Card className="w-full max-w-md bg-black/50 backdrop-blur-sm border-yellow-400/20">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-[#fdf924]/20 flex items-center justify-center">
                <User className="w-10 h-10 text-[#fdf924]" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center text-[#fdf924]">
              {t('profile')}
            </CardTitle>
            <CardDescription className="text-center">
              {t('manage_your_account')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/60">{t('email')}</h3>
              <p className="text-white">{userData.email}</p>
            </div>
            
            <div className="border-t border-yellow-400/20 pt-4">
              <h3 className="text-lg font-medium mb-2">{t('account_stats')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-sm text-white/60">{t('uploads')}</p>
                  <p className="text-xl font-semibold">0</p>
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-sm text-white/60">{t('likes_received')}</p>
                  <p className="text-xl font-semibold">0</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full gap-2 border-red-400/30 text-red-400 hover:bg-red-900/20 hover:text-red-300"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              {t('logout')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;