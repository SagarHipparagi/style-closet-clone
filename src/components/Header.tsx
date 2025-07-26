import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              StyleHub
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Casual
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Formal
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Party
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Ethnic
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Accessories
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for men's clothing..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#23232a] via-[#18181b] to-[#23232a] py-28 px-4 flex items-center justify-center min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#f6d365]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fda085]/10 rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#f6d365] bg-clip-text text-transparent mb-6 drop-shadow-lg">
          Elevate Your Style
        </h1>
        <p className="text-xl md:text-2xl text-[#e0c3fc] mb-8">
          Discover curated collections for every occasion. Shop the latest trends
          in men’s fashion with StyleHub.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full bg-[#f6d365] text-[#23232a] font-semibold text-lg shadow-lg hover:bg-[#fda085] transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* Other sections */}
    </div>
  );
}