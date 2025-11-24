import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AIScanModal } from "@/components/AIScanModal";
import { DemoModal } from "@/components/DemoModal";

export const CTA = () => {
  const [showAIScan, setShowAIScan] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready for AI-Powered Skincare?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join millions who've transformed their skin with our smart technology. Get your personalized routine in under 60 seconds.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => setShowAIScan(true)}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg group"
            >
              Start Free AI Scan
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <AIScanModal isOpen={showAIScan} onClose={() => setShowAIScan(false)} />
          <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
          
          <p className="text-white/70 text-sm">
            ✨ No credit card required • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};