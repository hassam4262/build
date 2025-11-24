import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessagingModal } from "@/components/inquiries/MessagingModal";
import { Clock, MessageSquare, Filter, ChevronRight } from "lucide-react";
import { useState } from "react";

const inquiriesData = [
  {
    id: 1,
    serviceType: "Builders",
    vendorName: "Apex Constructions",
    vendorPhone: "+91-9876543210",
    message: "Inquiry about villa construction project",
    submittedDate: "2024-11-22",
    status: "Completed",
    lastUpdate: "2 days ago",
  },
  {
    id: 2,
    serviceType: "Planning",
    vendorName: "Elite Design Studio",
    vendorPhone: "+91-9765432109",
    message: "Need 3D floor plan design for 2BHK apartment",
    submittedDate: "2024-11-21",
    status: "In Progress",
    lastUpdate: "1 day ago",
  },
  {
    id: 3,
    serviceType: "Materials",
    vendorName: "BuildMart Suppliers",
    vendorPhone: "+91-9654321098",
    message: "Quote for ceramic tiles and cement",
    submittedDate: "2024-11-20",
    status: "Pending",
    lastUpdate: "3 days ago",
  },
  {
    id: 4,
    serviceType: "Electrical",
    vendorName: "Power Solutions Ltd",
    vendorPhone: "+91-9543210987",
    message: "Complete electrical installation for house",
    submittedDate: "2024-11-19",
    status: "Completed",
    lastUpdate: "4 days ago",
  },
  {
    id: 5,
    serviceType: "Plumbing",
    vendorName: "Aqua Pipes Pvt Ltd",
    vendorPhone: "+91-9432109876",
    message: "Plumbing system installation and design",
    submittedDate: "2024-11-18",
    status: "In Progress",
    lastUpdate: "5 days ago",
  },
  {
    id: 6,
    serviceType: "Approvals",
    vendorName: "Legal Consultants Pro",
    vendorPhone: "+91-9321098765",
    message: "Building plan approval and NOC assistance",
    submittedDate: "2024-11-17",
    status: "Pending",
    lastUpdate: "6 days ago",
  },
];

export default function Inquiries() {
  const [selectedFilter, setSelectedFilter] = useState<"All" | "Pending" | "In Progress" | "Completed">("All");
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const [showMessaging, setShowMessaging] = useState(false);

  const filteredInquiries = selectedFilter === "All" 
    ? inquiriesData 
    : inquiriesData.filter((inquiry) => inquiry.status === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "In Progress":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "Completed":
        return "bg-green-500/10 text-green-700 border-green-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const openMessaging = (inquiry: any) => {
    setSelectedInquiry(inquiry);
    setShowMessaging(true);
  };

  const stats = [
    { label: "Total Inquiries", value: inquiriesData.length, color: "text-blue-500" },
    { label: "Pending", value: inquiriesData.filter((i) => i.status === "Pending").length, color: "text-yellow-500" },
    { label: "In Progress", value: inquiriesData.filter((i) => i.status === "In Progress").length, color: "text-blue-600" },
    { label: "Completed", value: inquiriesData.filter((i) => i.status === "Completed").length, color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-4">My Inquiries</h1>
          <p className="text-muted-foreground text-lg">
            Track all your service inquiries and communicate with vendors directly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8">
          {["All", "Pending", "In Progress", "Completed"].map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter as any)}
              className="gap-2"
              data-testid={`button-filter-${filter.toLowerCase().replace(" ", "-")}`}
            >
              <Filter className="w-4 h-4" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Inquiries List */}
        <div className="space-y-4">
          {filteredInquiries.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground text-lg">No inquiries found</p>
              </CardContent>
            </Card>
          ) : (
            filteredInquiries.map((inquiry) => (
              <Card
                key={inquiry.id}
                className="hover:shadow-lg transition-all duration-300 overflow-hidden"
                data-testid={`card-inquiry-${inquiry.id}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-6 hover:bg-secondary/30 transition-colors">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{inquiry.vendorName}</h3>
                        <Badge variant="secondary">{inquiry.serviceType}</Badge>
                        <Badge className={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{inquiry.message}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Submitted: {inquiry.submittedDate}
                        </div>
                        <span>•</span>
                        <span>Last update: {inquiry.lastUpdate}</span>
                      </div>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2"
                        onClick={() => openMessaging(inquiry)}
                        data-testid={`button-message-${inquiry.id}`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        data-testid={`button-view-details-${inquiry.id}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Additional Info */}
        {inquiriesData.length > 0 && (
          <div className="mt-12 bg-secondary/50 rounded-lg p-6 text-center">
            <h3 className="font-bold mb-2">💡 Tip</h3>
            <p className="text-muted-foreground">
              Click "Message" to communicate directly with vendors. They typically respond within 24-48 hours.
            </p>
          </div>
        )}
      </div>

      {/* Messaging Modal */}
      {selectedInquiry && (
        <MessagingModal
          isOpen={showMessaging}
          onClose={() => setShowMessaging(false)}
          vendorName={selectedInquiry.vendorName}
          vendorPhone={selectedInquiry.vendorPhone}
        />
      )}
    </div>
  );
}
