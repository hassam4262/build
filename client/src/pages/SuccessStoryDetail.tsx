import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShareModal } from "@/components/explore/ShareModal";
import { Share2, Bookmark, Star, MapPin, Calendar, DollarSign, User, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const storiesData: Record<number, any> = {
  1: {
    id: 1,
    name: "Sharma Family Residence",
    location: "Mumbai, Maharashtra",
    completionTime: "14 months",
    budget: "₹45 Lakhs",
    rating: 4.9,
    vendor: "Apex Constructions",
    vendorRating: 4.8,
    vendorExperience: "12 years",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "Beautiful modern villa with green spaces and smart home integration.",
    overview: `
      The Sharma Family Residence is a stunning example of modern architecture combined with traditional Vastu principles. 
      Built on a 1500 sq ft plot, this 3-bedroom villa showcases contemporary design with natural elements.
    `,
    highlights: [
      "3 Bedrooms with modern amenities",
      "Integrated smart home system",
      "Sustainable architecture with green spaces",
      "Premium flooring and finishes",
      "Open-plan living area with natural light",
      "Rooftop garden and recreation space",
    ],
    timeline: [
      { phase: "Planning & Design", duration: "2 months" },
      { phase: "Foundation Work", duration: "1.5 months" },
      { phase: "Structural Work", duration: "4 months" },
      { phase: "Finishing & Interiors", duration: "6 months" },
      { phase: "Final Inspection & Handover", duration: "0.5 months" },
    ],
    challenges: [
      "Weather delays during monsoon season",
      "Supply chain management for imported materials",
      "Integrating smart home technology with traditional design",
    ],
    solutions: [
      "Proper weatherproofing and drainage systems",
      "Local vendor partnerships for faster delivery",
      "Expert consultants for technology integration",
    ],
    testimonial: `
      "The Apex Constructions team exceeded our expectations. They understood our vision perfectly and delivered a home 
      that we absolutely love. The attention to detail and commitment to quality was exceptional." - Rajesh Sharma
    `,
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400",
    ],
  },
  2: {
    id: 2,
    name: "Patel Commercial Complex",
    location: "Bangalore, Karnataka",
    completionTime: "24 months",
    budget: "₹2 Crore",
    rating: 4.8,
    vendor: "Dream Home Builders",
    vendorRating: 4.7,
    vendorExperience: "18 years",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "State-of-the-art commercial space with sustainable design features.",
    overview: `
      The Patel Commercial Complex represents the pinnacle of modern commercial architecture in Bangalore. 
      This 50,000 sq ft complex features cutting-edge facilities and sustainable building practices.
    `,
    highlights: [
      "5 Stories with 50,000 sq ft usable space",
      "LEED certified green building features",
      "Smart energy management systems",
      "Advanced fire safety and security systems",
      "Ample parking and amenities",
      "Co-working spaces and modern offices",
    ],
    timeline: [
      { phase: "Planning & Approvals", duration: "3 months" },
      { phase: "Foundation & Structural", duration: "8 months" },
      { phase: "MEP Systems Installation", duration: "6 months" },
      { phase: "Finishing & Fit-outs", duration: "5 months" },
      { phase: "Testing & Handover", duration: "2 months" },
    ],
    challenges: [
      "LEED certification requirements",
      "Complex MEP coordination",
      "Traffic management during construction",
    ],
    solutions: [
      "LEED consultant from day one",
      "Advanced 3D coordination models",
      "Strategic scheduling and traffic planning",
    ],
    testimonial: `
      "Dream Home Builders transformed our vision into reality. The complex is not just beautiful but 
      also highly functional and sustainable. We're thrilled with the outcome." - Vikram Patel
    `,
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1479839672679-a46482f0e7c8?auto=format&fit=crop&q=80&w=400",
    ],
  },
  3: {
    id: 3,
    name: "Verma Family Apartment",
    location: "Delhi, NCR",
    completionTime: "10 months",
    budget: "₹32 Lakhs",
    rating: 4.9,
    vendor: "Elite Design Studio",
    vendorRating: 4.9,
    vendorExperience: "15 years",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    description: "Cozy apartment with premium interiors and efficient space utilization.",
    overview: `
      The Verma Family Apartment showcases how smart design and quality execution can create a premium living 
      space. This 2-bedroom, 2-bathroom apartment in Delhi's prime location is a model of efficiency and elegance.
    `,
    highlights: [
      "2 Bedrooms with attached bathrooms",
      "Premium Italian and German fixtures",
      "Modular kitchen with latest appliances",
      "False ceiling with ambient lighting",
      "Wooden flooring in bedrooms",
      "Large balcony with city views",
    ],
    timeline: [
      { phase: "Design & Approvals", duration: "1.5 months" },
      { phase: "Structural & MEP", duration: "3.5 months" },
      { phase: "Finishing Works", duration: "3 months" },
      { phase: "Interior Design & Fit-outs", duration: "2 months" },
    ],
    challenges: [
      "Space optimization in compact apartment",
      "Moisture management in high-rise building",
      "Coordinating with society regulations",
    ],
    solutions: [
      "Smart interior design solutions",
      "Advanced waterproofing systems",
      "Proactive society coordination",
    ],
    testimonial: `
      "Elite Design Studio created our dream home. Every corner has been thoughtfully designed to maximize 
      comfort and functionality. We couldn't be happier!" - Ananya Verma
    `,
    gallery: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
    ],
  },
};

