import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Camera, CheckCircle, Brain } from "lucide-react";

interface AIScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIScanModal = ({ isOpen, onClose }: AIScanModalProps) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setStep(1);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep(2);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const resetModal = () => {
    setStep(0);
    setProgress(0);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-500" />
            AI Skin Analysis
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-center">
          {step === 0 && (
            <>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <Camera className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ready to Analyze Your Skin?</h3>
                <p className="text-slate-600">Our AI will analyze your skin type, concerns, and recommend personalized products.</p>
              </div>
              <Button onClick={startScan} className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                Start Camera Scan
              </Button>
            </>
          )}
          
          {step === 1 && (
            <>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Analyzing Your Skin...</h3>
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-slate-600 mt-2">{progress}% Complete</p>
              </div>
            </>
          )}
          
          {step === 2 && (
            <>
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Analysis Complete!</h3>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-left">
                  <p className="font-medium">Your Results:</p>
                  <ul className="text-sm text-slate-600 mt-2 space-y-1">
                    <li>• Skin Type: Combination</li>
                    <li>• Hydration Level: 72%</li>
                    <li>• Recommended: Neural Moisturizer AM</li>
                  </ul>
                </div>
              </div>
              <Button onClick={resetModal} className="w-full">
                View Full Report
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};