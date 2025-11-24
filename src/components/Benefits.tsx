import { Brain, Cpu, Zap, Sparkles } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "AI Skin Analysis",
      description: "Advanced machine learning algorithms analyze your skin in real-time to provide personalized recommendations.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Smart Formulations",
      description: "Our AI-powered lab creates custom formulas that adapt to your skin's changing needs throughout the day.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "See visible improvements in just 15 minutes with our fast-acting, scientifically-backed ingredients.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Sparkles,
      title: "Future-Proof Care",
      description: "Continuously learning technology that evolves with your skin, ensuring optimal results over time.",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Technology
            </span>
            <span className="text-slate-800"> Meets Skincare</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the future of personalized skincare with our revolutionary AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group text-center space-y-6 p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
