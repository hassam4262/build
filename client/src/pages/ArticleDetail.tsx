import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShareModal } from "@/components/explore/ShareModal";
import { Share2, Bookmark, Clock, User, Eye, ThumbsUp, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

const articlesData: Record<number, any> = {
  1: {
    id: 1,
    title: "Complete Guide to Foundation Work",
    description: "Learn everything about proper foundation laying, concrete mix ratios, and curing techniques.",
    author: "Rajesh Kumar",
    authorBio: "Civil Engineer with 15+ years of experience in foundation work and structural engineering.",
    date: "2 days ago",
    publishDate: "November 21, 2024",
    readTime: "8 min read",
    category: "Foundation",
    views: 1250,
    likes: 245,
    image: "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=800",
    content: `
    <h2>Introduction</h2>
    <p>A strong foundation is the backbone of any structure. Whether you're building a residential home or a commercial complex, understanding the fundamentals of foundation work is crucial. In this comprehensive guide, we'll explore the various stages, materials, and best practices involved in laying a solid foundation.</p>

    <h2>Types of Foundations</h2>
    <h3>1. Shallow Foundations</h3>
    <p>Shallow foundations are typically used when the bearing capacity of soil is adequate at a shallow depth (usually less than 3 meters). These include:</p>
    <ul>
      <li><strong>Raft Foundation:</strong> Distributed over the entire floor area, ideal for areas with low bearing capacity</li>
      <li><strong>Isolated Footings:</strong> Individual footings for each column, used in buildings with moderate loads</li>
      <li><strong>Strip Footings:</strong> Continuous footings along walls, commonly used in residential construction</li>
    </ul>

    <h3>2. Deep Foundations</h3>
    <p>Deep foundations are used when soil at shallow depths is poor or when loads are very heavy. Types include:</p>
    <ul>
      <li><strong>Piles:</strong> Long, slender members driven deep into the ground</li>
      <li><strong>Caissons:</strong> Large diameter holes filled with concrete</li>
      <li><strong>Shafts:</strong> Deep excavations filled with reinforced concrete</li>
    </ul>

    <h2>Foundation Design Process</h2>
    <h3>Step 1: Site Investigation</h3>
    <p>Before any construction begins, a thorough soil investigation is essential. This includes:</p>
    <ul>
      <li>Soil boring and sampling</li>
      <li>Laboratory testing for soil properties</li>
      <li>Groundwater level determination</li>
      <li>Bearing capacity calculation</li>
    </ul>

    <h3>Step 2: Concrete Mix Design</h3>
    <p>The right concrete mix is vital for foundation durability. The standard mix ratio for foundation work is:</p>
    <ul>
      <li><strong>1:2:4</strong> (Cement : Sand : Aggregate) for Plain Cement Concrete (PCC)</li>
      <li><strong>1:1.5:3</strong> (Cement : Sand : Aggregate) for Reinforced Cement Concrete (RCC)</li>
    </ul>

    <h3>Step 3: Preparation</h3>
    <p>Proper site preparation ensures a quality foundation:</p>
    <ul>
      <li>Excavate to the designed depth</li>
      <li>Remove all organic matter and loose soil</li>
      <li>Compact the base properly</li>
      <li>Provide drainage if necessary</li>
    </ul>

    <h2>Concrete Curing</h2>
    <p>Proper curing is critical for achieving desired concrete strength. The recommended curing period is:</p>
    <ul>
      <li><strong>Minimum 7 days</strong> for ordinary Portland cement</li>
      <li><strong>14-21 days</strong> for high strength concrete</li>
      <li>Continuous water curing or wet burlap covering</li>
    </ul>

    <h2>Common Mistakes to Avoid</h2>
    <ul>
      <li>Inadequate site investigation</li>
      <li>Poor concrete mix proportioning</li>
      <li>Insufficient curing time</li>
      <li>Improper compaction</li>
      <li>Ignoring local building codes</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Foundation work requires careful planning, quality materials, and proper execution. By following these guidelines and consulting with structural engineers, you can ensure a safe and durable foundation for your construction project.</p>
    `,
  },
  2: {
    id: 2,
    title: "Budget-Friendly Interior Design Tips",
    description: "Transform your home with beautiful interiors without breaking the bank. Expert tips on materials and layouts.",
    author: "Priya Sharma",
    authorBio: "Interior Designer specializing in budget-conscious renovations and space optimization.",
    date: "1 week ago",
    publishDate: "November 15, 2024",
    readTime: "6 min read",
    category: "Interior Design",
    views: 2100,
    likes: 456,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    content: `
    <h2>Creating Beautiful Interiors on a Budget</h2>
    <p>You don't need a million-rupee budget to create a stunning interior. With smart choices and creative planning, you can transform your space affordably.</p>

    <h2>Key Tips for Budget Interior Design</h2>
    <h3>1. Plan Your Space Wisely</h3>
    <p>Before spending money, map out your interior design plan. This helps you prioritize where to invest.</p>

    <h3>2. Choose Affordable Materials</h3>
    <ul>
      <li>Ceramic tiles instead of marble</li>
      <li>Laminate flooring instead of solid wood</li>
      <li>Emulsion paints in trendy colors</li>
      <li>Budget-friendly wallpapers</li>
    </ul>

    <h3>3. DIY Wherever Possible</h3>
    <p>Paint walls yourself, arrange furniture creatively, and add personal touches without hiring expensive professionals for every task.</p>

    <h3>4. Lighting Matters</h3>
    <p>Good lighting can transform a space. Invest in quality light fixtures and use natural light creatively.</p>

    <h3>5. Reuse and Repurpose</h3>
    <p>Refurbish old furniture, use vintage pieces as decor, and repurpose items creatively.</p>

    <h2>Space Optimization Tips</h2>
    <ul>
      <li>Multifunctional furniture saves space and money</li>
      <li>Vertical storage solutions</li>
      <li>Mirrors to create illusion of space</li>
      <li>Open floor plans instead of many rooms</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Budget-friendly interior design is all about being creative and strategic. With these tips, you can create a beautiful home without overspending.</p>
    `,
  },
  3: {
    id: 3,
    title: "Electrical Wiring Safety Standards",
    description: "Essential safety guidelines for residential electrical installations. Know the do's and don'ts.",
    author: "Vikram Singh",
    authorBio: "Electrical Safety Expert with certifications in residential and commercial wiring standards.",
    date: "3 days ago",
    publishDate: "November 20, 2024",
    readTime: "7 min read",
    category: "Electrical",
    views: 1890,
    likes: 378,
    image: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=800",
    content: `
    <h2>Understanding Electrical Safety</h2>
    <p>Electrical installations in residential buildings must comply with strict safety standards. This guide outlines essential requirements.</p>

    <h2>Safety Standards to Follow</h2>
    <h3>Wiring Standards</h3>
    <ul>
      <li>Use ISI marked cables and wires</li>
      <li>Proper insulation thickness (1.5mm for normal use)</li>
      <li>Color coding: Red for phase, Black for neutral, Green for earth</li>
      <li>Minimum wire gauge based on load requirement</li>
    </ul>

    <h3>Earthing System</h3>
    <p>Proper earthing is crucial for safety:</p>
    <ul>
      <li>Earthing resistance should not exceed 5 ohms</li>
      <li>Use copper plates or electrodes</li>
      <li>Connect all metal frames to earth</li>
      <li>Regular maintenance and testing</li>
    </ul>

    <h3>Circuit Protection</h3>
    <ul>
      <li>MCBs (Miniature Circuit Breakers) for protection</li>
      <li>RCCBs (Residual Current Circuit Breakers) for fault detection</li>
      <li>Proper fuse ratings</li>
      <li>Switchgear placement at accessible locations</li>
    </ul>

    <h2>Do's and Don'ts</h2>
    <h3>Do's:</h3>
    <ul>
      <li>Hire certified electricians</li>
      <li>Get installations inspected by authorities</li>
      <li>Maintain proper documentation</li>
      <li>Update wiring for higher loads if needed</li>
    </ul>

    <h3>Don'ts:</h3>
    <ul>
      <li>Use non-certified materials</li>
      <li>Overload circuits</li>
      <li>DIY complex electrical work</li>
      <li>Ignore maintenance warnings</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Electrical safety should never be compromised. Always follow standards and hire professionals for installations.</p>
    `,
  },
  4: {
    id: 4,
    title: "Vastu Shastra for Modern Homes",
    description: "Integrate ancient Vastu principles with modern architecture. Balance tradition and contemporary design.",
    author: "Dr. Ananya Verma",
    authorBio: "Vastu Shastra expert and architect specializing in traditional principles for modern homes.",
    date: "5 days ago",
    publishDate: "November 19, 2024",
    readTime: "10 min read",
    category: "Vastu",
    views: 3400,
    likes: 612,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    content: `
    <h2>Vastu Principles in Modern Construction</h2>
    <p>Vastu Shastra is an ancient science that aligns human habitations with natural elements. Let's explore how to apply these principles to modern homes.</p>

    <h2>Key Vastu Principles</h2>
    <h3>1. Directions and Elements</h3>
    <ul>
      <li><strong>East:</strong> Associated with health and prosperity</li>
      <li><strong>North:</strong> Associated with wealth</li>
      <li><strong>South:</strong> Associated with stability</li>
      <li><strong>West:</strong> Associated with creativity</li>
    </ul>

    <h3>2. Room Placement</h3>
    <ul>
      <li><strong>Northeast:</strong> Prayer room, study area</li>
      <li><strong>Northwest:</strong> Master bedroom</li>
      <li><strong>Southwest:</strong> Storage</li>
      <li><strong>Southeast:</strong> Kitchen</li>
    </ul>

    <h3>3. Entrance Placement</h3>
    <p>The main entrance should ideally face North or East for positive energy flow.</p>

    <h2>Modern Application of Vastu</h2>
    <p>While ancient Vastu can't always be perfectly followed in modern constructions, you can:</p>
    <ul>
      <li>Maintain open spaces and avoid clutter</li>
      <li>Ensure proper ventilation and natural light</li>
      <li>Use appropriate colors according to zones</li>
      <li>Place mirrors strategically to enhance space</li>
    </ul>

    <h2>Common Vastu Recommendations</h2>
    <ul>
      <li>Keep the center of the house open</li>
      <li>Avoid toilets in the northeast</li>
      <li>Place the kitchen in the southeast</li>
      <li>Use earthy colors for stability</li>
    </ul>

    <h2>Conclusion</h2>
    <p>By thoughtfully integrating Vastu principles with modern design, you can create harmonious living spaces.</p>
    `,
  },
  5: {
    id: 5,
    title: "Waterproofing Techniques for Indian Climate",
    description: "Combat monsoon damage with effective waterproofing methods. Product recommendations included.",
    author: "Suresh Patel",
    authorBio: "Construction expert specializing in waterproofing and moisture management for tropical climates.",
    date: "1 week ago",
    publishDate: "November 14, 2024",
    readTime: "9 min read",
    category: "Maintenance",
    views: 2560,
    likes: 489,
    image: "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=800",
    content: `
    <h2>Waterproofing for Indian Climate</h2>
    <p>India's monsoon climate demands robust waterproofing strategies. Here's a comprehensive guide.</p>

    <h2>Essential Waterproofing Methods</h2>
    <h3>Roof Waterproofing</h3>
    <ul>
      <li>Membrane-based waterproofing</li>
      <li>Liquid applied coatings</li>
      <li>Proper slope for water drainage</li>
      <li>Regular maintenance and inspection</li>
    </ul>

    <h3>Basement and Wall Waterproofing</h3>
    <ul>
      <li>Chemical injection systems</li>
      <li>Cement-based coatings</li>
      <li>Bituminous membranes</li>
      <li>Interior and exterior applications</li>
    </ul>

    <h3>Bathroom Waterproofing</h3>
    <ul>
      <li>Tile adhesive and grout selection</li>
      <li>Waterproof membranes before tiling</li>
      <li>Proper slope in shower areas</li>
      <li>Sealed joints and edges</li>
    </ul>

    <h2>Recommended Products</h2>
    <ul>
      <li>Pidilite Dr. Fixit products</li>
      <li>Damp Proof Courses (DPC)</li>
      <li>Polyurethane waterproofing coatings</li>
      <li>Flexible cement-based waterproofing</li>
    </ul>

    <h2>Maintenance Tips</h2>
    <ul>
      <li>Regular inspection before monsoon</li>
      <li>Clean gutters and downpipes</li>
      <li>Seal cracks immediately</li>
      <li>Apply preventive coatings</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Proper waterproofing is an investment that protects your home from costly water damage.</p>
    `,
  },
  6: {
    id: 6,
    title: "Smart Home Integration Guide",
    description: "Automate your home with smart devices. Complete integration guide with best practices.",
    author: "Arjun Nair",
    authorBio: "Technology enthusiast and smart home automation expert with years of implementation experience.",
    date: "4 days ago",
    publishDate: "November 20, 2024",
    readTime: "12 min read",
    category: "Smart Home",
    views: 1756,
    likes: 334,
    image: "https://images.unsplash.com/photo-1558089080-d9d09ac7c1fa?auto=format&fit=crop&q=80&w=800",
    content: `
    <h2>Getting Started with Smart Home Automation</h2>
    <p>Smart home technology can make your life more convenient and your home more efficient. Here's how to get started.</p>

    <h2>Smart Home Components</h2>
    <h3>Smart Lighting</h3>
    <ul>
      <li>Smart bulbs with remote control</li>
      <li>Motion sensors for automatic lighting</li>
      <li>Scheduling and scene creation</li>
    </ul>

    <h3>Climate Control</h3>
    <ul>
      <li>Smart thermostats</li>
      <li>Automated AC/heating systems</li>
      <li>Temperature monitoring and control</li>
    </ul>

    <h3>Security Systems</h3>
    <ul>
      <li>Smart locks and cameras</li>
      <li>Motion detection sensors</li>
      <li>Real-time alerts and monitoring</li>
    </ul>

    <h2>Popular Platforms</h2>
    <ul>
      <li><strong>Amazon Alexa:</strong> Voice control and automation</li>
      <li><strong>Google Home:</strong> Integration and smart routines</li>
      <li><strong>Home Assistant:</strong> Open-source automation</li>
      <li><strong>Apple HomeKit:</strong> Privacy-focused smart home</li>
    </ul>

    <h2>Installation Considerations</h2>
    <ul>
      <li>Plan electrical points during construction</li>
      <li>Ensure strong WiFi coverage</li>
      <li>Consider power backup systems</li>
      <li>Hire certified installers for complex setups</li>
    </ul>

    <h2>Energy Savings</h2>
    <p>Smart home systems can reduce energy consumption by 10-15% through:</p>
    <ul>
      <li>Automated lighting schedules</li>
      <li>Optimized HVAC operation</li>
      <li>Real-time energy monitoring</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Smart home automation is becoming increasingly affordable and accessible. Start with basics and expand gradually.</p>
    `,
  },
};

export default function ArticleDetail() {
  const [, setLocation] = useLocation();
  const [showShareModal, setShowShareModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const articleId = parseInt(window.location.pathname.split("/").pop() || "1");
  const article = articlesData[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
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
            data-testid="button-back-to-explore"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore
          </Button>
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-bold font-display mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.publishDate}
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {article.views} views
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              {article.likes} likes
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Featured Image */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        {/* Read Time */}
        <div className="flex items-center justify-between mb-8 pb-8 border-b">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsBookmarked(!isBookmarked)}
              data-testid="button-bookmark-article-detail"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowShareModal(true)}
              data-testid="button-share-article-detail"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-sm max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Author Bio */}
        <div className="bg-secondary/50 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{article.author}</h3>
              <p className="text-muted-foreground">{article.authorBio}</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => setLocation("/explore")}
          variant="outline"
          className="w-full"
          data-testid="button-back-from-detail"
        >
          Back to Explore
        </Button>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={article.title}
        url={`${window.location.origin}/article/${article.id}`}
      />
    </div>
  );
}
