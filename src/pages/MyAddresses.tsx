import { useState } from "react";
import { MapPin, Plus, Edit2, Trash2, Home, Briefcase } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface Address {
  id: string;
  type: "home" | "work";
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export default function MyAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      type: "home",
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      isDefault: true,
    },
    {
      id: "2",
      type: "work",
      name: "John Doe",
      phone: "+1 (555) 987-6543",
      street: "456 Office Plaza, Suite 200",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      isDefault: false,
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [deleteAddressId, setDeleteAddressId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<Address, "id" | "isDefault">>({
    type: "home",
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const resetForm = () => {
    setFormData({
      type: "home",
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
    setEditingAddress(null);
  };

  const handleAddAddress = () => {
    const newAddress: Address = {
      ...formData,
      id: Date.now().toString(),
      isDefault: addresses.length === 0,
    };
    setAddresses([...addresses, newAddress]);
    setIsAddDialogOpen(false);
    resetForm();
  };

  const handleEditAddress = () => {
    if (!editingAddress) return;
    
    setAddresses(
      addresses.map((addr) =>
        addr.id === editingAddress.id ? { ...addr, ...formData } : addr
      )
    );
    setIsAddDialogOpen(false);
    resetForm();
  };

  const handleDeleteAddress = () => {
    if (!deleteAddressId) return;
    
    const newAddresses = addresses.filter((addr) => addr.id !== deleteAddressId);
    
    // If deleted address was default and there are other addresses, make first one default
    if (
      addresses.find((addr) => addr.id === deleteAddressId)?.isDefault &&
      newAddresses.length > 0
    ) {
      newAddresses[0].isDefault = true;
    }
    
    setAddresses(newAddresses);
    setDeleteAddressId(null);
  };

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const openEditDialog = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      type: address.type,
      name: address.name,
      phone: address.phone,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    });
    setIsAddDialogOpen(true);
  };

  const AddressCard = ({ address }: { address: Address }) => (
    <div
      className={cn(
        "bg-card border rounded-2xl p-6 relative",
        address.isDefault ? "border-foreground" : "border-border"
      )}
    >
      {address.isDefault && (
        <div className="absolute top-4 right-4">
          <span className="text-xs px-2 py-1 rounded-full bg-foreground text-background font-medium">
            Default
          </span>
        </div>
      )}

      <div className="flex items-start gap-3 mb-4">
        <div
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            address.type === "home"
              ? "bg-blue-500/10 text-blue-600"
              : "bg-purple-500/10 text-purple-600"
          )}
        >
          {address.type === "home" ? (
            <Home className="w-5 h-5" />
          ) : (
            <Briefcase className="w-5 h-5" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 capitalize">
            {address.type}
          </h3>
          <p className="text-muted-foreground text-sm">
            {address.name} • {address.phone}
          </p>
        </div>
      </div>

      <div className="space-y-1 text-sm mb-6">
        <p>{address.street}</p>
        <p>
          {address.city}, {address.state} {address.zipCode}
        </p>
      </div>

      <div className="flex gap-2">
        {!address.isDefault && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleSetDefault(address.id)}
            className="flex-1"
          >
            Set as Default
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => openEditDialog(address)}
        >
          <Edit2 className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setDeleteAddressId(address.id)}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">My Addresses</h1>
            <p className="text-muted-foreground">
              Manage your delivery addresses
            </p>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={(open) => {
            setIsAddDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Address
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>
                  {editingAddress ? "Edit Address" : "Add New Address"}
                </DialogTitle>
                <DialogDescription>
                  {editingAddress
                    ? "Update your address details"
                    : "Add a new delivery address"}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Address Type</Label>
                  <RadioGroup
                    value={formData.type}
                    onValueChange={(value) =>
                      setFormData({ ...formData, type: value as "home" | "work" })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="home" id="home" />
                      <Label htmlFor="home" className="cursor-pointer">
                        Home
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="work" id="work" />
                      <Label htmlFor="work" className="cursor-pointer">
                        Work
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="street">Street Address *</Label>
                  <Textarea
                    id="street"
                    placeholder="123 Main St, Apt 4B"
                    value={formData.street}
                    onChange={(e) =>
                      setFormData({ ...formData, street: e.target.value })
                    }
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      placeholder="NY"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      placeholder="10001"
                      value={formData.zipCode}
                      onChange={(e) =>
                        setFormData({ ...formData, zipCode: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setIsAddDialogOpen(false);
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={editingAddress ? handleEditAddress : handleAddAddress}
                  disabled={
                    !formData.name ||
                    !formData.phone ||
                    !formData.street ||
                    !formData.city ||
                    !formData.state ||
                    !formData.zipCode
                  }
                >
                  {editingAddress ? "Update" : "Add"} Address
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Addresses Grid */}
        {addresses.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No addresses yet</h3>
            <p className="text-muted-foreground mb-6">
              Add a delivery address to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addresses.map((address) => (
              <AddressCard key={address.id} address={address} />
            ))}
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        <AlertDialog
          open={deleteAddressId !== null}
          onOpenChange={() => setDeleteAddressId(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Address?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this address? This action cannot be
                undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteAddress}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Footer />
    </div>
  );
}
