import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Star } from "lucide-react";

interface Product {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal = ({ isOpen, onClose, product, onAddToCart }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain bg-gradient-to-br from-slate-50 to-white rounded-lg"
            />
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-slate-600">({product.reviews} reviews)</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">{product.subtitle}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-slate-500 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
            
            <p className="text-slate-600">{product.description}</p>
            
            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};