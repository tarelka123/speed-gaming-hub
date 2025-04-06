
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        // Store user info in localStorage (in a real app, you'd use a token)
        localStorage.setItem("user", JSON.stringify({ email }));
        
        toast({
          title: t('login_successful'),
          description: t('welcome_back'),
        });
        
        navigate("/");
      } else {
        toast({
          title: t('login_failed'),
          description: t('please_check_credentials'),
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center py-8">
        <Card className="w-full max-w-md bg-black/50 backdrop-blur-sm border-yellow-400/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#fdf924]">
              {t('login')}
            </CardTitle>
            <CardDescription className="text-center">
              {t('enter_credentials')}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/30 border-yellow-400/30 focus:border-yellow-400/60"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t('password')}</Label>
                  <Button 
                    variant="link" 
                    className="text-xs text-[#fdf924] px-0"
                    onClick={(e) => {
                      e.preventDefault();
                      toast({
                        title: t('reset_password'),
                        description: t('reset_password_email_sent'),
                      });
                    }}
                  >
                    {t('forgot_password')}
                  </Button>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/30 border-yellow-400/30 focus:border-yellow-400/60"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button 
                type="submit" 
                className="w-full bg-[#fdf924] text-black hover:bg-[#fdf924]/80"
                disabled={isLoading}
              >
                {isLoading ? t('logging_in') : t('login')}
              </Button>
              <div className="mt-4 text-center text-sm">
                {t('dont_have_account')}{" "}
                <Link to="/register" className="text-[#fdf924] hover:underline">
                  {t('sign_up')}
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;