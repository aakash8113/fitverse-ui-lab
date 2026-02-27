import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/fitverse-ai", label: "Fitverse AI", isAI: true },
  { href: "/thrift", label: "Thrift" },
  { href: "/", label: "About" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/50">
      <div className="section-container">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="gradient-ai rounded-lg p-2">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Fitverse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link text-sm font-medium transition-colors",
                  location.pathname === link.href && "nav-link-active",
                  link.isAI && "gradient-ai-text font-semibold"
                )}
              >
                {link.isAI && <Sparkles className="inline-block h-3.5 w-3.5 mr-1" />}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium text-accent-foreground flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    location.pathname === link.href 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground",
                    link.isAI && "gradient-ai-text font-semibold"
                  )}
                >
                  {link.isAI && <Sparkles className="inline-block h-4 w-4 mr-1.5" />}
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
