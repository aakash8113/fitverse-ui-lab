import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Heart, 
  Bookmark, 
  Star, 
  ChevronRight, 
  Minus, 
  Plus, 
  ThumbsUp, 
  MessageCircle,
  ChevronLeft
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductCard, Product } from "@/components/shop/ProductCard";
import { cn } from "@/lib/utils";

// Import product images
import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";
import product5 from "@/assets/products/product-5.jpg";
import product6 from "@/assets/products/product-6.jpg";

// Mock product data
const allProducts: Product[] = [
  {
    id: "1",
    name: "Long Sleeve Overshirt, Khaki, 6",
    brand: "John Lewis ANYDAY",
    price: 28.00,
    originalPrice: 40.00,
    image: product1,
    sizes: ["6", "8", "10", "14", "18", "20"],
    category: "women",
    isNew: false,
  },
  {
    id: "2",
    name: "Premium Leather Jacket",
    brand: "URBAN",
    price: 329.00,
    image: product2,
    sizes: ["S", "M", "L", "XL"],
    category: "men",
  },
  {
    id: "3",
    name: "Cashmere Turtleneck Sweater",
    brand: "COZY",
    price: 149.00,
    image: product3,
    sizes: ["XS", "S", "M", "L"],
    category: "women",
  },
  {
    id: "4",
    name: "Elegant Navy Midi Dress",
    brand: "CHIC",
    price: 199.00,
    originalPrice: 279.00,
    image: product4,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "women",
    isNew: true,
  },
  {
    id: "5",
    name: "Urban Cargo Joggers",
    brand: "STREET",
    price: 89.00,
    image: product5,
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "men",
  },
  {
    id: "6",
    name: "Vintage Denim Jacket",
    brand: "RETRO",
    price: 159.00,
    originalPrice: 199.00,
    image: product6,
    sizes: ["XS", "S", "M", "L"],
    category: "women",
  },
];

// Mock reviews data
const reviews = [
  {
    id: 1,
    author: "Darrell Steward",
    rating: 5,
    date: "June 28, 2024 / 7:04 PM",
    title: "This is amazing product have.",
    helpful: 9,
    verified: true,
  },
  {
    id: 2,
    author: "Darlene Robertson",
    rating: 5,
    date: "June 28, 2024 / 3:04 PM",
    title: "This is amazing product have.",
    helpful: 10,
    verified: false,
  },
  {
    id: 3,
    author: "Kathryn Murphy",
    rating: 5,
    date: "June 28, 2024 / 7:04 PM",
    title: "This is amazing product have.",
    helpful: 5,
    verified: true,
  },
  {
    id: 4,
    author: "Shawn Kennedy",
    rating: 5,
    date: "June 28, 2024 / 12:04 AM",
    title: "This is amazing product have.",
    helpful: 124,
    verified: false,
  },
];

const colors = [
  { name: "Royal Brown", value: "#8B7355", available: true },
  { name: "Royal Blue", value: "#4169E1", available: true },
  { name: "Navy", value: "#1E3A8A", available: true },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("8");
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const productImages = [product.image, product.image, product.image, product.image, product.image];
  const relatedProducts = allProducts.filter(p => p.id !== id).slice(0, 5);

  const ratingDistribution = [
    { stars: 5, count: 20551 },
    { stars: 4, count: 30 },
    { stars: 3, count: 4 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  const totalReviews = ratingDistribution.reduce((acc, curr) => acc + curr.count, 0);
  const averageRating = 4.5;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="section-container py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Homepage</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-foreground transition-colors">Women</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="section-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden relative group">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Wishlist and Save buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-sm"
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-sm"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-3">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all",
                    selectedImage === idx ? "border-foreground" : "border-transparent hover:border-border"
                  )}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">
            {/* Brand and Name */}
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">{product.name}</h1>
              
              {/* Price and Rating */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-baseline gap-3">
                  {product.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through">
                      £{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-3xl font-bold">£{product.price.toFixed(2)}</span>
                </div>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{averageRating}</span>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                    1232 Sold
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    4.5 Good
                  </Badge>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Relaxed and stylish but not over slouchy casual style over soft-seams and a flat hem waits. Soft
                Cotton in solid colors, pin stripes, florals you name it, flatters your build and gives a personable
                appearance...
                {showFullDescription && (
                  <span>
                    {" "}The perfect blend of comfort and style, this versatile piece can be dressed up or down for any occasion. 
                    Made from premium materials that ensure durability and long-lasting wear.
                  </span>
                )}
              </p>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-sm text-primary hover:underline mt-1"
              >
                {showFullDescription ? "See Less..." : "See More..."}
              </button>
            </div>

            <Separator />

            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">
                  Color: <span className="text-muted-foreground font-normal">{colors[selectedColor].name}</span>
                </h3>
              </div>
              <div className="flex gap-3">
                {colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    disabled={!color.available}
                    className={cn(
                      "w-12 h-12 rounded-lg border-2 transition-all",
                      selectedColor === idx ? "border-foreground scale-110" : "border-border hover:border-muted-foreground",
                      !color.available && "opacity-40 cursor-not-allowed"
                    )}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Size: <span className="text-muted-foreground font-normal">{selectedSize}</span></h3>
                <button className="text-sm text-primary hover:underline">View Size Chart</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 rounded-lg border-2 transition-all font-medium",
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-muted-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-12 w-12 rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-12 w-12 rounded-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button size="lg" className="h-12 text-base font-semibold">
                  Add To Cart
                </Button>
                <Button size="lg" variant="outline" className="h-12 text-base font-semibold">
                  Checkout Now
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Delivery:</span> TBC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="section-container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Related Product</h2>
          <Link to="/shop" className="text-sm font-medium hover:underline flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {relatedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>

      {/* Product Reviews */}
      <div className="section-container py-12">
        <h2 className="text-2xl font-bold mb-8">Product Reviews</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Overall Rating */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center justify-center p-8 border-2 border-border rounded-2xl">
              <div className="text-6xl font-bold mb-2">{averageRating}</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{totalReviews.toLocaleString()} User reviews</p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-4">
                  <span className="text-sm font-medium w-8">{item.stars}.0</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground"
                      style={{ width: `${(item.count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" size="sm">All Reviews</Button>
            <Button variant="ghost" size="sm">With Photo & Video</Button>
            <Button variant="ghost" size="sm">With Description</Button>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-border pb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{review.author}</p>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1.5">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{review.helpful}</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm">{review.title}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">...</Button>
            <Button variant="outline" size="sm">10</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Popular this week */}
      <div className="section-container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Popular this week</h2>
          <Link to="/shop" className="text-sm font-medium hover:underline flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {relatedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
