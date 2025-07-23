import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  itemCount: number;
}

const CategoryCard = ({ title, description, image, itemCount }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-card shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
      <div className="aspect-[3/4] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 mb-4">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">{itemCount} items</span>
              <Button variant="hero" size="sm">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Info (Always Visible) */}
      <div className="p-4 bg-background">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{itemCount} styles available</p>
      </div>
    </div>
  );
};

export default CategoryCard;