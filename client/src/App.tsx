import { Switch, Route, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Explore from "@/pages/Explore";
import ArticleDetail from "@/pages/ArticleDetail";
import SuccessStoryDetail from "@/pages/SuccessStoryDetail";
import Inquiries from "@/pages/Inquiries";
import Profile from "@/pages/Profile";
import Auth from "@/pages/Auth";
import Builders from "@/pages/Builders";
import BuilderDetail from "@/pages/BuilderDetail";
import ServiceCategory from "@/pages/ServiceCategory";
import Planning from "@/pages/Planning";
import PlanningVendors from "@/pages/PlanningVendors";
import Approvals from "@/pages/Approvals";
import ApprovalDetail from "@/pages/ApprovalDetail";
import Materials from "@/pages/Materials";
import BuildingGuide from "@/pages/BuildingGuide";

function Router() {
  const [location, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check auth on mount and when localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      const authUser = localStorage.getItem("authUser");
      setIsAuthenticated(!!authUser);
      setIsLoading(false);
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setIsAuthenticated(false);
    setLocation("/auth");
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated && location !== "/auth") {
    setLocation("/auth");
    return null;
  }

  // Pass handleLogout to Profile or Navbar as needed
  return (
    <>
      {/* Example: Add a logout button somewhere in your UI */}
      {/* <button onClick={handleLogout}>Logout</button> */}
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/explore" component={Explore} />
        <Route path="/article/:id" component={ArticleDetail} />
        <Route path="/story/:id" component={SuccessStoryDetail} />
        <Route path="/inquiries" component={Inquiries} />
        <Route path="/profile" component={Profile} />
        <Route path="/builders" component={Builders} />
        <Route path="/builder/:id" component={BuilderDetail} />
        <Route path="/services/:category" component={ServiceCategory} />
        <Route path="/planning" component={Planning} />
        <Route path="/planning/:type" component={PlanningVendors} />
        <Route path="/approvals" component={Approvals} />
        <Route path="/approval/:id" component={ApprovalDetail} />
        <Route path="/materials" component={Materials} />
        <Route path="/guide" component={BuildingGuide} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
