import { Navbar } from "@/components/layout/Navbar";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, AlertCircle, Download, Share2, FileText, Calendar, MapPin, User } from "lucide-react";

const approvalDetails: Record<string, any> = {
  "1": {
    id: 1,
    projectName: "Modern Residential Complex",
    approvalType: "Building Permit",
    status: "approved",
    referenceNo: "BP-2024-0001",
    appliedDate: "2024-01-15",
    approvalDate: "2024-02-20",
    expiryDate: "2025-02-20",
    location: "Manhattan, New York",
    applicant: "John Developer",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    description: "Building permit for a modern residential complex with 250 units across 15 floors.",
    documents: [
      { name: "Architectural Plans", uploaded: "2024-01-10", size: "25.5 MB" },
      { name: "Structural Design", uploaded: "2024-01-12", size: "18.3 MB" },
      { name: "Environmental Impact Report", uploaded: "2024-01-13", size: "12.8 MB" },
      { name: "Safety Compliance Certificate", uploaded: "2024-01-14", size: "3.2 MB" },
    ],
    timeline: [
      { date: "2024-01-15", status: "submitted", description: "Application submitted to municipality" },
      { date: "2024-01-20", status: "received", description: "Documents received and verified" },
      { date: "2024-02-05", status: "review", description: "Under review by authorities" },
      { date: "2024-02-15", status: "approved", description: "Approved by municipal committee" },
      { date: "2024-02-20", status: "issued", description: "Building permit officially issued" },
    ],
    conditions: [
      "Must comply with building code regulations",
      "Environmental clearance required before construction",
      "Monthly safety inspections mandatory",
      "Traffic management plan to be submitted",
    ],
  },
  "2": {
    id: 2,
    projectName: "Commercial Office Space",
    approvalType: "Environmental Clearance",
    status: "pending",
    referenceNo: "EC-2024-0002",
    appliedDate: "2024-02-10",
    approvalDate: null,
    expiryDate: null,
    location: "Brooklyn, New York",
    applicant: "Sarah Smith",
    email: "sarah@example.com",
    phone: "+1 (555) 234-5678",
    description: "Environmental clearance for commercial office development near water body.",
    documents: [
      { name: "EIA Report", uploaded: "2024-02-05", size: "45.2 MB" },
      { name: "Water Impact Assessment", uploaded: "2024-02-07", size: "28.5 MB" },
      { name: "Biodiversity Study", uploaded: "2024-02-08", size: "15.7 MB" },
    ],
    timeline: [
      { date: "2024-02-10", status: "submitted", description: "Application submitted to environmental department" },
      { date: "2024-02-15", status: "received", description: "Documents received" },
      { date: "2024-02-20", status: "review", description: "Currently under review" },
    ],
    conditions: [
      "Environmental management plan required",
      "Green building certification necessary",
      "Water conservation measures mandatory",
    ],
  },
  "3": {
    id: 3,
    projectName: "Shopping Mall Extension",
    approvalType: "Safety Certificate",
    status: "approved",
    referenceNo: "SC-2024-0003",
    appliedDate: "2024-01-20",
    approvalDate: "2024-02-15",
    expiryDate: "2025-02-15",
    location: "Queens, New York",
    applicant: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 345-6789",
    description: "Safety certificate for shopping mall extension including parking and retail areas.",
    documents: [
      { name: "Fire Safety Plan", uploaded: "2024-01-15", size: "8.9 MB" },
      { name: "Emergency Exit Report", uploaded: "2024-01-16", size: "5.3 MB" },
      { name: "Safety Inspection Report", uploaded: "2024-01-18", size: "12.1 MB" },
    ],
    timeline: [
      { date: "2024-01-20", status: "submitted", description: "Safety certificate application submitted" },
      { date: "2024-01-25", status: "received", description: "Documents received and verified" },
      { date: "2024-02-05", status: "inspection", description: "Site inspection conducted" },
      { date: "2024-02-10", status: "approved", description: "Inspection passed all safety standards" },
      { date: "2024-02-15", status: "issued", description: "Safety certificate officially issued" },
    ],
    conditions: [
      "Fire extinguishers on all floors",
      "Emergency lighting systems active",
      "Regular safety audits required",
    ],
  },
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "approved":
    case "issued":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "pending":
    case "review":
    case "inspection":
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case "rejected":
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    default:
      return <FileText className="w-5 h-5 text-blue-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
    case "issued":
      return "bg-green-500/20 text-green-700 border-green-200";
    case "pending":
    case "review":
    case "inspection":
      return "bg-yellow-500/20 text-yellow-700 border-yellow-200";
    case "rejected":
      return "bg-red-500/20 text-red-700 border-red-200";
    default:
      return "bg-blue-500/20 text-blue-700 border-blue-200";
  }
};

