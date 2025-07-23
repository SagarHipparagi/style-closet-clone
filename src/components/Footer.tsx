import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              StyleHub
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Your ultimate destination for premium men's fashion. We curate the finest collection 
              to help every man dress with confidence and style.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Casual Wear</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Formal Suits</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Party Wear</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Ethnic Wear</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Returns & Exchange</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Press</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 StyleHub. All rights reserved.
            </p>
            <p className="text-background/60 text-sm mt-4 md:mt-0">
              Made with ❤️ for fashion lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;