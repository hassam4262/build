import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StageModal } from "@/components/stages/StageModal";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const stages = [
  {
    id: 1,
    name: "Plot Finalization",
    duration: "1-2 weeks",
    difficulty: "Low",
    budget: "₹5,000-10,000",
    description: "Initial site survey, legal documentation verification, and plot registration. Ensure clear title deed and no legal disputes.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Verify land title and ownership documents", completed: false },
      { task: "Check for legal disputes or encumbrances", completed: false },
      { task: "Get site survey and measurement verified", completed: false },
      { task: "Register property in municipal records", completed: false },
    ],
    vendors: [
      { name: "Legal Consultants Pro", service: "Legal Documentation", rating: 4.8, location: "New York" },
      { name: "Land Survey Experts", service: "Site Measurement", rating: 4.6, location: "Brooklyn" },
    ],
    tips: [
      "Get NOC (No Objection Certificate) from local authority",
      "Check municipal approved plan before construction",
      "Verify water and electricity connections availability",
    ],
  },
  {
    id: 2,
    name: "Vastu & Planning",
    duration: "2-3 weeks",
    difficulty: "Low",
    budget: "₹10,000-20,000",
    description: "Consult Vastu expert for auspicious orientation and layout. Plan the architectural blueprint according to Vastu principles.",
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Consult Vastu expert for plot orientation", completed: false },
      { task: "Plan door and window placements", completed: false },
      { task: "Decide kitchen and bedroom positioning", completed: false },
      { task: "Get Vastu-compliant blueprint approved", completed: false },
    ],
    vendors: [
      { name: "Vastu Consultants Elite", service: "Vastu Consulting", rating: 4.7, location: "Manhattan" },
    ],
    tips: [
      "Northeast is ideal for prayer room",
      "Kitchen should face Southeast",
      "Master bedroom in Southwest",
    ],
  },
  {
    id: 3,
    name: "Home Planning & Design",
    duration: "3-4 weeks",
    difficulty: "High",
    budget: "₹30,000-100,000",
    description: "Create detailed architectural drawings, 2D & 3D plans. Get approval from municipal corporation.",
    images: [
      "https://images.unsplash.com/photo-1611605437281-440f2b953464?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1531591007552-246e442550e1?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Hire architect for design", completed: false },
      { task: "Create 2D & 3D floor plans", completed: false },
      { task: "Plan structural layout", completed: false },
      { task: "Submit and get municipal approval", completed: false },
    ],
    vendors: [
      { name: "Architectural Masters", service: "Architecture & Design", rating: 4.9, location: "New York" },
      { name: "3D Vision Studio", service: "3D Visualization", rating: 4.8, location: "Brooklyn" },
    ],
    tips: [
      "Plan open spaces for ventilation",
      "Consider future expansion possibilities",
      "Check local building bylaws",
    ],
  },
  {
    id: 4,
    name: "Excavation & Foundation",
    duration: "2-4 weeks",
    difficulty: "High",
    budget: "₹1,00,000-3,00,000",
    description: "Excavate plot, remove top soil, lay foundation with proper concrete mix and curing.",
    images: [
      "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Excavate to required depth", completed: false },
      { task: "Level and compact base", completed: false },
      { task: "Pour PCC (Plain Cement Concrete)", completed: false },
      { task: "Cure foundation for 7-10 days", completed: false },
    ],
    vendors: [
      { name: "Apex Constructions", service: "Foundation Work", rating: 4.8, location: "New York" },
    ],
    tips: [
      "Ensure proper drainage system",
      "Use quality cement and sand",
      "Proper water curing is crucial",
    ],
  },
  {
    id: 5,
    name: "Pillar & Beam Work",
    duration: "3-6 weeks",
    difficulty: "High",
    budget: "₹2,00,000-5,00,000",
    description: "Construct reinforced concrete pillars and beams. Install formwork and steel reinforcement.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Install steel formwork for pillars", completed: false },
      { task: "Arrange reinforcement steel", completed: false },
      { task: "Pour concrete for pillars and beams", completed: false },
      { task: "Cure for 21 days", completed: false },
    ],
    vendors: [
      { name: "Dream Home Builders", service: "Structural Work", rating: 4.7, location: "Brooklyn" },
    ],
    tips: [
      "Use ISI certified steel only",
      "Proper concrete slump essential",
      "Check level and plumb accuracy",
    ],
  },
  {
    id: 6,
    name: "Slab & Roof Work",
    duration: "4-8 weeks",
    difficulty: "High",
    budget: "₹2,50,000-6,00,000",
    description: "Construct floor slabs and roof. Install formwork, reinforcement, and pour concrete.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Install wooden formwork for slabs", completed: false },
      { task: "Lay reinforcement mesh", completed: false },
      { task: "Pour concrete with proper vibration", completed: false },
      { task: "Remove formwork after 14 days", completed: false },
    ],
    vendors: [
      { name: "City Skyline Developers", service: "Slab Construction", rating: 4.9, location: "Manhattan" },
    ],
    tips: [
      "Proper propping and shoring essential",
      "Uniform concrete thickness",
      "Adequate curing time required",
    ],
  },
  {
    id: 7,
    name: "Wall Work",
    duration: "2-4 weeks",
    difficulty: "Medium",
    budget: "₹50,000-1,50,000",
    description: "Construct external and internal walls using bricks or blocks with cement mortar.",
    images: [
      "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Source quality bricks/blocks", completed: false },
      { task: "Prepare mortar mix", completed: false },
      { task: "Lay walls with proper bonding", completed: false },
      { task: "Check plumb and level", completed: false },
    ],
    vendors: [
      { name: "BuildRight Contractors", service: "Masonry Work", rating: 4.6, location: "Staten Island" },
    ],
    tips: [
      "Use 1:6 cement to sand ratio",
      "Proper brick bonding pattern",
      "Water bricks before laying",
    ],
  },
  {
    id: 8,
    name: "Plastering",
    duration: "2-3 weeks",
    difficulty: "Medium",
    budget: "₹30,000-80,000",
    description: "Apply cement plaster on walls for finishing. Usually done in 2-3 coats.",
    images: [
      "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Prepare surface by dampening walls", completed: false },
      { task: "Apply base coat (12mm)", completed: false },
      { task: "Apply finish coat (6mm)", completed: false },
      { task: "Cure properly for 7 days", completed: false },
    ],
    vendors: [
      { name: "Precision Planners", service: "Finishing Work", rating: 4.7, location: "Brooklyn" },
    ],
    tips: [
      "Use waterproof plaster for external walls",
      "Proper curing increases durability",
      "Check surface smoothness",
    ],
  },
  {
    id: 9,
    name: "Electrical Work",
    duration: "2-3 weeks",
    difficulty: "High",
    budget: "₹1,00,000-2,00,000",
    description: "Install electrical wiring, switches, and panels. Get it inspected and approved.",
    images: [
      "https://images.unsplash.com/photo-1621905167918-48416bd8575a?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Install main electrical panel", completed: false },
      { task: "Run wiring through conduits", completed: false },
      { task: "Install switches and outlets", completed: false },
      { task: "Get electrical inspection certificate", completed: false },
    ],
    vendors: [
      { name: "Elite Design Studio", service: "Electrical Installation", rating: 4.8, location: "Manhattan" },
    ],
    tips: [
      "Use ISI marked wires and fittings",
      "Proper earthing is essential",
      "Plan load distribution properly",
    ],
  },
  {
    id: 10,
    name: "Plumbing Work",
    duration: "2-3 weeks",
    difficulty: "Medium",
    budget: "₹80,000-1,50,000",
    description: "Install water supply and drainage pipes, fixtures, and septic tank.",
    images: [
      "https://images.unsplash.com/photo-1585518419759-8cda8b41da73?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Lay water supply pipes", completed: false },
      { task: "Install sanitary fittings", completed: false },
      { task: "Set up drainage system", completed: false },
      { task: "Pressure test all pipes", completed: false },
    ],
    vendors: [
      { name: "Space Optimization Pro", service: "Plumbing Installation", rating: 4.7, location: "New York" },
    ],
    tips: [
      "Use ISI marked PVC/CPVC pipes",
      "Proper slope for drainage",
      "Regular maintenance access points",
    ],
  },
  {
    id: 11,
    name: "Flooring & Tiles",
    duration: "3-4 weeks",
    difficulty: "Medium",
    budget: "₹1,50,000-3,00,000",
    description: "Install tiles or other flooring materials on all floors and wet areas.",
    images: [
      "https://images.unsplash.com/photo-1582188526673-cd0b8e0b2ed9?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1578984389312-ba6e7d30151d?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Apply waterproofing on wet areas", completed: false },
      { task: "Lay tile base and mortar", completed: false },
      { task: "Fix tiles with proper spacing", completed: false },
      { task: "Do grouting and cleaning", completed: false },
    ],
    vendors: [
      { name: "Interior Space Designers", service: "Flooring & Tiling", rating: 4.6, location: "Queens" },
    ],
    tips: [
      "Use quality adhesive and grout",
      "Proper tile alignment essential",
      "Waterproofing critical for wet areas",
    ],
  },
  {
    id: 12,
    name: "Painting",
    duration: "2-3 weeks",
    difficulty: "Low",
    budget: "₹50,000-1,00,000",
    description: "Paint all walls and ceilings with primer and finishing coats.",
    images: [
      "https://images.unsplash.com/photo-1582188526673-cd0b8e0b2ed9?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Prepare walls by sanding and filling", completed: false },
      { task: "Apply primer coat", completed: false },
      { task: "Apply finish coats (2 coats minimum)", completed: false },
      { task: "Touch up and final inspection", completed: false },
    ],
    vendors: [
      { name: "Commercial Space Experts", service: "Painting Services", rating: 4.7, location: "Brooklyn" },
    ],
    tips: [
      "Use weather-resistant paints",
      "Proper surface preparation essential",
      "Apply paint in dry weather",
    ],
  },
  {
    id: 13,
    name: "Interior Decoration",
    duration: "3-5 weeks",
    difficulty: "Medium",
    budget: "₹2,00,000-5,00,000",
    description: "Install doors, windows, cabinets, and decorative elements. Final touches to complete the home.",
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Install doors and frames", completed: false },
      { task: "Fix windows and grills", completed: false },
      { task: "Install kitchen cabinets", completed: false },
      { task: "Place decorative elements", completed: false },
    ],
    vendors: [
      { name: "3D Vision Studio", service: "Interior Design", rating: 4.9, location: "New York" },
    ],
    tips: [
      "Coordinate with designer for aesthetics",
      "Use quality materials for longevity",
      "Plan storage efficiently",
    ],
  },
  {
    id: 14,
    name: "Home Maintenance & Handover",
    duration: "1-2 weeks",
    difficulty: "Low",
    budget: "₹10,000-30,000",
    description: "Final inspection, repairs, cleaning, and handover. Register property and obtain occupancy certificate.",
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=400",
    ],
    checklist: [
      { task: "Conduct final structural inspection", completed: false },
      { task: "Test all utilities and systems", completed: false },
      { task: "Deep cleaning of entire house", completed: false },
      { task: "Get occupancy certificate", completed: false },
    ],
    vendors: [
      { name: "Architectural Masters", service: "Project Management", rating: 4.8, location: "Manhattan" },
    ],
    tips: [
      "Obtain occupancy certificate from municipality",
      "Get insurance policy before occupancy",
      "Maintain maintenance records",
    ],
  },
];

