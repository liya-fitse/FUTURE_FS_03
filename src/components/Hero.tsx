import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import intensiveFamily from "@/assets/products/intensive-cream-front.jpg";
import { AIScanModal } from "@/components/AIScanModal";

export const Hero = () => {
  const [showAIScan, setShowAIScan] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-fit">
              <Brain className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                AI-Powered Skincare Revolution
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Smart Skin
              </span>
              <br />
              <span className="text-slate-800">
                Meets Science
              </span>
              <div className="flex items-center gap-3 mt-4">
                <Sparkles className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl md:text-3xl text-slate-600 font-medium">
                  Personalized for You
                </span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Experience the future of skincare with AI-powered formulations that adapt to your unique skin needs. Get personalized recommendations in seconds.
            </p>

            {/* AI Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                <Zap className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Instant Analysis</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">AI Matching</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-pink-500" />
                <span className="text-sm font-medium text-slate-700">Smart Results</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => setShowAIScan(true)}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                Start AI Skin Scan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})}
                variant="outline" 
                className="px-8 py-6 text-lg border-2 border-slate-300 hover:bg-slate-50"
              >
                View Products
              </Button>
            </div>
            
            <AIScanModal isOpen={showAIScan} onClose={() => setShowAIScan(false)} />
          </div>

          {/* Hero Image with AI Elements */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-3xl" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-slate-700">AI Active</span>
              </div>
            </div>
            <img
              src={intensiveFamily}
              alt="CeraVe AI-Powered Skincare"
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
