import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import intensiveCream from "@/assets/products/intensive-cream-front.jpg";
import blemishPatches from "@/assets/products/blemish-patches-front.jpg";

export const NewLaunches = () => {
  const products = [
    {
      image: intensiveCream,
      skinType: "For: Dry to Very Dry Skin",
      name: "Intensive Moisturizing Cream",
      rating: 4.8,
      reviews: 959,
      price: "$17.99",
    },
    {
      image: blemishPatches,
      skinType: "Oily, Blemish-Prone, and Sensitive Skin",
      name: "Blemish Barrier Patches",
      rating: 4.7,
      reviews: 870,
      price: "$9.99",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            New Launches
          </h2>
          <Button variant="link" className="text-primary">
            Explore Products →
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-8 space-y-6">
                <div className="aspect-square bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground font-medium">
                    {product.skinType}
                  </p>
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="ml-1 font-semibold text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <Button variant="hero">
                      Buy Online
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
