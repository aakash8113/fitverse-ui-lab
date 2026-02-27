import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, ChevronRight, Calendar, Search } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  date: string;
  total: number;
  status: "Delivered" | "Processing" | "Shipped" | "Cancelled";
  itemCount: number;
  items: {
    name: string;
    image: string;
    size: string;
    quantity: number;
    price: number;
  }[];
}

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock orders data
  const orders: Order[] = [
    {
      id: "ORD-2024-001",
      date: "Feb 20, 2026",
      total: 329.0,
      status: "Delivered",
      itemCount: 2,
      items: [
        {
          name: "Premium Cotton T-Shirt",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
          size: "L",
          quantity: 1,
          price: 149.0,
        },
        {
          name: "Slim Fit Jeans",
          image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
          size: "32",
          quantity: 1,
          price: 180.0,
        },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "Feb 15, 2026",
      total: 189.0,
      status: "Processing",
      itemCount: 1,
      items: [
        {
          name: "Sports Hoodie",
          image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
          size: "M",
          quantity: 1,
          price: 189.0,
        },
      ],
    },
    {
      id: "ORD-2024-003",
      date: "Feb 10, 2026",
      total: 456.0,
      status: "Shipped",
      itemCount: 3,
      items: [
        {
          name: "Winter Jacket",
          image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
          size: "L",
          quantity: 1,
          price: 299.0,
        },
        {
          name: "Casual Shirt",
          image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
          size: "M",
          quantity: 2,
          price: 78.5,
        },
      ],
    },
    {
      id: "ORD-2024-004",
      date: "Jan 28, 2026",
      total: 259.0,
      status: "Delivered",
      itemCount: 2,
      items: [
        {
          name: "Running Shorts",
          image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
          size: "M",
          quantity: 2,
          price: 129.5,
        },
      ],
    },
    {
      id: "ORD-2024-005",
      date: "Jan 15, 2026",
      total: 89.0,
      status: "Cancelled",
      itemCount: 1,
      items: [
        {
          name: "Basic T-Shirt",
          image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400",
          size: "S",
          quantity: 1,
          price: 89.0,
        },
      ],
    },
  ];

  const filterOrders = (status?: Order["status"]) => {
    let filtered = orders;
    
    if (status) {
      filtered = filtered.filter((order) => order.status === status);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.items.some((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }
    
    return filtered;
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500/10 text-green-700";
      case "Processing":
        return "bg-yellow-500/10 text-yellow-700";
      case "Shipped":
        return "bg-blue-500/10 text-blue-700";
      case "Cancelled":
        return "bg-red-500/10 text-red-700";
      default:
        return "bg-gray-500/10 text-gray-700";
    }
  };

  const OrderCard = ({ order }: { order: Order }) => (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
      {/* Order Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 pb-4 border-b border-border">
        <div>
          <h3 className="font-semibold text-lg mb-1">{order.id}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{order.date}</span>
            <span>•</span>
            <span>{order.itemCount} items</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
            <p className="font-semibold text-lg">${order.total.toFixed(2)}</p>
          </div>
          <span
            className={cn(
              "text-xs px-3 py-1.5 rounded-full font-medium",
              getStatusColor(order.status)
            )}
          >
            {order.status}
          </span>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-3 mb-4">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">
                Size: {item.size} • Qty: {item.quantity}
              </p>
            </div>
            <p className="font-semibold">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link to={`/orders/${order.id}`} className="flex-1">
          <Button variant="outline" className="w-full gap-2">
            View Details
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
        {order.status === "Delivered" && (
          <Button variant="default" className="flex-1">
            Buy Again
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">My Orders</h1>
          <p className="text-muted-foreground">
            Track and manage all your orders
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by order ID or product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all">All Orders ({orders.length})</TabsTrigger>
            <TabsTrigger value="processing">
              Processing ({filterOrders("Processing").length})
            </TabsTrigger>
            <TabsTrigger value="shipped">
              Shipped ({filterOrders("Shipped").length})
            </TabsTrigger>
            <TabsTrigger value="delivered">
              Delivered ({filterOrders("Delivered").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filterOrders().length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">No orders found</p>
                <p className="text-muted-foreground mb-6">
                  {searchQuery
                    ? "Try adjusting your search"
                    : "Start shopping to see your orders here"}
                </p>
                <Link to="/shop">
                  <Button>Browse Products</Button>
                </Link>
              </div>
            ) : (
              filterOrders().map((order) => (
                <OrderCard key={order.id} order={order} />
              ))
            )}
          </TabsContent>

          <TabsContent value="processing" className="space-y-4">
            {filterOrders("Processing").map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>

          <TabsContent value="shipped" className="space-y-4">
            {filterOrders("Shipped").map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>

          <TabsContent value="delivered" className="space-y-4">
            {filterOrders("Delivered").map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
