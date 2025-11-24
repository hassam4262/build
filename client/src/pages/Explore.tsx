import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Share2, Bookmark, Clock, User, Eye, ThumbsUp, Play, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

const articles = [
  {
    id: 1,
    title: "Complete Guide to Foundation Work",
    description: "Learn everything about proper foundation laying, concrete mix ratios, and curing techniques.",
    author: "Rajesh Kumar",
    date: "2 days ago",
    readTime: "8 min read",
    category: "Foundation",
    views: 1250,
    likes: 245,
    image: "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Budget-Friendly Interior Design Tips",
    description: "Transform your home with beautiful interiors without breaking the bank. Expert tips on materials and layouts.",
    author: "Priya Sharma",
    date: "1 week ago",
    readTime: "6 min read",
    category: "Interior Design",
    views: 2100,
    likes: 456,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Electrical Wiring Safety Standards",
    description: "Essential safety guidelines for residential electrical installations. Know the do's and don'ts.",
    author: "Vikram Singh",
    date: "3 days ago",
    readTime: "7 min read",
    category: "Electrical",
    views: 1890,
    likes: 378,
    image: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    title: "Vastu Shastra for Modern Homes",
    description: "Integrate ancient Vastu principles with modern architecture. Balance tradition and contemporary design.",
    author: "Dr. Ananya Verma",
    date: "5 days ago",
    readTime: "10 min read",
    category: "Vastu",
    views: 3400,
    likes: 612,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    title: "Waterproofing Techniques for Indian Climate",
    description: "Combat monsoon damage with effective waterproofing methods. Product recommendations included.",
    author: "Suresh Patel",
    date: "1 week ago",
    readTime: "9 min read",
    category: "Maintenance",
    views: 2560,
    likes: 489,
    image: "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    title: "Smart Home Integration Guide",
    description: "Automate your home with smart devices. Complete integration guide with best practices.",
    author: "Arjun Nair",
    date: "4 days ago",
    readTime: "12 min read",
    category: "Smart Home",
    views: 1756,
    likes: 334,
    image: "https://images.unsplash.com/photo-1558089080-d9d09ac7c1fa?auto=format&fit=crop&q=80&w=400",
  },
];

const tutorials = [
  {
    id: 1,
    title: "How to Lay Floor Tiles Perfectly",
    duration: "14:35",
    views: 45000,
    channel: "Building Basics",
    thumbnail: "https://images.unsplash.com/photo-1582188526673-cd0b8e0b2ed9?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Plastering Techniques - Step by Step",
    duration: "18:20",
    views: 32100,
    channel: "Home Construction Pro",
    thumbnail: "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Paint Selection Guide for Interiors",
    duration: "11:45",
    views: 28900,
    channel: "Interior Experts",
    thumbnail: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    title: "Pipe Installation & Plumbing Basics",
    duration: "16:50",
    views: 38500,
    channel: "Technical Masters",
    thumbnail: "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    title: "Electrical Panel Setup & Safety",
    duration: "13:15",
    views: 41200,
    channel: "Safety First",
    thumbnail: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    title: "Modern Kitchen Design Ideas",
    duration: "21:00",
    views: 52100,
    channel: "Design Studio",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400",
  },
];

const successStories = [
  {
    id: 1,
    name: "Sharma Family Residence",
    location: "Mumbai, Maharashtra",
    completionTime: "14 months",
    budget: "₹45 Lakhs",
    rating: 4.9,
    vendor: "Apex Constructions",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
    description: "Beautiful modern villa with green spaces and smart home integration.",
  },
  {
    id: 2,
    name: "Patel Commercial Complex",
    location: "Bangalore, Karnataka",
    completionTime: "24 months",
    budget: "₹2 Crore",
    rating: 4.8,
    vendor: "Dream Home Builders",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    description: "State-of-the-art commercial space with sustainable design features.",
  },
  {
    id: 3,
    name: "Verma Family Apartment",
    location: "Delhi, NCR",
    completionTime: "10 months",
    budget: "₹32 Lakhs",
    rating: 4.9,
    vendor: "Elite Design Studio",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
    description: "Cozy apartment with premium interiors and efficient space utilization.",
  },
];

