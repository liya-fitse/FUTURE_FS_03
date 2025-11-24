import nbaImage from "@/assets/nba-partnership.jpg";

export const NBAPartnership = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                The #1 Dermatologist Recommended Skincare Brand
              </h2>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                Is Now #1 On The Court
              </p>
            </div>
            <p className="text-lg text-muted-foreground">
              The Official Skincare & Haircare NBA Partner
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={nbaImage}
              alt="CeraVe NBA Partnership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
