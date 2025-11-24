import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

interface InquiryFormProps {
  builderName?: string;
  builderServices?: string[];
  onSubmitSuccess?: () => void;
}

export function InquiryForm({
  builderName,
  builderServices = [],
  onSubmitSuccess,
}: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.city || !formData.service) {
      toast.error("Please fill all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("Inquiry submitted successfully! We'll contact you soon.");
      setFormData({ name: "", phone: "", city: "", service: "" });
      setIsSubmitting(false);
      onSubmitSuccess?.();
    }, 1000);
  };

  return (
    <Card className="border-white/20 bg-card/50 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle>Send Your Inquiry</CardTitle>
        <CardDescription>
          {builderName
            ? `Connect with ${builderName} for your project needs`
            : "Fill out the form below and we'll get back to you shortly"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-medium">
              Your Name *
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="h-11"
              data-testid="input-inquiry-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
              className="h-11"
              data-testid="input-inquiry-phone"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="font-medium">
              City *
            </Label>
            <Input
              id="city"
              name="city"
              placeholder="Your city"
              value={formData.city}
              onChange={handleChange}
              className="h-11"
              data-testid="input-inquiry-city"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="font-medium">
              Select Service *
            </Label>
            <Select value={formData.service} onValueChange={handleServiceChange}>
              <SelectTrigger id="service" className="h-11" data-testid="select-inquiry-service">
                <SelectValue placeholder="Choose a service..." />
              </SelectTrigger>
              <SelectContent>
                {builderServices && builderServices.length > 0 ? (
                  builderServices.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))
                ) : (
                  <>
                    <SelectItem value="residential">Residential Construction</SelectItem>
                    <SelectItem value="commercial">Commercial Construction</SelectItem>
                    <SelectItem value="renovation">Renovation</SelectItem>
                    <SelectItem value="interior">Interior Design</SelectItem>
                    <SelectItem value="planning">Planning & Design</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full h-12 text-base"
            data-testid="button-submit-inquiry-form"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
