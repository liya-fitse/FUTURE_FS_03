import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sun, Sparkles } from "lucide-react";

export const ProductCategories = () => {
  const categories = [
    {
      title: "Facial Cleansers",
      description: "Gentle cleansing for every skin type",
      icon: Droplets,
      gradient: "from-primary/10 to-accent/20",
    },
    {
      title: "Daily Moisturizers",
      description: "24-hour hydration and protection",
      icon: Sun,
      gradient: "from-secondary/30 to-accent/10",
    },
    {
      title: "Targeted Treatments",
      description: "Advanced care for specific concerns",
      icon: Sparkles,
      gradient: "from-accent/20 to-primary/10",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Find Your Perfect Routine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dermatologist-developed skincare for every skin concern
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between p-0 h-auto text-primary hover:text-primary"
                  >
                    <span className="font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
