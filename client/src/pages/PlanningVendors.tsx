import { Navbar } from "@/components/layout/Navbar";
import { useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Ruler, Box, Layout, Eye, Heart } from "lucide-react";
import { useState } from "react";
import { InquiryForm } from "@/components/home/InquiryForm";
import designImage1 from "@assets/generated_images/2d_floor_plan_architectural_design.png";
import designImage2 from "@assets/generated_images/3d_rendered_interior_design_visualization.png";
import designImage3 from "@assets/generated_images/professional_floor_planning_layout.png";

const vendorData: Record<string, any> = {
  "2d": {
    name: "2D Planning",
    icon: Ruler,
    description: "Professional 2D architectural drawings",
    vendors: [
      {
        id: 1,
        name: "Architectural Masters",
        experience: 12,
        rating: 4.9,
        specialization: "2D Technical Drawings",
        projects: 150,
        designSamples: [
          { image: designImage1, title: "Office Layout" },
          { image: designImage2, title: "Residential Floor Plan" },
          { image: designImage3, title: "Commercial Space" },
        ],
      },
      {
        id: 2,
        name: "Precision Planners",
        experience: 8,
        rating: 4.7,
        specialization: "Structural Planning",
        projects: 95,
        designSamples: [
          { image: designImage3, title: "Apartment Complex" },
          { image: designImage1, title: "Mall Layout" },
          { image: designImage2, title: "Industrial Design" },
        ],
      },
      {
        id: 3,
        name: "Elite Design Studio",
        experience: 15,
        rating: 4.8,
        specialization: "CAD & Technical Design",
        projects: 200,
        designSamples: [
          { image: designImage2, title: "Modern Residence" },
          { image: designImage3, title: "Medical Facility" },
          { image: designImage1, title: "Hotel Layout" },
        ],
      },
    ],
  },
  "3d": {
    name: "3D Planning",
    icon: Box,
    description: "Realistic 3D visualizations",
    vendors: [
      {
        id: 4,
        name: "3D Vision Studio",
        experience: 10,
        rating: 4.9,
        specialization: "3D Rendering & Animation",
        projects: 120,
        designSamples: [
          { image: designImage2, title: "Modern Kitchen" },
          { image: designImage1, title: "Living Room Design" },
          { image: designImage3, title: "Bedroom Interior" },
        ],
      },
      {
        id: 5,
        name: "Render Pros",
        experience: 7,
        rating: 4.6,
        specialization: "Photorealistic Rendering",
        projects: 85,
        designSamples: [
          { image: designImage3, title: "Luxury Villa" },
          { image: designImage2, title: "Commercial Office" },
          { image: designImage1, title: "Retail Store" },
        ],
      },
      {
        id: 6,
        name: "Digital Design Lab",
        experience: 9,
        rating: 4.8,
        specialization: "VR & 3D Visualization",
        projects: 110,
        designSamples: [
          { image: designImage1, title: "Virtual Walkthrough" },
          { image: designImage2, title: "Exterior Rendering" },
          { image: designImage3, title: "Landscape Design" },
        ],
      },
    ],
  },
  "floor": {
    name: "Floor Planning",
    icon: Layout,
    description: "Professional floor planning services",
    vendors: [
      {
        id: 7,
        name: "Space Optimization Pro",
        experience: 11,
        rating: 4.8,
        specialization: "Space Planning & Layout",
        projects: 140,
        designSamples: [
          { image: designImage1, title: "Office Space" },
          { image: designImage3, title: "Retail Planning" },
          { image: designImage2, title: "Warehouse Layout" },
        ],
      },
      {
        id: 8,
        name: "Interior Space Designers",
        experience: 8,
        rating: 4.7,
        specialization: "Residential Floor Plans",
        projects: 100,
        designSamples: [
          { image: designImage2, title: "Duplex Layout" },
          { image: designImage1, title: "Studio Apartment" },
          { image: designImage3, title: "Penthouse Design" },
        ],
      },
      {
        id: 9,
        name: "Commercial Space Experts",
        experience: 13,
        rating: 4.9,
        specialization: "Commercial Planning",
        projects: 175,
        designSamples: [
          { image: designImage3, title: "Shopping Mall" },
          { image: designImage2, title: "Office Tower" },
          { image: designImage1, title: "Hospital Layout" },
        ],
      },
    ],
  },
};

export default function PlanningVendors() {
  const [match, params] = useRoute("/planning/:type");
  const type = params?.type as keyof typeof vendorData;
  const data = vendorData[type] || vendorData["2d"];
  const Icon = data.icon;
  const [selectedVendor, setSelectedVendor] = useState<any>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-display">{data.name}</h1>
              <p className="text-muted-foreground text-lg">{data.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="container mx-auto px-4 py-16">
        {selectedVendor ? (
          <div className="space-y-8">
            {/* Vendor Detail */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={`https://avatar.vercel.sh/${selectedVendor.name}`} />
                  <AvatarFallback>{selectedVendor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-3xl font-bold">{selectedVendor.name}</h2>
                  <div className="flex items-center gap-4 text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      {selectedVendor.rating}
                    </div>
                    <span>{selectedVendor.experience} Years Experience</span>
                    <span>{selectedVendor.projects} Projects</span>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedVendor(null)}
                data-testid="button-back-to-list"
              >
                Back to List
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sample Designs */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Sample Designs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedVendor.designSamples.map((sample: any, idx: number) => (
                    <div
                      key={idx}
                      className="group relative aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer"
                    >
                      <img
                        src={sample.image}
                        alt={sample.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button className="p-3 bg-white rounded-full text-black hover:bg-primary transition-colors" data-testid="button-view-design">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-3 bg-white rounded-full text-black hover:bg-primary transition-colors" data-testid="button-like-design">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <p className="text-white font-semibold">{sample.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div>
                <InquiryForm
                  builderName={selectedVendor.name}
                  builderServices={[selectedVendor.specialization]}
                  onSubmitSuccess={() => setShowInquiry(false)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.vendors.map((vendor: any) => (
              <Card key={vendor.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`https://avatar.vercel.sh/${vendor.name}`} />
                      <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Badge className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      {vendor.rating}
                    </Badge>
                  </div>
                  <CardTitle>{vendor.name}</CardTitle>
                  <CardDescription>{vendor.specialization}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Experience</p>
                      <p className="font-semibold">{vendor.experience} Years</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Projects</p>
                      <p className="font-semibold">{vendor.projects}+</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground mb-3">Sample Designs</p>
                    <div className="grid grid-cols-3 gap-2">
                      {vendor.designSamples.slice(0, 3).map((sample: any, idx: number) => (
                        <div
                          key={idx}
                          className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:opacity-80 transition-opacity"
                        >
                          <img
                            src={sample.image}
                            alt={sample.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setSelectedVendor(vendor)}
                    data-testid={`button-view-vendor-${vendor.id}`}
                  >
                    View Profile
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      setSelectedVendor(vendor);
                      setShowInquiry(true);
                    }}
                    data-testid={`button-inquire-vendor-${vendor.id}`}
                  >
                    Inquire
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