export default function ApprovalDetail() {
  const [match, params] = useRoute("/approval/:id");
  const id = params?.id as string;
  const approval = approvalDetails[id] || approvalDetails["1"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <Link href="/approvals">
            <a className="text-primary hover:underline text-sm font-medium mb-4 inline-block">
              ← Back to Approvals
            </a>
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold font-display mb-2">{approval.projectName}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" /> {approval.approvalType}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {approval.location}
                </span>
              </div>
            </div>
            <Badge
              className={`flex items-center gap-2 capitalize px-4 py-2 text-base ${getStatusColor(approval.status)}`}
              data-testid="badge-approval-detail-status"
            >
              {getStatusIcon(approval.status)}
              {approval.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Info Cards */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reference Number</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold font-mono">{approval.referenceNo}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Applied Date</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{approval.appliedDate}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {approval.status === "approved" || approval.status === "issued" ? "Approval Date" : "Expected Date"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{approval.approvalDate || "Pending"}</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline" data-testid="tab-timeline">Timeline</TabsTrigger>
            <TabsTrigger value="documents" data-testid="tab-documents">Documents</TabsTrigger>
            <TabsTrigger value="conditions" data-testid="tab-conditions">Conditions</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">Description</h3>
                  <p className="text-foreground">{approval.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Applicant Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Name</p>
                          <p className="font-medium">{approval.applicant}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Email</p>
                          <p className="font-medium">{approval.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Phone</p>
                          <p className="font-medium">{approval.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Important Dates</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Application Date</p>
                          <p className="font-medium">{approval.appliedDate}</p>
                        </div>
                      </div>
                      {approval.approvalDate && (
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <div>
                            <p className="text-xs text-muted-foreground">Approval Date</p>
                            <p className="font-medium">{approval.approvalDate}</p>
                          </div>
                        </div>
                      )}
                      {approval.expiryDate && (
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-4 h-4 text-yellow-500" />
                          <div>
                            <p className="text-xs text-muted-foreground">Expiry Date</p>
                            <p className="font-medium">{approval.expiryDate}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button className="gap-2" data-testid="button-download-certificate">
                <Download className="w-4 h-4" /> Download Certificate
              </Button>
              <Button variant="outline" className="gap-2" data-testid="button-share">
                <Share2 className="w-4 h-4" /> Share
              </Button>
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {approval.timeline.map((event: any, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {getStatusIcon(event.status)}
                        </div>
                        {idx < approval.timeline.length - 1 && (
                          <div className="w-1 h-12 bg-border mt-2" />
                        )}
                      </div>
                      <div className="pt-1">
                        <p className="font-semibold text-sm">{event.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submitted Documents</CardTitle>
                <CardDescription>All documents related to this approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {approval.documents.map((doc: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Uploaded: {doc.uploaded} • Size: {doc.size}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" data-testid={`button-download-${idx}`}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conditions Tab */}
          <TabsContent value="conditions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Terms & Conditions</CardTitle>
                <CardDescription>Important conditions to comply with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {approval.conditions.map((condition: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{condition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
