import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The AI skin analysis was spot-on! My custom routine cleared my acne in 2 weeks.",
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Smart moisturizer adapts to weather changes. My skin has never looked better!",
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "Finally, skincare that actually understands my skin. The results are incredible.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              10M+ Happy Users
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-slate-800">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};