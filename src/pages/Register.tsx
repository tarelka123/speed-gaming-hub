
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

const Register = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (password !== confirmPassword) {
      toast({
        title: t('password_mismatch'),
        description: t('passwords_must_match'),
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate registration process
    setTimeout(() => {
      if (email && password) {
        // Store user info in localStorage (in a real app, you'd use a token)
        localStorage.setItem("user", JSON.stringify({ email }));
        
        toast({
          title: t('registration_successful'),
          description: t('welcome_to_speed'),
        });
        
        navigate("/");
      } else {
        toast({
          title: t('registration_failed'),
          description: t('please_check_information'),
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
              {t('register')}
            </CardTitle>
            <CardDescription className="text-center">
              {t('create_account')}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleRegister}>
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
                <Label htmlFor="password">{t('password')}</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/30 border-yellow-400/30 focus:border-yellow-400/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">{t('confirm_password')}</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                {isLoading ? t('registering') : t('sign_up')}
              </Button>
              <div className="mt-4 text-center text-sm">
                {t('already_have_account')}{" "}
                <Link to="/login" className="text-[#fdf924] hover:underline">
                  {t('login')}
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;