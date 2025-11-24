import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, Sparkles } from "lucide-react";
import { AIScanModal } from "@/components/AIScanModal";
import { CartModal } from "@/components/CartModal";
import { useCart } from "@/context/CartContext";

export const Header = () => {
  const [showAIScan, setShowAIScan] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartCount } = useCart();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CeraVe
            </h1>
            <span className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full font-medium">
              AI-Powered
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => document.getElementById('products')?.scrollIntoView({behavior: 'smooth'})}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Smart Skincare
            </a>
            <a 
              onClick={() => setShowAIScan(true)}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              AI Skin Analysis
            </a>
            <a 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Custom Routine
            </a>
            <a 
              onClick={() => document.getElementById('benefits')?.scrollIntoView({behavior: 'smooth'})}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Science
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => setShowCart(true)}
              variant="ghost" 
              size="icon" 
              className="hidden sm:flex hover:bg-blue-50 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button 
              onClick={() => setShowAIScan(true)}
              className="hidden sm:flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Try AI Scan
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <AIScanModal isOpen={showAIScan} onClose={() => setShowAIScan(false)} />
      <CartModal isOpen={showCart} onClose={() => setShowCart(false)} />
    </header>
  );
};
