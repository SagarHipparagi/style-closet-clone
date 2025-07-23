import CategoryCard from "./CategoryCard";
import casualMens from "@/assets/casual-mens.jpg";
import formalMens from "@/assets/formal-mens.jpg";
import partyMens from "@/assets/party-mens.jpg";
import ethnicMens from "@/assets/ethnic-mens.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Casual Wear",
      description: "Comfortable and stylish for everyday occasions",
      image: casualMens,
      itemCount: 245,
    },
    {
      title: "Formal Suits",
      description: "Sharp business attire for professionals",
      image: formalMens,
      itemCount: 127,
    },
    {
      title: "Party Wear",
      description: "Stylish outfits for special occasions",
      image: partyMens,
      itemCount: 98,
    },
    {
      title: "Ethnic Wear",
      description: "Traditional designs with contemporary appeal",
      image: ethnicMens,
      itemCount: 156,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by <span className="bg-gradient-hero bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect outfit for any occasion in our carefully curated men's collections
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;