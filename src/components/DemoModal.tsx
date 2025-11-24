import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Sparkles, Users, Award } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-blue-500" />
            CeraVe AI Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <p className="text-slate-600">Interactive Demo Video</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium">AI Analysis</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm font-medium">10M+ Users</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm font-medium">Award Winning</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">What You'll See:</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Real-time skin analysis in action</li>
              <li>• AI product recommendations</li>
              <li>• Before/after transformations</li>
              <li>• Personalized routine creation</li>
            </ul>
          </div>
          
          <div className="flex gap-3">
            <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600">
              Watch Full Demo
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};