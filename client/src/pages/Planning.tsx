import { Navbar } from "@/components/layout/Navbar";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, Box, Layout, ArrowRight } from "lucide-react";

const planningCategories = [
  {
    id: "2d",
    name: "2D Planning",
    icon: Ruler,
    description: "Professional 2D architectural drawings and layouts",
    vendors: 8,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "3d",
    name: "3D Planning",
    icon: Box,
    description: "Realistic 3D visualizations and renderings",
    vendors: 6,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: "floor",
    name: "Floor Planning",
    icon: Layout,
    description: "Detailed floor plans and space management",
    vendors: 10,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function Planning() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Ruler className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">Planning Services</h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Professional planning and design services for your projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {planningCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/planning/${category.id}`}>
                <Card className="h-full cursor-pointer hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {category.vendors} Vendors
                      </Badge>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