export default function SuccessStoryDetail() {
  const [, setLocation] = useLocation();
  const [showShareModal, setShowShareModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const storyId = parseInt(window.location.pathname.split("/").pop() || "1");
  const story = storiesData[storyId];

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Story not found</h1>
          <Button onClick={() => setLocation("/explore")} className="mt-4">
            Back to Explore
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-b border-primary/10 py-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => setLocation("/explore")}
            className="mb-4 gap-2"
            data-testid="button-back-to-explore-story"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold font-display mb-4">{story.name}</h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {story.location}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {story.rating}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsBookmarked(!isBookmarked)}
                data-testid="button-bookmark-story-detail"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowShareModal(true)}
                data-testid="button-share-story-detail"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Featured Image */}
        <img
          src={story.image}
          alt={story.name}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        {/* Key Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Completion Time</p>
              <p className="font-bold">{story.completionTime}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Budget</p>
              <p className="font-bold">{story.budget}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <User className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Builder</p>
              <p className="font-bold text-sm">{story.vendor}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-5 h-5 mx-auto mb-2 text-yellow-400 fill-yellow-400" />
              <p className="text-sm text-muted-foreground">Rating</p>
              <p className="font-bold">{story.rating}</p>
            </CardContent>
          </Card>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{story.overview}</p>
        </section>

        {/* Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Project Highlights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {story.highlights.map((highlight: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Construction Timeline</h2>
          <div className="space-y-3">
            {story.timeline.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-32 font-semibold">{item.phase}</div>
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{
                      width: `${(parseInt(item.duration) / 24) * 100}%`,
                    }}
                  />
                </div>
                <div className="w-24 text-right text-sm text-muted-foreground">{item.duration}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Challenges Faced</h3>
              <ul className="space-y-2">
                {story.challenges.map((challenge: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Solutions Implemented</h3>
              <ul className="space-y-2">
                {story.solutions.map((solution: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-12 bg-primary/10 rounded-lg p-6 border border-primary/20">
          <h3 className="font-bold mb-3">Client Testimonial</h3>
          <p className="text-lg italic">{story.testimonial}</p>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {story.gallery.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </section>

        {/* Builder Info */}
        <section className="mb-12 bg-secondary/50 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">{story.vendor}</h3>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Overall Rating</p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{story.vendorRating}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Experience</p>
              <p className="font-bold">{story.vendorExperience}</p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <Button
          onClick={() => setLocation("/explore")}
          variant="outline"
          className="w-full"
          data-testid="button-back-from-story-detail"
        >
          Back to Explore
        </Button>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={story.name}
        url={`${window.location.origin}/story/${story.id}`}
      />
    </div>
  );
}
