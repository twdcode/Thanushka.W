
import React from 'react';
import { Button } from '@/components/ui/button';
import { X, Film } from 'lucide-react';

interface DirectorNotesProps {
  isOpen: boolean;
  content: string;
  onClose: () => void;
}

const DirectorNotes = ({ isOpen, content, onClose }: DirectorNotesProps) => {
  return (
    <div className={`director-notes ${isOpen ? 'active' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Film className="w-4 h-4 text-white/70" />
          <h3 className="text-sm font-medium text-white/90 tracking-wide">
            DIRECTOR'S NOTES
          </h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-white/60 hover:text-white p-1 h-auto"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="w-full h-px bg-white/20 mb-4" />
      
      <div className="text-sm text-white/80 leading-relaxed font-light">
        {content || "Click on the eye icon next to any section to reveal the creative process behind the design decisions."}
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-white/50 italic">
          "Every design choice tells a story. This is mine."
        </p>
      </div>
    </div>
  );
};

export default DirectorNotes;
