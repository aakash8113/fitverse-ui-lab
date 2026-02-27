import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Package, MapPin, Calendar, Truck, CheckCircle, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface OrderItem {
  name: string;
  image: string;
  size: string;
  quantity: number;
  price: number;
}

interface TrackingStep {
  status: string;
  date: string;
  description: string;
  completed: boolean;
}

export default function OrderDetail() {
  const { orderId } = useParams();

  // Mock order data
  const order = {
    id: orderId || "ORD-2024-001",
    date: "Feb 20, 2026",
    status: "Delivered",
    estimatedDelivery: "Feb 25, 2026",
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
    ] as OrderItem[],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street, Apt 4B",
      city: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
    },
    payment: {
      method: "Credit Card",
      last4: "4242",
    },
    subtotal: 329.0,
    shipping: 0,
    tax: 26.32,
    total: 355.32,
  };

  const trackingSteps: TrackingStep[] = [
    {
      status: "Order Placed",
      date: "Feb 20, 2026 - 10:30 AM",
      description: "Your order has been confirmed",
      completed: true,
    },
    {
      status: "Processing",
      date: "Feb 20, 2026 - 2:15 PM",
      description: "Your order is being prepared",
      completed: true,
    },
    {
      status: "Shipped",
      date: "Feb 21, 2026 - 9:00 AM",
      description: "Package handed to courier",
      completed: true,
    },
    {
      status: "Out for Delivery",
      date: "Feb 23, 2026 - 8:30 AM",
      description: "Package is out for delivery",
      completed: true,
    },
    {
      status: "Delivered",
      date: "Feb 23, 2026 - 2:45 PM",
      description: "Package delivered successfully",
      completed: true,
    },
  ];

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="w-6 h-6 text-green-600" />;
    }
    
    switch (status) {
      case "Shipped":
      case "Out for Delivery":
        return <Truck className="w-6 h-6 text-blue-600" />;
      case "Processing":
        return <Clock className="w-6 h-6 text-yellow-600" />;
      default:
        return <Package className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-8 lg:py-12">
        {/* Back Button */}
        <Link to="/orders">
          <Button variant="ghost" className="mb-6 gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Orders
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Order Details</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Placed on {order.date}
            </span>
            <span>•</span>
            <span className="font-medium">Order #{order.id}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tracking & Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Tracking */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">Order Tracking</h2>
              
              <div className="relative space-y-8">
                {trackingSteps.map((step, idx) => (
                  <div key={idx} className="relative flex gap-4">
                    {/* Timeline Line */}
                    {idx < trackingSteps.length - 1 && (
                      <div
                        className={cn(
                          "absolute left-3 top-10 w-0.5 h-full",
                          step.completed ? "bg-green-600" : "bg-gray-200"
                        )}
                      />
                    )}
                    
                    {/* Icon */}
                    <div className="relative z-10 bg-background">
                      {getStatusIcon(step.status, step.completed)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3
                          className={cn(
                            "font-semibold",
                            step.completed ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {step.status}
                        </h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {step.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">Order Items</h2>
              
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Size: {item.size} • Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${item.price.toFixed(2)}</p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-muted-foreground">
                          ${(item.price / item.quantity).toFixed(2)} each
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Address */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {order.shipping === 0 ? "FREE" : `$${order.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${order.tax.toFixed(2)}</span>
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Shipping Address
              </h2>
              
              <div className="space-y-1 text-sm">
                <p className="font-medium">{order.shippingAddress.name}</p>
                <p className="text-muted-foreground">{order.shippingAddress.street}</p>
                <p className="text-muted-foreground">{order.shippingAddress.city}</p>
                <p className="text-muted-foreground">{order.shippingAddress.phone}</p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              
              <div className="text-sm">
                <p className="font-medium">{order.payment.method}</p>
                <p className="text-muted-foreground">•••• {order.payment.last4}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                Download Invoice
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
