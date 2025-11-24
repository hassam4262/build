import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind", "Node.js"],
    description: "A comprehensive dashboard for managing online stores with real-time analytics."
  },
  {
    id: 2,
    title: "AI Content Generator",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["OpenAI", "Next.js", "TypeScript"],
    description: "Generate blog posts, social media captions, and more using advanced AI models."
  },
  {
    id: 3,
    title: "Crypto Portfolio Tracker",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=800",
    tags: ["Vue", "D3.js", "Firebase"],
    description: "Track your cryptocurrency investments in real-time with beautiful visualizations."
  },
  {
    id: 4,
    title: "Social Media Analytics",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Django", "React"],
    description: "Analyze social media performance and engagement metrics across multiple platforms."
  },
  {
    id: 5,
    title: "Smart Home Hub",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1558002038-109177381793?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "MQTT", "Node-RED"],
    description: "Control all your smart home devices from a single, intuitive mobile application."
  },
  {
    id: 6,
    title: "Task Management App",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tags: ["Svelte", "Supabase", "Tailwind"],
    description: "Boost your productivity with this simple yet powerful task management solution."
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold font-display mb-3">Build Projects</h1>
            <p className="text-muted-foreground text-lg">Showcasing innovation and creativity.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full">All</Button>
            <Button variant="ghost" className="rounded-full text-muted-foreground">Web Apps</Button>
            <Button variant="ghost" className="rounded-full text-muted-foreground">Mobile</Button>
            <Button variant="ghost" className="rounded-full text-muted-foreground">AI/ML</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-md text-foreground shadow-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-primary/5 border-primary/20 text-primary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  <Github className="w-4 h-4 mr-2" /> Code
                </Button>
                <Button size="sm" className="gap-2">
                  Live Demo <ExternalLink className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
