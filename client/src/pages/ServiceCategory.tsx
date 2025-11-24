import { Navbar } from "@/components/layout/Navbar";
import { useRoute } from "wouter";
import { 
  HardHat, Ruler, FileCheck, BrickWall, Truck, Users, UserCog, Store, Banknote, MoreHorizontal,
  Star, MapPin, Phone, Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

// Mock data for different categories
const categoryData = {
  "builders": {
    title: "Builders & Contractors",
    icon: HardHat,
    description: "Find trusted builders for your residential and commercial projects.",
    items: [
      { id: 1, name: "Apex Constructions", rating: 4.8, location: "New York, NY", tags: ["Residential", "Commercial"], image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400" },
      { id: 2, name: "Dream Home Builders", rating: 4.6, location: "Brooklyn, NY", tags: ["Renovation", "Interiors"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
      { id: 3, name: "City Skyline Developers", rating: 4.9, location: "Manhattan, NY", tags: ["High-rise", "Luxury"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  "planning": {
    title: "Planning & Architecture",
    icon: Ruler,
    description: "Expert architects and planners to design your dream space.",
    items: [
      { id: 1, name: "Modern Designs Studio", rating: 4.9, location: "Remote / On-site", tags: ["3D Modeling", "Blueprints"], image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400" },
      { id: 2, name: "Urban Planners Co.", rating: 4.7, location: "Chicago, IL", tags: ["Urban Planning", "Landscape"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" },
    ]
  },
  "approvals": { title: "Approvals & Permits", icon: FileCheck, description: "Hassle-free government approvals and legal permits.", items: [] },
  "materials": { title: "Construction Materials", icon: BrickWall, description: "High-quality materials delivered to your site.", items: [] },
  "rentals": { title: "Equipment Rentals", icon: Truck, description: "Heavy machinery and tool rentals for construction.", items: [] },
  "manpower": { title: "Manpower Supply", icon: Users, description: "Skilled and unskilled labor for your workforce needs.", items: [] },
  "skilled-persons": { title: "Skilled Professionals", icon: UserCog, description: "Electricians, plumbers, carpenters, and more.", items: [] },
  "shops": { title: "Hardware & Shops", icon: Store, description: "Local hardware stores and suppliers near you.", items: [] },
  "loans": { title: "Construction Loans", icon: Banknote, description: "Financial assistance and loans for your projects.", items: [] },
  "others": { title: "Other Services", icon: MoreHorizontal, description: "Miscellaneous services for your construction needs.", items: [] },
};

export default function ServiceCategory() {
  const [match, params] = useRoute("/services/:category");
  const categoryKey = params?.category as keyof typeof categoryData;
  const data = categoryData[categoryKey] || categoryData["builders"]; // Fallback
  const Icon = data.icon;

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
              <h1 className="text-3xl font-bold font-display capitalize">{data.title}</h1>
              <p className="text-muted-foreground">{data.description}</p>
            </div>
          </div>
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="relative flex-1">
              <Input placeholder={`Search ${data.title.toLowerCase()}...`} className="pl-10 h-12 bg-background" />
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <Button size="lg" className="h-12 px-8">Search</Button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data.items && data.items.length > 0) ? (
            data.items.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-muted relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-foreground hover:bg-white">
                    <Star className="w-3 h-3 text-yellow-500 mr-1 fill-yellow-500" /> {item.rating}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {item.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full gap-2">
                    <Phone className="w-4 h-4" /> Contact Now
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 opacity-50" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No listings yet</h3>
              <p>Be the first to list in {data.title}!</p>
              <Button variant="outline" className="mt-4">Add Listing</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
