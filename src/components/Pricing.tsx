import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { CheckoutModal } from "@/components/CheckoutModal";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<{name: string; price: string} | null>(null);
  const plans = [
    {
      name: "AI Starter",
      price: "$29",
      features: ["Basic AI Analysis", "2 Products", "Email Support"],
    },
    {
      name: "Smart Pro",
      price: "$59",
      popular: true,
      features: ["Advanced AI Analysis", "5 Products", "Custom Routine", "Priority Support"],
    },
    {
      name: "Neural Elite",
      price: "$99",
      features: ["Premium AI Analysis", "Unlimited Products", "Personal AI Coach", "24/7 Support"],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative ${plan.popular ? 'border-2 border-blue-500 shadow-2xl' : 'shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-slate-800">{plan.price}<span className="text-lg text-slate-500">/mo</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => setSelectedPlan(plan)}
                className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600' : ''}`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
        
        <CheckoutModal 
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          plan={selectedPlan || {name: '', price: ''}}
        />
      </div>
    </section>
  );
};