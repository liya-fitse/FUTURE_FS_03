import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Zap, Target, ShoppingCart, Star } from "lucide-react";
import { ProductModal } from "@/components/ProductModal";
import { useCart } from "@/context/CartContext";
import hydratingCleanser from "@/assets/products/hydrating-cleanser.png";
import amMoisturizer from "@/assets/products/am-moisturizer.png";
import bodyMoisturizer from "@/assets/products/body-moisturizer.png";
import acnePatches from "@/assets/products/acne-patches.png";
import sunscreen from "@/assets/products/sunscreen.png";
import antiAging from "@/assets/products/anti-aging.png";
import baby from "@/assets/products/baby.png";
import haircare from "@/assets/products/haircare.png";

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      title: "AI Smart Cleanser",
      subtitle: "Adaptive Hydrating Formula",
      image: hydratingCleanser,
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 5,
      reviews: 1247,
      description: "Revolutionary AI-powered cleanser that adapts to your skin's pH levels in real-time.",
      features: ["pH Balancing Technology", "Ceramides & Hyaluronic Acid", "Gentle for Daily Use", "Fragrance-Free"],
      aiFeature: "pH Balancing",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Neural Moisturizer AM",
      subtitle: "Morning Protection Complex",
      image: amMoisturizer,
      price: "$32.99",
      rating: 5,
      reviews: 892,
      description: "Smart moisturizer with SPF that adjusts protection based on UV levels and weather conditions.",
      features: ["SPF 30 Protection", "UV Adaptive Formula", "24-Hour Hydration", "Non-Greasy Finish"],
      aiFeature: "UV Adaptive",
      icon: Sparkles,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Body Hydrator",
      subtitle: "All-Day Moisture Lock",
      image: bodyMoisturizer,
      price: "$19.99",
      rating: 4,
      reviews: 2156,
      description: "Climate-responsive body lotion that adjusts hydration levels based on environmental conditions.",
      features: ["Climate Sync Technology", "48-Hour Moisture", "Fast Absorbing", "Suitable for Sensitive Skin"],
      aiFeature: "Climate Sync",
      icon: Zap,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Precision Acne Patches",
      subtitle: "Targeted Spot Treatment",
      image: acnePatches,
      price: "$15.99",
      rating: 5,
      reviews: 634,
      description: "AI-powered patches that release active ingredients based on blemish severity and healing stage.",
      features: ["Smart Release Technology", "Invisible Protection", "6-12 Hour Wear", "Salicylic Acid Formula"],
      aiFeature: "Smart Release",
      icon: Target,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Neural Sunscreen SPF 50",
      subtitle: "Adaptive UV Protection",
      image: sunscreen,
      price: "$28.99",
      rating: 5,
      reviews: 445,
      description: "Smart sunscreen that adjusts protection intensity based on real-time UV index and skin exposure.",
      features: ["Broad Spectrum SPF 50", "Water Resistant 80min", "Blue Light Protection", "Reef Safe Formula"],
      aiFeature: "UV Adaptive",
      icon: Sparkles,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI Anti-Aging Serum",
      subtitle: "Intelligent Skin Renewal",
      image: antiAging,
      price: "$45.99",
      originalPrice: "$52.99",
      rating: 5,
      reviews: 789,
      description: "Advanced serum with AI-guided peptide delivery that targets your specific aging concerns.",
      features: ["Retinol + Peptides", "Personalized Formula", "Visible Results in 2 weeks", "Dermatologist Tested"],
      aiFeature: "Age Analysis",
      icon: Brain,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Smart Baby Care Set",
      subtitle: "Gentle AI Protection",
      image: baby,
      price: "$34.99",
      rating: 5,
      reviews: 1023,
      description: "AI-formulated baby care products that adapt to your baby's sensitive skin needs.",
      features: ["Tear-Free Formula", "Hypoallergenic", "Pediatrician Approved", "Natural Ingredients"],
      aiFeature: "Gentle Care",
      icon: Sparkles,
      gradient: "from-green-400 to-blue-400"
    },
    {
      title: "Neural Hair & Scalp Care",
      subtitle: "Smart Scalp Analysis",
      image: haircare,
      price: "$26.99",
      rating: 4,
      reviews: 567,
      description: "AI-powered hair care system that analyzes scalp health and delivers targeted treatment.",
      features: ["Scalp Health Analysis", "Strengthening Formula", "Sulfate-Free", "All Hair Types"],
      aiFeature: "Scalp Scan",
      icon: Brain,
      gradient: "from-indigo-500 to-purple-500"
    },
  ];



  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <span className="text-slate-800"> Product Line</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Each product uses advanced AI algorithms to adapt to your skin's unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                onClick={() => setSelectedProduct(product)}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className={`bg-gradient-to-r ${product.gradient} text-white border-0`}>
                      <IconComponent className="h-3 w-3 mr-1" />
                      {product.aiFeature}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-slate-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-800">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {product.subtitle}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-blue-600">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-slate-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product, 1);
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      >
                        <ShoppingCart className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
          onAddToCart={addToCart}
        />
      </div>
    </section>
  );
};
