import { Navbar } from "@/components/layout/Navbar";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCheck, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { InquiryForm } from "@/components/home/InquiryForm";

const userApprovals = [
  {
    id: 1,
    projectName: "Modern Residential Complex",
    approvalType: "Building Permit",
    status: "approved",
    appliedDate: "2024-01-15",
    approvalDate: "2024-02-20",
    referenceNo: "BP-2024-0001",
  },
  {
    id: 2,
    projectName: "Commercial Office Space",
    approvalType: "Environmental Clearance",
    status: "pending",
    appliedDate: "2024-02-10",
    approvalDate: null,
    referenceNo: "EC-2024-0002",
  },
  {
    id: 3,
    projectName: "Shopping Mall Extension",
    approvalType: "Safety Certificate",
    status: "approved",
    appliedDate: "2024-01-20",
    approvalDate: "2024-02-15",
    referenceNo: "SC-2024-0003",
  },
];

const vendorData = [
  {
    id: 1,
    name: "Government Approvals Consultants",
    description: "Expert consultants specializing in government approvals and permits",
    experience: 15,
    projects: ["Metro Station", "Hospital Complex", "Shopping Mall", "Residential Tower"],
    services: ["Building Permit", "Environmental Clearance", "Fire Safety", "Occupancy Certificate"],
  },
  {
    id: 2,
    name: "Legal & Compliance Solutions",
    description: "Comprehensive legal and compliance services for construction projects",
    experience: 12,
    projects: ["Commercial Complex", "Industrial Park", "Residential Colony", "Educational Institute"],
    services: ["Legal Documentation", "Compliance Review", "License Processing", "Land Clearance"],
  },
  {
    id: 3,
    name: "FastTrack Approvals Pro",
    description: "Fast-tracked approval services with guaranteed timelines",
    experience: 10,
    projects: ["Office Tower", "Hotel Complex", "Retail Center", "Warehouse Facility"],
    services: ["Expedited Processing", "Municipal Approvals", "Environmental Permits", "Safety Certificates"],
  },
  {
    id: 4,
    name: "Municipal Liaison Services",
    description: "Professional liaison with municipal and government authorities",
    experience: 18,
    projects: ["City Center Project", "Residential Township", "Commercial District", "Infrastructure Project"],
    services: ["Municipal Coordination", "Tax Clearance", "Deed Registration", "Zoning Approval"],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-500/20 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-500/20 text-yellow-700 border-yellow-200";
    case "rejected":
      return "bg-red-500/20 text-red-700 border-red-200";
    default:
      return "bg-gray-500/20 text-gray-700 border-gray-200";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "approved":
      return <CheckCircle className="w-4 h-4" />;
    case "pending":
      return <Clock className="w-4 h-4" />;
    case "rejected":
      return <AlertCircle className="w-4 h-4" />;
    default:
      return <FileCheck className="w-4 h-4" />;
  }
};

export default function Approvals() {
  const [selectedVendor, setSelectedVendor] = useState<any>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <FileCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-display">Approvals & Permits</h1>
              <p className="text-muted-foreground text-lg">
                Manage your project approvals and find expert consultants
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="my-approvals" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="my-approvals" data-testid="tab-my-approvals">
              My Approvals
            </TabsTrigger>
            <TabsTrigger value="vendors" data-testid="tab-vendors">
              Vendors & Consultants
            </TabsTrigger>
          </TabsList>

          {/* My Approvals Tab */}
          <TabsContent value="my-approvals" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Active Approvals</h2>
              <Button data-testid="button-new-approval">
                Apply for New Approval
              </Button>
            </div>

            <div className="grid gap-4">
              {userApprovals.map((approval) => (
                <Card key={approval.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{approval.projectName}</h3>
                          <Badge
                            className={`flex items-center gap-1 capitalize ${getStatusColor(approval.status)}`}
                            data-testid={`badge-approval-${approval.status}`}
                          >
                            {getStatusIcon(approval.status)}
                            {approval.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Type: <span className="font-medium">{approval.approvalType}</span> • Ref: {approval.referenceNo}
                        </p>
                        <div className="flex gap-6 text-sm">
                          <div>
                            <p className="text-muted-foreground">Applied Date</p>
                            <p className="font-medium">{approval.appliedDate}</p>
                          </div>
                          {approval.approvalDate && (
                            <div>
                              <p className="text-muted-foreground">Approval Date</p>
                              <p className="font-medium">{approval.approvalDate}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <Link href={`/approval/${approval.id}`}>
                        <Button variant="outline" data-testid={`button-view-approval-${approval.id}`}>
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Vendors Tab */}
          <TabsContent value="vendors" className="space-y-8">
            {selectedVendor ? (
              <div className="space-y-8">
                {/* Vendor Detail View */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={`https://avatar.vercel.sh/${selectedVendor.name}`} />
                      <AvatarFallback>{selectedVendor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-3xl font-bold">{selectedVendor.name}</h2>
                      <p className="text-muted-foreground mt-1">{selectedVendor.description}</p>
                      <p className="text-sm font-semibold text-primary mt-2">
                        {selectedVendor.experience} Years Experience
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedVendor(null)}
                    data-testid="button-back-vendors"
                  >
                    Back to List
                  </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Services Offered</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {selectedVendor.services.map((service: string) => (
                            <Badge key={service} variant="secondary">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Projects Completed</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-3">
                          {selectedVendor.projects.map((project: string) => (
                            <div key={project} className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                              <p className="font-medium">{project}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Inquiry Form */}
                  <div>
                    <InquiryForm
                      builderName={selectedVendor.name}
                      builderServices={selectedVendor.services}
                      onSubmitSuccess={() => setSelectedVendor(null)}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {vendorData.map((vendor) => (
                  <Card key={vendor.id} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={`https://avatar.vercel.sh/${vendor.name}`} />
                          <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{vendor.name}</CardTitle>
                          <p className="text-xs font-semibold text-primary">
                            {vendor.experience} Years Experience
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {vendor.description}
                      </p>

                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">SERVICES</p>
                        <div className="flex flex-wrap gap-2">
                          {vendor.services.slice(0, 2).map((service) => (
                            <Badge key={service} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                          {vendor.services.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{vendor.services.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">RECENT PROJECTS</p>
                        <ul className="text-sm space-y-1">
                          {vendor.projects.slice(0, 2).map((project) => (
                            <li key={project} className="text-muted-foreground">
                              • {project}
                            </li>
                          ))}
                          {vendor.projects.length > 2 && (
                            <li className="text-primary font-medium">
                              +{vendor.projects.length - 2} more
                            </li>
                          )}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        className="w-full"
                        onClick={() => {
                          setSelectedVendor(vendor);
                          setShowInquiry(true);
                        }}
                        data-testid={`button-get-service-${vendor.id}`}
                      >
                        Get Service
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