export default function Explore() {
  const [, setLocation] = useLocation();
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([]);
  const [bookmarkedStories, setBookmarkedStories] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleArticleBookmark = (id: number) => {
    setBookmarkedArticles((prev) =>
      prev.includes(id) ? prev.filter((aid) => aid !== id) : [...prev, id]
    );
    toast.success(bookmarkedArticles.includes(id) ? "Removed from bookmarks" : "Added to bookmarks");
  };

  const toggleStoryBookmark = (id: number) => {
    setBookmarkedStories((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
    toast.success(bookmarkedStories.includes(id) ? "Removed from bookmarks" : "Added to bookmarks");
  };

  const handleShare = (title: string) => {
    navigator.clipboard.writeText(`Check this out: ${title}`);
    toast.success("Link copied to clipboard!");
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTutorials = tutorials.filter(
    (tutorial) =>
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStories = successStories.filter(
    (story) =>
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-4">Explore Construction Knowledge</h1>
          <p className="text-muted-foreground text-lg">
            Learn from experts, discover success stories, and get inspired for your dream home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Global Search Bar */}
        <div className="mb-12 flex justify-center">
          <Input
            placeholder="🔍 Search articles, videos, stories, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 px-4 py-3 text-lg"
            data-testid="input-search-all"
          />
        </div>

        {/* Articles Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-display">Articles & Tips</h2>
            {filteredArticles.length > 0 && (
              <span className="text-sm text-muted-foreground">{filteredArticles.length} results</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group" data-testid={`card-article-${article.id}`}>
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3">{article.category}</Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.description}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4 text-xs text-muted-foreground border-t pt-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      {article.likes}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1" 
                      onClick={() => setLocation(`/article/${article.id}`)}
                      data-testid={`button-read-article-${article.id}`}
                    >
                      Read More
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleArticleBookmark(article.id)}
                      data-testid={`button-bookmark-article-${article.id}`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          bookmarkedArticles.includes(article.id)
                            ? "fill-primary text-primary"
                            : ""
                        }`}
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(article.title)}
                      data-testid={`button-share-article-${article.id}`}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-display">Video Tutorials</h2>
            {filteredTutorials.length > 0 && (
              <span className="text-sm text-muted-foreground">{filteredTutorials.length} results</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer" data-testid={`card-tutorial-${video.id}`}>
                {/* Thumbnail */}
                <div className="relative overflow-hidden h-48 bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" fill="white" />
                  </div>
                  <Badge variant="secondary" className="absolute bottom-3 right-3">
                    {video.duration}
                  </Badge>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{video.channel}</p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Eye className="w-3 h-3" />
                    {(video.views / 1000).toFixed(0)}K views
                  </div>

                  <Button className="w-full mt-4" data-testid={`button-watch-tutorial-${video.id}`}>
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-display">Featured Success Stories</h2>
            {filteredStories.length > 0 && (
              <span className="text-sm text-muted-foreground">{filteredStories.length} results</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group" data-testid={`card-success-story-${story.id}`}>
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">{story.rating}</span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{story.name}</h3>
                  <p className="text-sm text-primary mb-3">{story.location}</p>
                  <p className="text-sm text-muted-foreground mb-4">{story.description}</p>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Builder</span>
                      <span className="font-semibold">{story.vendor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">{story.completionTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Budget</span>
                      <span className="font-semibold">{story.budget}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setLocation(`/story/${story.id}`)}
                      data-testid={`button-view-story-${story.id}`}
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleStoryBookmark(story.id)}
                      data-testid={`button-bookmark-story-${story.id}`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          bookmarkedStories.includes(story.id)
                            ? "fill-primary text-primary"
                            : ""
                        }`}
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(story.name)}
                      data-testid={`button-share-story-${story.id}`}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
