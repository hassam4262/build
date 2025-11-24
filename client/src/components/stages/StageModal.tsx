import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface StageModalProps {
  isOpen: boolean;
  onClose: () => void;
  stage?: any;
}

export function StageModal({ isOpen, onClose, stage }: StageModalProps) {
  const [checklist, setChecklist] = useState(stage?.checklist || []);

  if (!stage) return null;

  const toggleChecklistItem = (index: number) => {
    const newChecklist = [...checklist];
    newChecklist[index].completed = !newChecklist[index].completed;
    setChecklist(newChecklist);
  };

  const completedCount = checklist.filter((item: any) => item.completed).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{stage.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Duration & Difficulty */}
          <div className="flex gap-4 flex-wrap">
            <Badge variant="secondary" className="gap-2">
              ⏱ {stage.duration}
            </Badge>
            <Badge variant={stage.difficulty === "High" ? "destructive" : stage.difficulty === "Medium" ? "default" : "secondary"}>
              📊 {stage.difficulty} Complexity
            </Badge>
            <Badge variant="outline" className="gap-2">
              💰 Est. Budget: {stage.budget}
            </Badge>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold mb-2">Overview</h3>
            <p className="text-muted-foreground">{stage.description}</p>
          </div>

          {/* Images */}
          {stage.images && stage.images.length > 0 && (
            <div>
              <h3 className="font-bold mb-3">Reference Images</h3>
              <div className="grid grid-cols-2 gap-3">
                {stage.images.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${stage.name} ${idx}`}
                    className="rounded-lg w-full h-40 object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Checklist */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Checklist</h3>
              <span className="text-sm text-muted-foreground">
                {completedCount} of {checklist.length} completed ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mb-4">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="space-y-2">
              {checklist.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50">
                  <Checkbox
                    checked={item.completed}
                    onCheckedChange={() => toggleChecklistItem(idx)}
                    data-testid={`checkbox-checklist-${idx}`}
                  />
                  <span className={item.completed ? "line-through text-muted-foreground" : ""}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Vendors */}
          {stage.vendors && stage.vendors.length > 0 && (
            <div>
              <h3 className="font-bold mb-3">Recommended Vendors</h3>
              <div className="space-y-3">
                {stage.vendors.map((vendor: any, idx: number) => (
                  <Card key={idx} className="border-l-4 border-l-primary">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold">{vendor.name}</p>
                          <p className="text-sm text-muted-foreground">{vendor.service}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              ⭐ {vendor.rating}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              📍 {vendor.location}
                            </Badge>
                          </div>
                        </div>
                        <Button size="sm" data-testid={`button-contact-vendor-${idx}`}>
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Important Notes */}
          {stage.tips && stage.tips.length > 0 && (
            <div className="bg-yellow-500/10 border border-yellow-200 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Important Tips</p>
                  <ul className="space-y-1 text-sm text-yellow-800">
                    {stage.tips.map((tip: string, idx: number) => (
                      <li key={idx}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="flex-1" onClick={onClose} data-testid="button-close-stage">
            Close
          </Button>
          <Button className="flex-1" data-testid="button-consult-expert">
            Consult Expert
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
