import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Palette } from "lucide-react";
import { Link } from "wouter";
import { BannerCarousel } from "@/components/home/BannerCarousel";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import heroBg from "@assets/generated_images/soft_abstract_gradient_glassmorphism_background.png";
import bannerImg1 from "@assets/generated_images/modern_architectural_construction_site_banner.png";
import bannerImg2 from "@assets/generated_images/blueprint_and_home_planning_banner.png";
import bannerImg3 from "@assets/generated_images/construction_materials_and_tools_banner.png";

const bannerImages = [
  {
    src: bannerImg1,
    alt: "Modern Construction",
    title: "Premium Construction Services",
    subtitle: "Find top-rated builders and contractors for your next project.",
  },
  {
    src: bannerImg2,
    alt: "Planning & Design",
    title: "Expert Planning & Architecture",
    subtitle: "Professional architects to design your dream space.",
  },
  {
    src: bannerImg3,
    alt: "Materials",
    title: "Quality Materials & Supplies",
    subtitle: "Access to premium construction materials and equipment.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />

      {/* Auto-scrolling Banners Section */}
      <section className="py-8 container mx-auto px-4">
        <BannerCarousel images={bannerImages} />
      </section>

      {/* Quick Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Find Services by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through all available services and find exactly what you need for your project.
          </p>
        </div>
        <CategoryGrid />
      </section>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Build Your Project</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Everything You Need for <span className="text-gradient">Construction</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            From planning to execution, find builders, contractors, materials, and all services required for your construction project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 w-full">
            <Link href="/builders" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base h-11 sm:h-12 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all w-full sm:w-auto">
                Browse Builders <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/explore" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 text-sm sm:text-base h-11 sm:h-12 bg-white/50 backdrop-blur-sm border-white/40 hover:bg-white/80 w-full sm:w-auto"
              >
                Explore More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Code,
              title: "Verified Professionals",
              desc: "All builders and contractors are verified and rated by real clients.",
            },
            {
              icon: Palette,
              title: "Comprehensive Services",
              desc: "Find everything from planning to execution in one platform.",
            },
            {
              icon: Sparkles,
              title: "Easy Inquiries",
              desc: "Submit inquiries to multiple services and get quick responses.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="glass-panel p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
