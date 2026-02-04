import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShoppingBag, Recycle, Star, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard, Product } from "@/components/shop/ProductCard";

import product1 from "@/assets/products/product-1.jpg";
import product2 from "@/assets/products/product-2.jpg";
import product3 from "@/assets/products/product-3.jpg";
import product4 from "@/assets/products/product-4.jpg";
import product5 from "@/assets/products/product-5.jpg";
import product6 from "@/assets/products/product-6.jpg";
import heroAI from "@/assets/hero-ai.jpg";
import thriftHero from "@/assets/thrift-hero.jpg";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Tailored White Blazer Set",
    brand: "LUXE",
    price: 189.00,
    originalPrice: 249.00,
    image: product1,
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "women",
    isNew: true,
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
];

const features = [
  {
    icon: Sparkles,
    title: "AI Virtual Try-On",
    description: "See how clothes look on you before buying with our advanced AI technology.",
    color: "gradient-ai",
  },
  {
    icon: ShoppingBag,
    title: "Premium Fashion",
    description: "Curated collection from top brands with new arrivals every week.",
    color: "bg-primary",
  },
  {
    icon: Recycle,
    title: "Sustainable Thrift",
    description: "Shop pre-loved fashion and reduce your carbon footprint.",
    color: "bg-thrift-green",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Fashion Blogger",
    content: "The AI try-on is a game changer. I've cut my returns by 80% since using Fitverse!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Verified Buyer",
    content: "Finally, I can shop with confidence. The virtual try-on is incredibly accurate.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Sustainability Advocate",
    content: "Love the thrift section! Great finds at amazing prices, plus it's eco-friendly.",
    rating: 5,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
            <img
              src={heroAI}
              alt="Fashion tech"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>

        <div className="section-container relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="badge-ai mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Fashion
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              Try Before
              <br />
              <span className="gradient-ai-text">You Buy</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Experience the future of fashion with our AI virtual try-on. See exactly how clothes fit you — from anywhere.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/fitverse-ai">
                <Button className="btn-ai h-12 px-8 text-base">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Try AI Try-On
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" className="h-12 px-8 text-base btn-outline-premium">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-12 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold">2M+</p>
                <p className="text-sm text-muted-foreground">Try-Ons</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50k+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Fitverse</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing how you shop for fashion with cutting-edge technology and sustainable choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Try-On Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-ai-subtle" />
        <div className="section-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-ai mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Core Feature
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Virtual Try-On
                <br />
                <span className="gradient-ai-text">Powered by AI</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our advanced AI technology creates realistic virtual try-ons in seconds. 
                Upload your photo, select any item, and see exactly how it fits you.
              </p>

              <ul className="space-y-4 mb-8">
                {["Ultra-realistic rendering", "Works with any photo", "100% privacy guaranteed", "Instant results"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-ai flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/fitverse-ai">
                <Button className="btn-ai h-12 px-8">
                  Try It Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-ai bg-gradient-to-br from-ai-purple/20 to-ai-blue/20 p-8">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={heroAI}
                    alt="AI Try-On Demo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button className="w-20 h-20 rounded-full gradient-ai flex items-center justify-center shadow-ai hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-ai rounded-2xl blur-3xl opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">New Arrivals</h2>
              <p className="text-muted-foreground">Fresh styles just dropped</p>
            </div>
            <Link to="/shop">
              <Button variant="ghost" className="group">
                View All
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Thrift Section */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={thriftHero}
                  alt="Sustainable Fashion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="badge-thrift mb-4">
                <Recycle className="w-3.5 h-3.5" />
                Sustainable Fashion
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Shop Pre-Loved,
                <br />
                <span className="text-thrift-green">Save the Planet</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our thrift community and discover unique pre-owned pieces. 
                Every purchase saves an average of 2.5kg CO₂ emissions.
              </p>

              <div className="bg-card rounded-2xl p-6 border border-border/50 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-thrift-green/10 flex items-center justify-center">
                    <Recycle className="w-6 h-6 text-thrift-green" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-thrift-green">12,500 kg</p>
                    <p className="text-sm text-muted-foreground">CO₂ saved by our community</p>
                  </div>
                </div>
              </div>

              <Link to="/thrift">
                <Button className="bg-thrift-green hover:bg-thrift-green/90 text-white h-12 px-8">
                  Explore Thrift Store
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Join thousands of happy shoppers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-soft"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-fashion-gold text-fashion-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container">
          <div className="gradient-ai rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mx-auto mb-6 animate-float" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Transform Your Shopping?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join Fitverse today and experience the future of fashion. Free to try, no credit card required.
              </p>
              <Link to="/fitverse-ai">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-10 text-base font-semibold">
                  Start Your Free Try-On
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
