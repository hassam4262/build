import { useLocation } from "wouter";
import { 
  HardHat, 
  Ruler, 
  FileCheck, 
  BrickWall, 
  Truck, 
  Users, 
  UserCog, 
  Store, 
  Banknote,
  BookOpen
} from "lucide-react";

const categories = [
  { name: "Builders", icon: HardHat, path: "/builders", color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Planning", icon: Ruler, path: "/planning", color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Approvals", icon: FileCheck, path: "/approvals", color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Materials", icon: BrickWall, path: "/materials", color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Rentals", icon: Truck, path: "/services/rentals", color: "text-red-500", bg: "bg-red-500/10" },
  { name: "Manpower", icon: Users, path: "/services/manpower", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { name: "Skilled Persons", icon: UserCog, path: "/services/skilled-persons", color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "Shops", icon: Store, path: "/services/shops", color: "text-teal-500", bg: "bg-teal-500/10" },
  { name: "Loans", icon: Banknote, path: "/services/loans", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "Guide", icon: BookOpen, path: "/guide", color: "text-cyan-500", bg: "bg-cyan-500/10" },
];

export function CategoryGrid() {
  const [, setLocation] = useLocation();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <div key={cat.name} 
            onClick={() => setLocation(cat.path)}
            className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white/50 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <div className={`w-14 h-14 rounded-full ${cat.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-7 h-7 ${cat.color}`} />
            </div>
            <span className="font-medium text-sm text-center text-foreground/80 group-hover:text-foreground transition-colors">
              {cat.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
