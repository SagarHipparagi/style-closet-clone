import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dresses.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Discover Your
            <span className="block bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              Perfect Dress
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-slide-up">
            Explore our curated collection of stunning dresses for every occasion. 
            From casual day wear to elegant evening gowns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button variant="hero" size="lg" className="text-lg">
              Shop Now
            </Button>
            <Button variant="shop" size="lg" className="text-lg">
              Explore Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;