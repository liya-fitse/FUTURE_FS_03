export const TrustBanner = () => {
  const features = [
    "Developed With Dermatologists",
    "Gentle On All Skin-Types",
    "Made With 3 Essential Ceramides",
    "Fragrance Free",
  ];

  return (
    <section className="py-6 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex animate-scroll">
          {/* Duplicate for seamless scroll */}
          {[...features, ...features, ...features].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 whitespace-nowrap mx-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-foreground/70">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
