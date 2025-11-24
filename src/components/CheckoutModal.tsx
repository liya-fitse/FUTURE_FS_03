import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: { name: string; price: string; };
}

export const CheckoutModal = ({ isOpen, onClose, plan }: CheckoutModalProps) => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`🎉 Welcome to ${plan.name}! Your AI skincare journey begins now!`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Complete Your Order
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold text-blue-600">{plan.price}/month</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="card">Card Number</Label>
              <Input
                id="card"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Lock className="h-4 w-4" />
              Secured by 256-bit SSL encryption
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
              Start My AI Journey - {plan.price}/mo
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};