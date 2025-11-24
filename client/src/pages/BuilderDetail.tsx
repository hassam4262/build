import { Navbar } from "@/components/layout/Navbar";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Award, Phone, Mail, Globe, Image } from "lucide-react";
import { useState } from "react";
import { InquiryForm } from "@/components/home/InquiryForm";

const builderData: Record<string, any> = {
  "1": {
    name: "Apex Constructions",
    location: "New York, NY",
    experience: 15,
    rating: 4.8,
    about: "Award-winning construction company specializing in residential and commercial projects with over 15 years of industry experience.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    services: ["Residential Construction", "Commercial Construction", "Renovation", "Interior Design"],
    phone: "+1 (555) 123-4567",
    email: "info@apexconstructions.com",
    website: "www.apexconstructions.com",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1558002038-109177381793?auto=format&fit=crop&q=80&w=600",
    ],
  },
  "2": {
    name: "Dream Home Builders",
    location: "Brooklyn, NY",
    experience: 12,
    rating: 4.6,
    about: "Expert builders delivering luxury homes and custom renovations with premium quality materials and skilled workforce.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    services: ["Residential Construction", "Luxury Homes", "Interior Design", "Renovation"],
    phone: "+1 (555) 234-5678",
    email: "contact@dreamhomebuilders.com",
    website: "www.dreamhomebuilders.com",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    ],
  },
};

export default function BuilderDetail() {
  const [match, params] = useRoute("/builder/:id");
  const builderId = params?.id;
  const builder = builderId ? builderData[builderId] : builderData["1"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Image */}
      <div className="relative h-80 w-full overflow-hidden bg-muted">
        <img
          src={builder.image}
          alt={builder.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Builder Info Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-10 mb-12">
        <Card className="bg-card/95 backdrop-blur-sm border-white/20 shadow-lg">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <h1 className="text-4xl font-bold font-display mb-3">
                  {builder.name}
                </h1>

                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {builder.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {builder.experience} Years Experience
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    {builder.rating} Rating
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                  {builder.about}
                </p>

                <div className="flex flex-wrap gap-2">
                  {builder.services.map((service: string) => (
                    <Badge key={service} variant="secondary">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-48 gap-2"
                  data-testid="button-call"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="about" data-testid="tab-about">
              About
            </TabsTrigger>
            <TabsTrigger value="gallery" data-testid="tab-gallery">
              Gallery
            </TabsTrigger>
            <TabsTrigger value="contact" data-testid="tab-contact">
              Contact
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {builder.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {builder.about}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Our Services</h3>
                    <ul className="space-y-2">
                      {builder.services.map((service: string) => (
                        <li key={service} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Why Choose Us</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Professional & Experienced Team
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Quality Materials & Craftsmanship
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        On-time Project Delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Competitive Pricing
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {builder.gallery.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Image className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Direct Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase">Phone</p>
                        <p className="font-semibold">{builder.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase">Email</p>
                        <p className="font-semibold text-sm break-all">{builder.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase">Website</p>
                        <p className="font-semibold text-sm">{builder.website}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-2">
                <InquiryForm
                  builderName={builder.name}
                  builderServices={builder.services}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
}