export default function BuildingGuide() {
  const [selectedStage, setSelectedStage] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageClick = (stage: any) => {
    setSelectedStage(stage);
    setShowModal(true);
  };

  const toggleStageComplete = (stageId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedStages((prev) =>
      prev.includes(stageId) ? prev.filter((id) => id !== stageId) : [...prev, stageId]
    );
  };

  const overallProgress = Math.round((completedStages.length / stages.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-4">Building Construction Guide</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Step-by-step journey through your home construction process
          </p>

          {/* Overall Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Overall Progress</span>
              <span className="text-sm font-bold">{completedStages.length} of {stages.length} stages completed</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">{overallProgress}% Complete</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Timeline */}
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const isCompleted = completedStages.includes(stage.id);
            return (
              <Card
                key={stage.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
                onClick={() => handleStageClick(stage)}
                data-testid={`card-stage-${stage.id}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-6">
                    {/* Number & Completion */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={(e) => toggleStageComplete(stage.id, e)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-primary/10 text-primary border-2 border-primary"
                        }`}
                        data-testid={`button-complete-stage-${stage.id}`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : index + 1}
                      </button>
                    </div>

                    {/* Stage Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-lg ${isCompleted ? "line-through text-muted-foreground" : ""}`}>
                        {stage.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{stage.description}</p>

                      <div className="flex gap-2 flex-wrap mt-3">
                        <Badge variant="secondary" className="text-xs">
                          ⏱ {stage.duration}
                        </Badge>
                        <Badge variant={stage.difficulty === "High" ? "destructive" : "default"} className="text-xs">
                          {stage.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          💰 {stage.budget}
                        </Badge>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                      →
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <StageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        stage={selectedStage}
      />
    </div>
  );
}
