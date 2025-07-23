import CategoryCard from "./CategoryCard";
import casualDress from "@/assets/casual-dress.jpg";
import formalDress from "@/assets/formal-dress.jpg";
import partyDress from "@/assets/party-dress.jpg";
import ethnicDress from "@/assets/ethnic-dress.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Casual Dresses",
      description: "Comfortable and stylish for everyday wear",
      image: casualDress,
      itemCount: 145,
    },
    {
      title: "Formal Dresses",
      description: "Elegant pieces for professional settings",
      image: formalDress,
      itemCount: 89,
    },
    {
      title: "Party Dresses",
      description: "Glamorous outfits for special occasions",
      image: partyDress,
      itemCount: 124,
    },
    {
      title: "Ethnic Dresses",
      description: "Traditional designs with modern cuts",
      image: ethnicDress,
      itemCount: 97,
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
            Find the perfect dress for any occasion in our carefully curated collections
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