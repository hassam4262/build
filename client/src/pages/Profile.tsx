import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { User, Phone, MapPin, Plus, Edit2, Trash2, LogOut, Heart, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";

interface Address {
  id: number;
  type: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface SavedVendor {
  id: number;
  name: string;
  category: string;
  rating: number;
}

interface SavedMaterial {
  id: number;
  name: string;
  price: string;
  quantity: string;
}

export default function Profile() {
  const [, setLocation] = useLocation();
  const [userInfo, setUserInfo] = useState({
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "9876543210",
    city: "Delhi",
  });
  const [editingUser, setEditingUser] = useState(false);
  const [tempUserInfo, setTempUserInfo] = useState(userInfo);

  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, type: "Home", street: "123 Green Street", city: "Delhi", state: "Delhi", zip: "110001" },
    { id: 2, type: "Office", street: "456 Business Plaza", city: "Gurgaon", state: "Haryana", zip: "122002" },
  ]);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({ type: "", street: "", city: "", state: "", zip: "" });

  const [language, setLanguage] = useState("English");

  const [savedVendors, setSavedVendors] = useState<SavedVendor[]>([
    { id: 1, name: "Apex Constructions", category: "Builders", rating: 4.8 },
    { id: 2, name: "Elite Design Studio", category: "Planning", rating: 4.9 },
    { id: 3, name: "Power Solutions Ltd", category: "Electrical", rating: 4.7 },
  ]);

  const [savedMaterials, setSavedMaterials] = useState<SavedMaterial[]>([
    { id: 1, name: "Cement Bag (50kg)", price: "₹380", quantity: "100 bags" },
    { id: 2, name: "Iron Rod (12mm)", price: "₹45/kg", quantity: "500 kg" },
    { id: 3, name: "Ceramic Tiles", price: "₹500/sqft", quantity: "2000 sqft" },
  ]);

  const handleSaveUserInfo = () => {
    setUserInfo(tempUserInfo);
    setEditingUser(false);
    toast.success("Profile updated successfully!");
  };

  const handleAddAddress = () => {
    if (!newAddress.type || !newAddress.street || !newAddress.city) {
      toast.error("Please fill all required fields");
      return;
    }
    setAddresses([
      ...addresses,
      { ...newAddress, id: Date.now() },
    ]);
    setNewAddress({ type: "", street: "", city: "", state: "", zip: "" });
    setShowAddAddress(false);
    toast.success("Address added successfully!");
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter((a) => a.id !== id));
    toast.success("Address deleted");
  };

  const handleRemoveVendor = (id: number) => {
    setSavedVendors(savedVendors.filter((v) => v.id !== id));
    toast.success("Vendor removed from saved list");
  };

  const handleRemoveMaterial = (id: number) => {
    setSavedMaterials(savedMaterials.filter((m) => m.id !== id));
    toast.success("Material removed from saved list");
  };

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    toast.success("Logged out successfully!");
    setLocation("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-b border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-display mb-4">My Profile</h1>
          <p className="text-muted-foreground text-lg">Manage your personal information and preferences</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Avatar & Quick Info */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-bold text-lg mb-1">{userInfo.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{userInfo.email}</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {userInfo.phone}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {userInfo.city}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Language */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Language Preference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["English", "Hindi", "Hinglish"].map((lang) => (
                  <Button
                    key={lang}
                    variant={language === lang ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => {
                      setLanguage(lang);
                      toast.success(`Language changed to ${lang}`);
                    }}
                    data-testid={`button-language-${lang.toLowerCase()}`}
                  >
                    {lang}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Logout */}
            <Button
              variant="destructive"
              className="w-full justify-center gap-2"
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Info */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                {!editingUser && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingUser(true)}
                    data-testid="button-edit-user-info"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {editingUser ? (
                  <>
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <Input
                        value={tempUserInfo.name}
                        onChange={(e) => setTempUserInfo({ ...tempUserInfo, name: e.target.value })}
                        className="mt-1"
                        data-testid="input-edit-name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        value={tempUserInfo.email}
                        onChange={(e) => setTempUserInfo({ ...tempUserInfo, email: e.target.value })}
                        className="mt-1"
                        data-testid="input-edit-email"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <Input
                        value={tempUserInfo.phone}
                        onChange={(e) => setTempUserInfo({ ...tempUserInfo, phone: e.target.value })}
                        className="mt-1"
                        data-testid="input-edit-phone"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">City</label>
                      <Input
                        value={tempUserInfo.city}
                        onChange={(e) => setTempUserInfo({ ...tempUserInfo, city: e.target.value })}
                        className="mt-1"
                        data-testid="input-edit-city"
                      />
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={handleSaveUserInfo}
                        className="flex-1"
                        data-testid="button-save-user-info"
                      >
                        Save Changes
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => {
                          setEditingUser(false);
                          setTempUserInfo(userInfo);
                        }}
                        data-testid="button-cancel-edit"
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-semibold">{userInfo.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">{userInfo.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold">{userInfo.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">City</p>
                      <p className="font-semibold">{userInfo.city}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Addresses */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Saved Addresses</CardTitle>
                {!showAddAddress && (
                  <Button
                    size="sm"
                    onClick={() => setShowAddAddress(true)}
                    data-testid="button-add-address"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Address
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {showAddAddress && (
                  <div className="p-4 bg-secondary/30 rounded-lg space-y-3 mb-4">
                    <Input
                      placeholder="Address Type (e.g., Home, Office)"
                      value={newAddress.type}
                      onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                      data-testid="input-new-address-type"
                    />
                    <Input
                      placeholder="Street Address"
                      value={newAddress.street}
                      onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                      data-testid="input-new-address-street"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="City"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                        data-testid="input-new-address-city"
                      />
                      <Input
                        placeholder="State"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                        data-testid="input-new-address-state"
                      />
                    </div>
                    <Input
                      placeholder="ZIP Code"
                      value={newAddress.zip}
                      onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                      data-testid="input-new-address-zip"
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleAddAddress} className="flex-1" data-testid="button-save-address">
                        Save Address
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowAddAddress(false)}
                        className="flex-1"
                        data-testid="button-cancel-address"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                {addresses.map((address) => (
                  <div key={address.id} className="p-4 border rounded-lg flex justify-between items-start">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {address.type}
                      </Badge>
                      <p className="font-semibold">{address.street}</p>
                      <p className="text-sm text-muted-foreground">
                        {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteAddress(address.id)}
                      data-testid={`button-delete-address-${address.id}`}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Saved Vendors */}
            <Card>
              <CardHeader>
                <CardTitle>Saved Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {savedVendors.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">No saved vendors yet</p>
                  ) : (
                    savedVendors.map((vendor) => (
                      <div key={vendor.id} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                        <div>
                          <p className="font-semibold">{vendor.name}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline">{vendor.category}</Badge>
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              {vendor.rating}
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveVendor(vendor.id)}
                          data-testid={`button-remove-vendor-${vendor.id}`}
                        >
                          <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Saved Materials */}
            <Card>
              <CardHeader>
                <CardTitle>Saved Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {savedMaterials.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">No saved materials yet</p>
                  ) : (
                    savedMaterials.map((material) => (
                      <div key={material.id} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                        <div>
                          <p className="font-semibold">{material.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {material.price} • {material.quantity}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveMaterial(material.id)}
                          data-testid={`button-remove-material-${material.id}`}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
