import { Navbar } from "@/components/layout/Navbar";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Award, ArrowRight } from "lucide-react";
import { useState } from "react";
import { InquiryModal } from "@/components/home/InquiryModal";

const topBuilders = [
  {
    id: 1,
    name: "Apex Constructions",
    location: "New York, NY",
    experience: 15,
    about: "Award-winning construction company specializing in residential and commercial projects.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    services: ["Residential", "Commercial", "Renovation"],
  },
  {
    id: 2,
    name: "Dream Home Builders",
    location: "Brooklyn, NY",
    experience: 12,
    about: "Expert builders delivering luxury homes and custom renovations with premium quality.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
    services: ["Residential", "Interior Design", "Renovation"],
  },
  {
    id: 3,
    name: "City Skyline Developers",
    location: "Manhattan, NY",
    experience: 20,
    about: "Leading real estate developers with expertise in high-rise and luxury residential projects.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
    services: ["Commercial", "High-rise", "Luxury Projects"],
  },
  {
    id: 4,
    name: "Urban Living Solutions",
    location: "Queens, NY",
    experience: 10,
    about: "Innovative construction solutions for modern urban spaces and sustainable buildings.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    services: ["Residential", "Sustainable Building", "Renovation"],
  },
  {
    id: 5,
    name: "Heritage Constructions",
    location: "Bronx, NY",
    experience: 18,
    about: "Preserving architectural heritage while delivering modern construction excellence.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
    services: ["Heritage Restoration", "Residential", "Commercial"],
  },
  {
    id: 6,
    name: "BuildRight Contractors",
    location: "Staten Island, NY",
    experience: 8,
    about: "Trusted local builders known for quality workmanship and on-time project delivery.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    services: ["Residential", "Repairs", "Renovation"],
  },
];

export default function Builders() {
  const [selectedBuilder, setSelectedBuilder] = useState<string | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const handleInquiry = (builderName: string) => {
    setSelectedBuilder(builderName);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Award className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">Top Builders Nearby</h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Find trusted builders for your next project
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Builders Grid */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {topBuilders.map((builder) => (
            <Card
              key={builder.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={builder.image}
                  alt={builder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-semibold">{builder.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{builder.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-2">
                  <MapPin className="w-4 h-4" />
                  {builder.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Award className="w-4 h-4" />
                  {builder.experience} Years Experience
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {builder.about}
                </p>

                <div className="flex flex-wrap gap-2">
                  {builder.services.slice(0, 2).map((service) => (
                    <Badge
                      key={service}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {service}
                    </Badge>
                  ))}
                  {builder.services.length > 2 && (
                    <Badge variant="outline" className="text-xs font-normal">
                      +{builder.services.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                <Link href={`/builder/${builder.id}`}>
                  <Button
                    variant="outline"
                    className="flex-1"
                    data-testid={`button-view-profile-${builder.id}`}
                  >
                    View Profile
                  </Button>
                </Link>
                <Button
                  className="flex-1"
                  onClick={() => handleInquiry(builder.name)}
                  data-testid={`button-inquire-${builder.id}`}
                >
                  Inquire <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        builderName={selectedBuilder || undefined}
        builderServices={
          topBuilders.find((b) => b.name === selectedBuilder)?.services || []
        }
      />
    </div>
  );
}
