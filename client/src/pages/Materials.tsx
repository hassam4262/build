import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductModal } from "@/components/materials/ProductModal";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Construction",
  "Hardware",
  "Electrical",
  "Plumbing",
  "Paint & Finish",
];

const products = [
  {
    id: 1,
    name: "Sand (Fine)",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500",
    size: "Fine Sand (0-2mm)",
    price: 450,
    originalPrice: 550,
    rating: 4.5,
    reviews: 128,
    stock: 50,
    description: "High-quality fine sand for construction and finishing work. Ideal for concrete mix and plastering.",
  },
  {
    id: 2,
    name: "Sand (Medium)",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500",
    size: "Medium Sand (2-4mm)",
    price: 400,
    originalPrice: 480,
    rating: 4.6,
    reviews: 95,
    stock: 75,
    description: "Medium grade sand commonly used for concrete blocks and masonry work.",
  },
  {
    id: 3,
    name: "Clay Bricks",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=500",
    size: "Standard (225 x 112 x 75 mm)",
    price: 5,
    rating: 4.7,
    reviews: 320,
    stock: 1000,
    description: "Durable clay bricks for construction. Perfect for walls and load-bearing structures.",
    brand: "Standard Quality",
  },
  {
    id: 4,
    name: "Cement",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=500",
    size: "Cement (50kg)",
    price: 380,
    originalPrice: 420,
    rating: 4.8,
    reviews: 450,
    stock: 200,
    description: "Premium Portland cement for all construction applications.",
    brand: "Grade OPC 53",
  },
  {
    id: 5,
    name: "Iron Rod",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=500",
    size: "8mm Diameter (12m)",
    price: 450,
    originalPrice: 520,
    rating: 4.6,
    reviews: 210,
    stock: 100,
    description: "High-strength iron rods for reinforcement in concrete structures.",
    brand: "ISI Certified",
  },
  {
    id: 6,
    name: "Binding Wire",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=500",
    size: "18 SWG (1kg Coil)",
    price: 85,
    rating: 4.4,
    reviews: 78,
    stock: 300,
    description: "Steel binding wire for tying reinforcement bars. Corrosion resistant.",
  },
  {
    id: 7,
    name: "Stone (Aggregate)",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=500",
    size: "20-40mm",
    price: 350,
    rating: 4.5,
    reviews: 145,
    stock: 60,
    description: "High-quality stone aggregate for concrete and road construction.",
  },
  {
    id: 8,
    name: "Gravel",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=500",
    size: "10-20mm",
    price: 300,
    rating: 4.4,
    reviews: 110,
    stock: 80,
    description: "Natural gravel suitable for landscaping and base layer work.",
  },
  {
    id: 9,
    name: "Paint (Emulsion)",
    category: "Paint & Finish",
    image: "https://images.unsplash.com/photo-1582188526673-cd0b8e0b2ed9?auto=format&fit=crop&q=80&w=500",
    size: "20L",
    price: 1200,
    originalPrice: 1500,
    rating: 4.7,
    reviews: 340,
    stock: 40,
    description: "Premium interior emulsion paint with excellent coverage and durability.",
    brand: "Premium Exterior Grade",
  },
  {
    id: 10,
    name: "Electrical Wire",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=500",
    size: "2.5 sq mm (90m)",
    price: 580,
    originalPrice: 680,
    rating: 4.6,
    reviews: 185,
    stock: 50,
    description: "Copper electrical wiring for safe and reliable power distribution.",
  },
  {
    id: 11,
    name: "PVC Pipes",
    category: "Plumbing",
    image: "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=500",
    size: "20mm (6m)",
    price: 280,
    rating: 4.5,
    reviews: 220,
    stock: 120,
    description: "Food-grade PVC pipes for water supply and drainage systems.",
  },
  {
    id: 12,
    name: "Putty",
    category: "Paint & Finish",
    image: "https://images.unsplash.com/photo-1582188526673-cd0b8e0b2ed9?auto=format&fit=crop&q=80&w=500",
    size: "20kg",
    price: 650,
    rating: 4.5,
    reviews: 95,
    stock: 35,
    description: "Smooth wall putty for perfect wall finish before painting.",
  },
];

export default function Materials() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-2">Construction Materials</h1>
          <p className="text-muted-foreground text-lg">
            Premium quality materials for your construction projects
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(cat)}
                    data-testid={`button-category-${cat.toLowerCase()}`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 p-4 rounded-lg bg-secondary/50 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Products Found</p>
                  <p className="text-2xl font-bold">{filteredProducts.length}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Price Range</p>
                  <p className="text-sm font-semibold">₹5 - ₹1,500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main - Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {selectedCategory === "All" ? "All Products" : selectedCategory}
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" data-testid="button-sort">
                  Sort
                </Button>
                <Button variant="outline" size="sm" data-testid="button-filter">
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => handleProductClick(product)}
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                        Save{" "}
                        {Math.round(
                          ((product.originalPrice - product.price) / product.originalPrice) * 100
                        )}
                        %
                      </Badge>
                    )}
                  </div>

                  <CardContent className="pt-4">
                    <div className="mb-2">
                      <h3 className="font-bold text-base line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-muted-foreground">{product.size}</p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs line-through text-muted-foreground">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-xs flex items-center gap-1">
                        ⭐ {product.rating}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                        data-testid={`button-view-${product.id}`}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                        data-testid={`button-cart-${product.id}`}
                      >
                        <ShoppingCart className="w-3 h-3" />
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={selectedProduct}
      />
    </div>
  );
}
