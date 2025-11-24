import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Lock, User, Phone, MapPin, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function Auth() {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("authUser", JSON.stringify({
        email: loginData.email,
        name: "User",
        phone: "9876543210",
        city: "Delhi",
      }));
      toast.success("Login successful!");
      setLoading(false);
      setLocation("/");
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerData.name || !registerData.email || !registerData.phone || !registerData.password) {
      toast.error("Please fill all fields");
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    if (registerData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("authUser", JSON.stringify({
        email: registerData.email,
        name: registerData.name,
        phone: registerData.phone,
        city: registerData.city,
      }));
      toast.success("Registration successful!");
      setLoading(false);
      setLocation("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center font-display">
            {isLogin ? "Welcome Back" : "Create Account"}
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mt-2">
            {isLogin
              ? "Login to access your construction services hub"
              : "Join us to explore construction services"}
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
            {/* Register Fields */}
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <div className="flex items-center gap-2 border rounded-lg px-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      className="border-0 focus-visible:ring-0"
                      data-testid="input-register-name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <div className="flex items-center gap-2 border rounded-lg px-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      className="border-0 focus-visible:ring-0"
                      data-testid="input-register-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <div className="flex items-center gap-2 border rounded-lg px-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Your city"
                      value={registerData.city}
                      onChange={(e) => setRegisterData({ ...registerData, city: e.target.value })}
                      className="border-0 focus-visible:ring-0"
                      data-testid="input-register-city"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="flex items-center gap-2 border rounded-lg px-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={isLogin ? loginData.email : registerData.email}
                  onChange={(e) => {
                    if (isLogin) {
                      setLoginData({ ...loginData, email: e.target.value });
                    } else {
                      setRegisterData({ ...registerData, email: e.target.value });
                    }
                  }}
                  className="border-0 focus-visible:ring-0"
                  data-testid={`input-${isLogin ? "login" : "register"}-email`}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="flex items-center gap-2 border rounded-lg px-3">
                <Lock className="w-4 h-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={isLogin ? loginData.password : registerData.password}
                  onChange={(e) => {
                    if (isLogin) {
                      setLoginData({ ...loginData, password: e.target.value });
                    } else {
                      setRegisterData({ ...registerData, password: e.target.value });
                    }
                  }}
                  className="border-0 focus-visible:ring-0"
                  data-testid={`input-${isLogin ? "login" : "register"}-password`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm Password</label>
                <div className="flex items-center gap-2 border rounded-lg px-3">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                    className="border-0 focus-visible:ring-0"
                    data-testid="input-register-confirm-password"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6"
              disabled={loading}
              data-testid={`button-${isLogin ? "login" : "register"}`}
            >
              {loading ? "Loading..." : isLogin ? "Login" : "Create Account"}
            </Button>
          </form>

          {/* Toggle Auth Mode */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-semibold hover:underline"
                data-testid="button-toggle-auth-mode"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>
          </div>

          {/* Demo Credentials */}
          {isLogin && (
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg text-sm">
              <Badge variant="secondary" className="mb-2">Demo Credentials</Badge>
              <p className="text-muted-foreground">Email: demo@example.com</p>
              <p className="text-muted-foreground">Password: demo123</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
